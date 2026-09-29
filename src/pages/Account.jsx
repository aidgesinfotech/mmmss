import { Link } from "react-router-dom";
import Page from "../components/Page";
import { useCart } from "../context/cart";
import { useToast } from "../context/toast";
import useLocalStorage from "../hooks/useLocalStorage";
import { KEYS } from "../lib/storage";

export default function Account() {
  const [profile, setProfile] = useLocalStorage(KEYS.profile, {});
  const [orders, setOrders] = useLocalStorage(KEYS.orders, []);
  const [, setAddress] = useLocalStorage(KEYS.address, {});
  const { count, clearCart } = useCart();
  const toast = useToast();

  const save = (e) => {
    e.preventDefault();
    setProfile(Object.fromEntries(new FormData(e.currentTarget)));
    toast("Profile saved");
  };

  const clearAll = () => {
    if (!window.confirm("Clear cart, orders and profile?")) return;
    clearCart();
    setOrders([]);
    setAddress({});
    setProfile({});
    toast("All data cleared");
  };

  return (
    <Page docTitle="Account" header={{ title: "My Account", back: true }}>
      <section className="pd-card profile">
        <div className="avatar">{(profile.name || "G").charAt(0).toUpperCase()}</div>
        <div>
          <div className="profile-name">{profile.name || "Guest User"}</div>
          <div className="muted">{profile.phone || "Add your mobile number"}</div>
        </div>
      </section>

      <form key={profile.name + profile.phone} className="pd-card form" onSubmit={save}>
        <h3 className="section-title">Edit Profile</h3>
        <label>
          Name
          <input name="name" defaultValue={profile.name || ""} />
        </label>
        <label>
          Mobile
          <input name="phone" inputMode="numeric" maxLength={10} defaultValue={profile.phone || ""} />
        </label>
        <button className="btn btn-primary full" type="submit">
          Save
        </button>
      </form>

      <section className="pd-card menu-list">
        <Link to="/orders">
          <span>My Orders</span>
          <span className="muted">{orders.length}</span>
        </Link>
        <Link to="/cart">
          <span>My Cart</span>
          <span className="muted">{count}</span>
        </Link>
        <Link to="/help">
          <span>Help Centre</span>
          <span className="muted">›</span>
        </Link>
        <button onClick={clearAll}>
          <span>Clear All Data</span>
          <span className="muted">›</span>
        </button>
      </section>
    </Page>
  );
}
