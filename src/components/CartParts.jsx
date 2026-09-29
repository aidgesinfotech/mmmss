import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart";
import { offPercent } from "../data/store";
import { findProduct, money, moneyExact } from "../lib/format";
import { EmptyCartIcon, TickIcon, TrashIcon } from "./Icons";

export function CartItem({ item }) {
  const { summary, setQty, removeFromCart, closeDrawer } = useCart();
  const p = findProduct(item.id);
  const free = summary.freeById[p.id] || 0;

  return (
    <div className="cart-item">
      <img src={p.img} alt="" loading="lazy" />
      <div className="cart-item-info">
        <div className="cart-item-top">
          <Link to={`/product/${p.id}`} className="cart-item-name" onClick={closeDrawer}>
            {p.name}
          </Link>
          <button className="icon-btn" onClick={() => removeFromCart(p.id)} aria-label="Remove">
            <TrashIcon />
          </button>
        </div>
        <div className="price-row">
          <span className="sell-price">{money(p.price)}</span>
          <span className="mrp">{money(p.mrp)}</span>
          <span className="off">{offPercent(p.mrp, p.price)}% off</span>
        </div>
        <div className="cart-item-bottom">
          <div className="qty">
            <button onClick={() => setQty(p.id, item.qty - 1)} aria-label="Decrease">−</button>
            <span>{String(item.qty).padStart(2, "0")}</span>
            <button onClick={() => setQty(p.id, item.qty + 1)} aria-label="Increase">+</button>
          </div>
          {free > 0 && <span className="free-tag">🎁 {free} FREE</span>}
        </div>
      </div>
    </div>
  );
}

export function CartLine({ item }) {
  const { summary, setQty, removeFromCart } = useCart();
  const p = findProduct(item.id);
  const free = summary.freeById[p.id] || 0;
  const qty = String(item.qty).padStart(2, "0");

  return (
    <div className="cart-line">
      <Link to={`/product/${p.id}`} className="cart-line-img">
        <img src={p.img} alt={p.name} loading="lazy" />
      </Link>
      <div className="cart-line-info">
        <div className="cart-line-top">
          <Link to={`/product/${p.id}`} className="cart-line-name">
            {p.name}
          </Link>
          <button className="icon-btn" onClick={() => removeFromCart(p.id)} aria-label="Remove">
            <TrashIcon />
          </button>
        </div>
        <div className="cart-line-price">
          <span>{money(p.price)}</span>
          <s>{money(p.mrp)}</s>
        </div>
        <div className="cart-line-qty">
          <span>Qty :{qty}</span>
          <div className="stepper">
            <button onClick={() => setQty(p.id, item.qty - 1)} aria-label="Decrease">-</button>
            <span>{qty}</span>
            <button onClick={() => setQty(p.id, item.qty + 1)} aria-label="Increase">+</button>
          </div>
        </div>
        <p className="cart-line-offer">
          Offer: Buy 2 Get 1 Free 🎁
          <br />
          You got <b>{free}</b> item(s) free!
        </p>
      </div>
    </div>
  );
}

export function CartTotals({ extraOff = 0 }) {
  const { summary: s } = useCart();
  return (
    <section className="cart-totals" id="price-details">
      <div className="ct-row">
        <span>Shipping:</span>
        <span>FREE</span>
      </div>
      <div className="ct-row dotted">
        <span>Total Product Price:</span>
        <span>{moneyExact(s.subtotal)}</span>
      </div>
      {s.offerDiscount > 0 && (
        <div className="ct-row offer">
          <span>Buy 2 Get 1 Offer:</span>
          <span>− {moneyExact(s.offerDiscount)}</span>
        </div>
      )}
      {extraOff > 0 && (
        <div className="ct-row offer">
          <span>Online Payment Discount:</span>
          <span>− {moneyExact(extraOff)}</span>
        </div>
      )}
      <div className="ct-row total">
        <span>Order Total :</span>
        <span>{moneyExact(s.total - extraOff)}</span>
      </div>
    </section>
  );
}

export function OfferHint() {
  const { summary: s } = useCart();
  if (!s.units) return null;
  const need = 3 - (s.units % 3);
  return need === 3 ? (
    <div className="offer-hint ok">🎉 Offer applied! You got {s.freeCount} item(s) free</div>
  ) : (
    <div className="offer-hint">Add {need} more item(s) to get 1 FREE</div>
  );
}

export function EmptyCart({ text = "Your cart is feeling lonely", onShop }) {
  return (
    <div className="empty">
      <EmptyCartIcon />
      <p>{text}</p>
      <Link to="/" className="btn btn-primary" onClick={onShop}>
        Start Shopping
      </Link>
    </div>
  );
}

export function PriceDetails() {
  const { summary: s } = useCart();
  return (
    <section className="pd-card" id="price-details">
      <h3 className="section-title">Price Details ({s.units} Items)</h3>
      <div className="sum-row">
        <span>Total MRP</span>
        <span>{money(s.mrpTotal)}</span>
      </div>
      <div className="sum-row green">
        <span>Discount on MRP</span>
        <span>− {money(s.mrpTotal - s.subtotal)}</span>
      </div>
      {s.offerDiscount > 0 && (
        <div className="sum-row green">
          <span>Buy 2 Get 1 Offer</span>
          <span>− {money(s.offerDiscount)}</span>
        </div>
      )}
      <div className="sum-row">
        <span>Delivery</span>
        <span className="green">FREE</span>
      </div>
      <div className="sum-row total">
        <span>Order Total</span>
        <span>{money(s.total)}</span>
      </div>
      <div className="savings">🎉 You are saving {money(s.mrpTotal - s.total)} on this order</div>
    </section>
  );
}

const STEPS = ["Cart", "Address", "Payment", "Summary"];

export function Steps({ active }) {
  return (
    <div className="steps">
      {STEPS.map((label, i) => {
        const n = i + 1;
        const state = n < active ? "complete" : n === active ? "current" : "";
        return (
          <Fragment key={label}>
            {i > 0 && <span className={`step-line${n <= active ? " done" : ""}`} />}
            <div className={`step ${state}`}>
              <span className="step-dot">{state === "complete" ? <TickIcon /> : n}</span>
              <span className="step-label">{label}</span>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
