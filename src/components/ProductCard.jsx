import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import { offPercent } from "../data/store";
import { money } from "../lib/format";
import DealTimer from "./DealTimer";
import { PlayIcon, StarIcon } from "./Icons";

function ProductCard({ product: p }) {
  const navigate = useNavigate();
  const { addToCart, inCart } = useCart();
  const open = () => navigate(`/product/${p.id}`);

  const buyNow = (e) => {
    e.stopPropagation();
    if (!inCart(p.id)) addToCart(p.id);
    navigate("/cart");
  };

  return (
    <div className="product-card" role="link" tabIndex={0} onClick={open} onKeyDown={(e) => e.key === "Enter" && open()}>
      <div className="product-img">
        <img src={p.img} alt={p.name} loading="lazy" />
        {/* {p.tag && <span className="tag">{p.tag}</span>} */}
      </div>
      <div className="product-info">
        <h3 className="product-name">{p.name}</h3>
        <div className="price-row">
          <span className="sell-price">{money(p.price)}</span>
          <span className="mrp">{money(p.mrp)}</span>
          <span className="off">{offPercent(p.mrp, p.price)}% off</span>
        </div>
        {/* <div className="free-delivery">Free Delivery</div> */}
        <div className="rating-row">
          <span className="rating">
            {p.rating} <StarIcon />
          </span>
          <span>{p.reviews.toLocaleString("en-IN")} Reviews</span>
        </div>
        <DealTimer className="card-timer" icon="bomb" />
        <button className="buy-btn" onClick={buyNow}>
          <PlayIcon /> Buy Now
        </button>
      </div>
    </div>
  );
}

export default memo(ProductCard);
