import { useState, useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CartTotals, EmptyCart, Steps } from "../components/CartParts";
import { ChevronDownIcon, ShieldIcon } from "../components/Icons";
import Page from "../components/Page";
import { useCart } from "../context/cart";
import useLocalStorage from "../hooks/useLocalStorage";
import { moneyExact } from "../lib/format";
import { STORE } from "../data/store";
import { getSettings } from "../lib/shop";
import { KEYS } from "../lib/storage";

// Generate a UUID-like order id  e.g. 6cf79a12-3d2c-97ed-bafa-59db...
function makeOrderId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

// UPI deep-link builder
// Exact format: phonepe:upi://pay?pa=<upiId>&pn=Online%20Shopping&am=<amount>&cu=INR&tn=OrderNo%3A%20<orderId>
// Teeno apps (GPay, PhonePe, Paytm) mein yahi link fire hogi — dynamic UPI ID aur amount ke saath.
function buildUpiUrl(appId, upiId, amount, orderId) {
  void appId; // sabke liye same scheme — phonepe:upi://

  const pa = encodeURIComponent(upiId);          // dynamic: settings.upiId
  const pn = "Online%20Shopping";
  const am = Number(amount).toFixed(0);           // dynamic: cart total
  const tn = `OrderNo%3A%20${orderId}`;          // OrderNo: <uuid>

  // ✅ Exact format: phonepe:upi://pay?pa=...&pn=...&am=...&cu=INR&tn=...
  return `phonepe:upi://pay?pa=${pa}&pn=${pn}&am=${am}&cu=INR&tn=${tn}`;
}



function fmt(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${m}:${s}`;
}

async function cashfreePaid(orderId) {
  const res = await fetch(`/api/pay/cashfree/${orderId}`, { headers: { Accept: "application/json" } });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Could not check payment");
  return data.paid === true;
}

const WAIT_SECONDS = 30 * 60;
const ONLINE_OFF   = STORE.onlineOff;

const ALL_UPI_APPS = [
  { id: "gpay",    name: "G Pay",   logo: "/payments/gpay.png",    setting: "isGpayEnable" },
  { id: "phonepe", name: "PhonePe", logo: "/payments/phonepe.png", green: true, setting: "isPhonepeEnable" },
  { id: "paytm",   name: "Paytm",   logo: "/payments/paytm.png",   setting: "isPaytmEnable" },
];

// ── Waiting-for-payment popup ─────────────────────────────────────────────────
function WaitingPopup({ amount, orderId, onSuccess, onCancel }) {
  const [left, setLeft]   = useState(WAIT_SECONDS);
  const navigate           = useNavigate();
  const timerRef           = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          navigate(`/order-success/${orderId}`, { replace: true });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [orderId, navigate]);

  const circ = 2 * Math.PI * 24;
  const pct  = (WAIT_SECONDS - left) / WAIT_SECONDS;

  return (
    <div className="wp-backdrop">
      <div className="wp-box">
        <div className="wp-ring">
          <svg viewBox="0 0 56 56" className="wp-svg">
            <circle cx="28" cy="28" r="24" className="wp-track" />
            <circle
              cx="28" cy="28" r="24"
              className="wp-progress"
              strokeDasharray={circ}
              strokeDashoffset={circ * (1 - pct)}
            />
          </svg>
          <span className="wp-timer">{fmt(left)}</span>
        </div>

        <h3 className="wp-title">Waiting for Payment</h3>
        <p className="wp-sub">
          Complete payment of <strong>{moneyExact(amount)}</strong> in the UPI app.
          <br />This page confirms automatically.
        </p>

        <div className="wp-actions">
          <button className="btn btn-primary wp-btn" onClick={onSuccess}>
            Payment Done ✓
          </button>
          <button className="wp-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function CashfreeWait({ orderId, url, popupBlocked, onSuccess, onCancel }) {
  const [error, setError] = useState("");
  const done = useRef(onSuccess);

  useEffect(() => {
    done.current = onSuccess;
  });

  useEffect(() => {
    let stop = false;
    const tick = async () => {
      try {
        if (await cashfreePaid(orderId)) {
          stop = true;
          done.current();
        }
      } catch (e) {
        if (!stop) setError(e.message);
      }
    };
    tick();
    const timer = setInterval(tick, 3000);
    return () => {
      stop = true;
      clearInterval(timer);
    };
  }, [orderId]);

  return (
    <div className="wp-backdrop">
      <div className="wp-box">
        <h3 className="wp-title">Waiting for Payment</h3>
        <p className="wp-sub">
          Complete the payment on Cashfree.
          {popupBlocked ? " The payment window was blocked — open it from the button below." : " This page confirms automatically."}
        </p>
        {error && <p className="pay-error">{error}</p>}
        <div className="wp-actions">
          <button type="button" className="btn btn-primary wp-btn" onClick={() => window.open(url, "_blank", "noopener,noreferrer")}>
            Open Cashfree
          </button>
          <button className="wp-cancel" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function Payment() {
  const { summary: s, clearCart } = useCart();
  const [address]                  = useLocalStorage(KEYS.address, {});
  const [orders, setOrders]        = useLocalStorage(KEYS.orders, []);
  const settings                   = getSettings();
  const cashfreeOn                 = settings.paymentGateway === "cashfree";
  const upiApps                    = ALL_UPI_APPS.filter((a) => settings[a.setting]);
  const [app, setApp]              = useState(upiApps[0]?.id);
  const [upiOpen, setUpiOpen]      = useState(true);
  const [waiting, setWaiting]      = useState(null); // { orderId, amount, cashfree?, url?, popupBlocked? }
  const [paying, setPaying]        = useState(false);
  const [payError, setPayError]    = useState("");
  const navigate                   = useNavigate();
  const header                     = { title: "PAYMENT", back: true };

  const extraOff = Math.min(ONLINE_OFF, s.total);
  const payable  = s.total - extraOff;

  // Guard — skip if payment is already in progress (cart will be empty by then)
  if (!waiting && !paying) {
    if (!s.lines.length)             return <Page docTitle="Payment" header={header}><EmptyCart /></Page>;
    if (!Object.keys(address).length) return <Navigate to="/address" replace />;
  }

  const payNow = () => {
    const orderId = makeOrderId();
    const amount  = payable;

    // 1️⃣ Show popup immediately (before clearCart so guard doesn't redirect)
    setWaiting({ orderId, amount });

    // 2️⃣ Persist order
    setOrders([
      {
        id: orderId,
        date: new Date().toISOString(),
        items: s.lines.map(({ id, qty }) => ({ id, qty })),
        total: amount,
        discount: s.mrpTotal - amount,
        address,
        payment: `UPI - ${upiApps.find((a) => a.id === app)?.name ?? "UPI"}`,
        status: "Pending",
      },
      ...orders,
    ]);

    // 3️⃣ Clear cart
    clearCart();

    // 4️⃣ UPI app ko seedha open karo — Pay Now click pe instant redirect
    const upiId = settings.upiId;
    if (upiId) {
      window.location.href = buildUpiUrl(app, upiId, amount, orderId);
    }
  };

  const placeOrder = (orderId, amount, payment) => {
    setOrders([
      {
        id: orderId,
        date: new Date().toISOString(),
        items: s.lines.map(({ id, qty }) => ({ id, qty })),
        total: amount,
        discount: s.mrpTotal - amount,
        address,
        payment,
        status: "Pending",
      },
      ...orders,
    ]);
  };

  const payCashfree = async () => {
    const phone = String(address.phone || "").replace(/\D/g, "").slice(-10);
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setPayError("Enter a valid 10-digit mobile number on the address page.");
      return;
    }
    if (!settings.cashfreeReady) {
      setPayError("Cashfree is not set up yet.");
      return;
    }
    const orderId = makeOrderId();
    const amount = payable;
    setPaying(true);
    setPayError("");
    try {
      const res = await fetch("/api/pay/cashfree", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, amount, name: address.name || "Customer", phone }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Could not start Cashfree");
      if (data.paid) {
        placeOrder(orderId, amount, "Cashfree");
        clearCart();
        navigate(`/order-success/${orderId}`, { replace: true });
        return;
      }
      placeOrder(orderId, amount, "Cashfree");
      clearCart();
      if (data.returns) {
        setWaiting({ orderId, amount, cashfree: true, url: data.url, popupBlocked: false });
        window.location.assign(data.url);
        return;
      }
      const popup = window.open(data.url, "_blank");
      setWaiting({ orderId, amount, cashfree: true, url: data.url, popupBlocked: !popup });
    } catch (e) {
      setPayError(e.message);
    } finally {
      setPaying(false);
    }
  };

  const handleSuccess = () => {
    if (waiting?.cashfree) {
      setOrders((list) => list.map((o) => (o.id === waiting.orderId ? { ...o, status: "Paid" } : o)));
    }
    navigate(`/order-success/${waiting.orderId}`, { replace: true });
  };
  const handleCancel  = () => { setWaiting(null); navigate("/cart", { replace: true }); };

  const bar = {
    content: (
      <>
        <div className="cart-bar-total">
          <div className="big-price">{moneyExact(payable)}</div>
          <a href="#price-details">VIEW PRICE DETAILS</a>
        </div>
        <button
          className="btn btn-primary cart-continue"
          onClick={cashfreeOn ? payCashfree : payNow}
          disabled={!!waiting || paying || (cashfreeOn ? !settings.cashfreeReady : !upiApps.length)}
        >
          {paying ? "Please wait…" : "Pay Now"}
        </button>
      </>
    ),
  };

  return (
    <>
      <Page docTitle="Payment" header={header} bar={bar}>
        <Steps active={3} />

        <section className="pay-card">
          <div className="pay-head">
            <h3>Select Payment Method</h3>
            <span className="pay-safe">
              <ShieldIcon />
              <span>
                {(cashfreeOn ? settings.cashfreeReady : settings.upiId)
                  ? <>100% SECURE<br />PAYMENT</>
                  : <>DEMO MODE<br />NO REAL PAYMENT</>}
              </span>
            </span>
          </div>

          <div className="pay-offer">
            <span className="pay-offer-icon">%</span>
            Pay online &amp; get EXTRA ₹{ONLINE_OFF} off
          </div>

          <div className="pay-divider">PAY ONLINE</div>

          {payError && <p className="pay-error">{payError}</p>}

          {cashfreeOn ? (
            <div className="pay-cashfree">
              <span className="upi-tag">CF</span>
              <div>
                <strong>Cashfree</strong>
                <span>{settings.cashfreeReady ? "Cards, UPI, netbanking" : "Not set up yet"}</span>
              </div>
            </div>
          ) : (
          <div className="upi-group">
            <button
              type="button"
              className="upi-head"
              onClick={() => setUpiOpen((o) => !o)}
              aria-expanded={upiOpen}
            >
              <span className="upi-tag">UPI</span>
              <span className="upi-title">UPI(GPay/PhonePe/Paytm)</span>
              <span className={`upi-chevron${upiOpen ? " open" : ""}`}>
                <ChevronDownIcon />
              </span>
            </button>

            {upiOpen && !upiApps.length && (
              <p className="upi-none">No payment method is available right now.</p>
            )}
            {upiOpen &&
              upiApps.map((a) => (
                <label key={a.id} className={`upi-option${a.green ? " green" : ""}`}>
                  <input
                    type="radio" name="upi" value={a.id}
                    checked={app === a.id}
                    onChange={() => setApp(a.id)}
                  />
                  <span className="upi-name">{a.name}</span>
                  <img className="upi-logo" src={a.logo} alt={a.name} />
                </label>
              ))}
          </div>
          )}
        </section>

        <CartTotals extraOff={extraOff} />
      </Page>

      {waiting?.cashfree ? (
        <CashfreeWait
          orderId={waiting.orderId}
          url={waiting.url}
          popupBlocked={waiting.popupBlocked}
          onSuccess={handleSuccess}
          onCancel={handleCancel}
        />
      ) : waiting ? (
        <WaitingPopup
          amount={waiting.amount}
          orderId={waiting.orderId}
          onSuccess={handleSuccess}
          onCancel={handleCancel}
        />
      ) : null}
    </>
  );
}
