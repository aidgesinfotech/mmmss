import { useCallback, useEffect, useState } from "react";
import { NavLink, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Admins from "./Admins";
import { api, getToken, setToken } from "./api";
import Login from "./Login";
import Products from "./Products";
import Settings from "./Settings";
import "./admin.css";

export default function AdminApp() {
  const [session, setSession] = useState(null);
  const [checking, setChecking] = useState(() => !!getToken());
  const navigate = useNavigate();

  const logout = useCallback(() => {
    setToken(null);
    setSession(null);
    navigate("/admin/login", { replace: true });
  }, [navigate]);

  useEffect(() => {
    document.title = "Admin";
    window.addEventListener("kishoo-admin-logout", logout);
    return () => window.removeEventListener("kishoo-admin-logout", logout);
  }, [logout]);

  useEffect(() => {
    if (!getToken()) return;
    api("me")
      .then(setSession)
      .catch(() => setSession(null))
      .finally(() => setChecking(false));
  }, []);

  const onLogin = (data) => {
    setToken(data.token);
    setSession({ admin: data.admin, store: data.store });
    navigate("/admin/products", { replace: true });
  };

  if (checking) {
    return (
      <div className="adm-center">
        <div className="spinner" />
      </div>
    );
  }

  if (!session) {
    return (
      <Routes>
        <Route path="login" element={<Login onLogin={onLogin} />} />
        <Route path="*" element={<Navigate to="/admin/login" replace />} />
      </Routes>
    );
  }

  return (
    <div className="adm">
      <header className="adm-top">
        <div className="adm-brand">
          <img src="/logo.png" alt="" />
          <div>
            <b>Admin Panel</b>
            <span>{session.store.domain}</span>
          </div>
        </div>
        <div className="adm-user">
          <a href="/" target="_blank" rel="noreferrer" className="adm-btn ghost">
            View Store
          </a>
          <span className="adm-hello">{session.admin.username}</span>
          <button type="button" className="adm-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </header>

      <nav className="adm-tabs">
        <NavLink to="/admin/products">Products</NavLink>
        <NavLink to="/admin/admins">Admin Users</NavLink>
        <NavLink to="/admin/settings">Settings</NavLink>
      </nav>

      <main className="adm-main">
        <Routes>
          <Route path="products" element={<Products />} />
          <Route path="admins" element={<Admins meId={session.admin.id} />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/admin/products" replace />} />
        </Routes>
      </main>
    </div>
  );
}
