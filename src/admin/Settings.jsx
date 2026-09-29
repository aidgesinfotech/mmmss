import { useEffect, useState } from "react";
import { useToast } from "../context/toast";
import { api } from "./api";

const TOGGLES = [
  { key: "isGpayEnable", label: "Google Pay", logo: "/payments/gpay.png" },
  { key: "isPhonepeEnable", label: "PhonePe", logo: "/payments/phonepe.png" },
  { key: "isPaytmEnable", label: "Paytm", logo: "/payments/paytm.png" },
];

const blankGateway = {
  paymentGateway: "upi",
  cashfreeAppId: "",
  cashfreeSecret: "",
  cashfreeEnv: "production",
};

export default function Settings() {
  const toast = useToast();
  const [s, setS] = useState(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    api("settings")
      .then((d) => setS({ ...blankGateway, ...d.settings }))
      .catch((e) => setError(e.message));
  }, []);

  const save = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const d = await api("settings", { method: "PUT", body: s });
      setS(d.settings);
      toast("Settings saved");
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  if (!s) return error ? <div className="adm-error">{error}</div> : <div className="adm-center small"><div className="spinner" /></div>;

  return (
    <>
      <div className="adm-toolbar">
        <h2>Settings</h2>
      </div>
      <form className="adm-card adm-settings" onSubmit={save}>
        <div className="adm-field">
          <span>Checkout</span>
          <div className="adm-switch" role="group" aria-label="Payment gateway">
            {[
              ["upi", "UPI"],
              ["cashfree", "Cashfree"],
            ].map(([id, label]) => (
              <button key={id} type="button" className={s.paymentGateway === id ? "active" : ""} onClick={() => setS({ ...s, paymentGateway: id })}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {s.paymentGateway === "cashfree" ? (
          <>
            <label className="adm-field">
              <span>API Key</span>
              <input value={s.cashfreeAppId} onChange={(e) => setS({ ...s, cashfreeAppId: e.target.value })} placeholder="Cashfree App ID" autoComplete="off" spellCheck={false} />
            </label>
            <label className="adm-field">
              <span>Secret Key</span>
              <input type="password" value={s.cashfreeSecret} onChange={(e) => setS({ ...s, cashfreeSecret: e.target.value })} placeholder="Cashfree secret" autoComplete="new-password" spellCheck={false} />
            </label>
            <label className="adm-field">
              <span>Environment</span>
              <select value={s.cashfreeEnv} onChange={(e) => setS({ ...s, cashfreeEnv: e.target.value })}>
                <option value="production">Live</option>
                <option value="sandbox">Test</option>
              </select>
            </label>
            <p className="adm-hint">Payment opens on Cashfree’s page. Only this API key and secret are needed — no domain whitelist.</p>
          </>
        ) : (
          <>
            <label className="adm-field">
              <span>UPI ID</span>
              <input value={s.upiId} onChange={(e) => setS({ ...s, upiId: e.target.value })} placeholder="yourname@okaxis" />
            </label>

            <div className="adm-field">
              <span>Payment apps shown at checkout</span>
              <div className="adm-toggles">
                {TOGGLES.map((t) => (
                  <label key={t.key} className="adm-toggle">
                    <img src={t.logo} alt="" />
                    <span>{t.label}</span>
                    <input type="checkbox" checked={s[t.key]} onChange={(e) => setS({ ...s, [t.key]: e.target.checked })} />
                    <i />
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        {error && <div className="adm-error">{error}</div>}
        <div className="adm-modal-foot">
          <button className="adm-btn primary" disabled={busy}>
            {busy ? "Saving…" : "Save Settings"}
          </button>
        </div>
      </form>
    </>
  );
}
