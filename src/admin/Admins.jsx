import { useEffect, useState } from "react";
import { useToast } from "../context/toast";
import { api } from "./api";

export default function Admins({ meId }) {
  const toast = useToast();
  const [admins, setAdmins] = useState(null);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    api("admins")
      .then((d) => setAdmins(d.admins))
      .catch((e) => setError(e.message));
  }, []);

  const saved = (a, isNew) => {
    setAdmins((list) => (isNew ? [...list, a] : list.map((x) => (x.id === a.id ? { ...x, ...a } : x))));
    setEditing(null);
    toast(isNew ? "Admin added" : "Admin updated");
  };

  const remove = async (a) => {
    if (!window.confirm(`Delete admin "${a.username}"?`)) return;
    try {
      await api(`admins/${a.id}`, { method: "DELETE" });
      setAdmins((list) => list.filter((x) => x.id !== a.id));
      toast("Admin deleted");
    } catch (e) {
      toast(e.message);
    }
  };

  if (error) return <div className="adm-error">{error}</div>;
  if (!admins) return <div className="adm-center small"><div className="spinner" /></div>;

  return (
    <>
      <div className="adm-toolbar">
        <h2>
          Admin Users <span className="adm-muted">({admins.length})</span>
        </h2>
        <button type="button" className="adm-btn primary" onClick={() => setEditing({ username: "", password: "" })}>
          + Add Admin
        </button>
      </div>

      <div className="adm-card adm-table-wrap">
        <table className="adm-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Created</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {admins.map((a) => (
              <tr key={a.id}>
                <td>
                  <b>{a.username}</b> {a.id === meId && <span className="adm-pill on">You</span>}
                </td>
                <td className="adm-muted">{a.createdAt ? new Date(a.createdAt).toLocaleString("en-IN") : "—"}</td>
                <td className="adm-actions">
                  <button type="button" className="adm-btn small" onClick={() => setEditing({ id: a.id, username: a.username, password: "" })}>
                    Edit
                  </button>
                  <button type="button" className="adm-btn small danger" onClick={() => remove(a)} disabled={a.id === meId || admins.length <= 1}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editing && <AdminForm admin={editing} onClose={() => setEditing(null)} onSaved={saved} />}
    </>
  );
}

function AdminForm({ admin, onClose, onSaved }) {
  const isNew = !admin.id;
  const [f, setF] = useState(admin);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const d = await api(isNew ? "admins" : `admins/${admin.id}`, { method: isNew ? "POST" : "PUT", body: f });
      onSaved({ ...d.admin, createdAt: isNew ? new Date().toISOString() : undefined }, isNew);
    } catch (err) {
      setError(err.message);
      setBusy(false);
    }
  };

  return (
    <div className="adm-modal" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <form className="adm-card adm-modal-body narrow" onSubmit={submit}>
        <div className="adm-modal-head">
          <h3>{isNew ? "Add Admin" : "Edit Admin"}</h3>
          <button type="button" className="adm-x" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <label className="adm-field">
          <span>Username *</span>
          <input value={f.username} onChange={(e) => setF({ ...f, username: e.target.value })} required minLength={3} maxLength={100} autoComplete="off" />
        </label>
        <label className="adm-field">
          <span>{isNew ? "Password *" : "New Password (leave empty to keep current)"}</span>
          <input
            type="text"
            value={f.password}
            onChange={(e) => setF({ ...f, password: e.target.value })}
            required={isNew}
            minLength={4}
            maxLength={255}
            autoComplete="new-password"
          />
        </label>
        {error && <div className="adm-error">{error}</div>}
        <div className="adm-modal-foot">
          <button type="button" className="adm-btn ghost" onClick={onClose}>
            Cancel
          </button>
          <button className="adm-btn primary" disabled={busy}>
            {busy ? "Saving…" : isNew ? "Add Admin" : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
