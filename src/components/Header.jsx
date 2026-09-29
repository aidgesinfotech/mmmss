import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import { useToast } from "../context/toast";
import { STORE } from "../data/store";
import { BackIcon, CartIcon, CloseIcon, HeartIcon, MenuIcon } from "./Icons";

export default function Header({ title, back = false, close = false }) {
  const navigate = useNavigate();
  const { count, openDrawer } = useCart();
  const toast = useToast();

  const goBack = () => (window.history.state?.idx > 0 ? navigate(-1) : navigate("/"));

  return (
    <header className="header">
      <div className="header-row">
        <div className="header-left">
          {back ? (
            <button className="icon-btn" onClick={goBack} aria-label={close ? "Close" : "Back"}>
              {close ? <CloseIcon /> : <BackIcon />}
            </button>
          ) : (
            <Link to="/category" className="icon-btn" aria-label="Menu">
              <MenuIcon />
            </Link>
          )}
          {title ? (
            <h1 className="header-title">{title}</h1>
          ) : (
            <Link to="/" className="logo">
              <img src="/logo.png" alt={STORE.name} />
            </Link>
          )}
        </div>
        <div className="header-right">
          <button className="icon-btn" aria-label="Wishlist" onClick={() => toast("Wishlist coming soon")}>
            <HeartIcon />
          </button>
          <button className="icon-btn" aria-label="Cart" onClick={openDrawer}>
            <CartIcon />
            {count > 0 && <span className="cart-badge">{count}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
