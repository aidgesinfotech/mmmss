import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CheckIcon } from "../components/Icons";
import Page from "../components/Page";
import useLocalStorage from "../hooks/useLocalStorage";
import { moneyExact } from "../lib/format";
import { KEYS, readJSON } from "../lib/storage";

export default function PaymentReturn() {
  const { orderId } = useParams();
  const [, setOrders] = useLocalStorage(KEYS.orders, []);
  const [state, setState] = useState("checking");
  const [amount, setAmount] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let stop = false;

    const check = async () => {
      setState("checking");
      setMessage("");
      try {
        for (let i = 0; i < 5 && !stop; i++) {
          const res = await fetch(`/api/pay/cashfree/${orderId}`, { headers: { Accept: "application/json" } });
          const data = await res.json().catch(() => ({}));
          if (!res.ok) throw new Error(data.error || "Could not check payment");
          if (data.paid) {
            setOrders((list) => list.map((o) => (o.id === orderId ? { ...o, status: "Paid" } : o)));
            setAmount(data.amount);
            if (readJSON(KEYS.orders, []).some((o) => o.id === orderId)) {
              navigate(`/order-success/${orderId}`, { replace: true });
            } else if (!stop) setState("paid");
            return;
          }
          if (i < 4) await new Promise((r) => setTimeout(r, 2000));
        }
        if (!stop) setState("pending");
      } catch (e) {
        if (!stop) {
          setState("error");
          setMessage(e.message);
        }
      }
    };

    check();
    return () => {
      stop = true;
    };
  }, [orderId, navigate, setOrders]);

  return (
    <Page docTitle="Payment" header={{ title: "PAYMENT", back: true }}>
      <div className="empty success">
        {state === "checking" && (
          <>
            <div className="spinner" />
            <h2>Checking payment…</h2>
          </>
        )}
        {state === "paid" && (
          <>
            <CheckIcon />
            <h2>Payment received</h2>
            {amount > 0 && <p>Total: {moneyExact(amount)}</p>}
            <Link to="/" className="btn btn-primary">Continue Shopping</Link>
          </>
        )}
        {state === "pending" && (
          <>
            <h2>Payment not completed</h2>
            <p className="muted">If you already paid, wait a moment and check again.</p>
            <button className="btn btn-primary" onClick={() => window.location.reload()}>Check again</button>
            <Link to="/orders" className="btn btn-outline">My Orders</Link>
          </>
        )}
        {state === "error" && (
          <>
            <h2>Could not confirm payment</h2>
            <p className="muted">{message}</p>
            <button className="btn btn-primary" onClick={() => window.location.reload()}>Try again</button>
          </>
        )}
      </div>
    </Page>
  );
}
