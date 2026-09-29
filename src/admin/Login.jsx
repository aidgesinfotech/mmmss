import { useState } from "react";
import { api } from "./api";

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      onLogin(await api("login", { method: "POST", body: form }));
    } catch (err) {
      setError(err.message);
      setBusy(false);
    }
  };

  return (
    <div className="adm-center adm-login-bg">
      <form className="adm-card adm-login" onSubmit={submit}>
        <img src="/logo.png" alt="" className="adm-login-logo" />
        <h1>Admin Login</h1>
        <p className="adm-muted">{window.location.hostname}</p>
        <label className="adm-field">
          <span>Username</span>
          <input autoFocus autoComplete="username" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} required />
        </label>
        <label className="adm-field">
          <span>Password</span>
          <input type="password" autoComplete="current-password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        </label>
        {error && <div className="adm-error">{error}</div>}
        <button className="adm-btn primary block" disabled={busy}>
          {busy ? "Signing in…" : "Login"}
        </button>
      </form>
    </div>
  );
}
