import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import { money } from "../lib/format";
import { CartItem, EmptyCart, OfferHint } from "./CartParts";
import { CloseIcon } from "./Icons";

export default function CartDrawer() {
  const { summary: s, drawerOpen, closeDrawer } = useCart();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    closeDrawer();
  }, [pathname, closeDrawer]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && closeDrawer();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen, closeDrawer]);

  return (
    <>
      <div className={`overlay${drawerOpen ? " show" : ""}`} onClick={closeDrawer} />
      <aside className={`drawer${drawerOpen ? " open" : ""}`} aria-label="Your Cart" aria-hidden={!drawerOpen}>
        <div className="drawer-head">
          <h3>Your Cart</h3>
          <button className="icon-btn" onClick={closeDrawer} aria-label="Close">
            <CloseIcon />
          </button>
        </div>

        <div className="drawer-body">
          {s.lines.length ? (
            <>
              <OfferHint />
              {s.lines.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </>
          ) : (
            <EmptyCart onShop={closeDrawer} />
          )}
        </div>

        {s.lines.length > 0 && (
          <div className="drawer-foot">
            <div className="sum-row">
              <span>Cart Total</span>
              <span>{money(s.subtotal)}</span>
            </div>
            {s.offerDiscount > 0 && (
              <div className="sum-row green">
                <span>Buy 2 Get 1 Offer</span>
                <span>− {money(s.offerDiscount)}</span>
              </div>
            )}
            <div className="sum-row">
              <span>Shipping</span>
              <span className="green">FREE</span>
            </div>
            <div className="checkout-bar">
              <div>
                <div className="big-price">{money(s.total)}</div>
                <small>Inclusive of all taxes</small>
              </div>
              <button className="btn btn-primary" onClick={() => navigate("/cart")}>
                Confirm Order
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
