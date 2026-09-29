import { useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DealTimer from "../components/DealTimer";
import { BoltIcon, ShareIcon, StarIcon, ThumbIcon, TrustedIcon, UserIcon, WishIcon } from "../components/Icons";
import Page from "../components/Page";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/cart";
import { useToast } from "../context/toast";
import { offPercent } from "../data/store";
import useLocalStorage from "../hooks/useLocalStorage";
import { findProduct, money, moneyExact } from "../lib/format";
import { RATING_LABELS, productMeta } from "../lib/productMeta";
import { getProducts } from "../lib/shop";
import { KEYS } from "../lib/storage";

const BAR_COLORS = ["#038d63", "#21a179", "#f4b740", "#f08a24", "#e11900"];
const REVIEWS_STEP = 4;

export default function Product() {
  const { id } = useParams();
  const p = findProduct(id);

  if (!p) {
    return (
      <Page docTitle="Not found" header={{ back: true }}>
        <div className="empty">
          <p>Product not found</p>
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </Page>
    );
  }
  // key resets gallery position when moving between products
  return <ProductView key={p.id} p={p} />;
}

function ProductView({ p }) {
  const navigate = useNavigate();
  const toast = useToast();
  const { addToCart, inCart, openDrawer } = useCart();
  const [wishlist, setWishlist] = useLocalStorage(KEYS.wishlist, []);
  const [slide, setSlide] = useState(0);
  const [offersOpen, setOffersOpen] = useState(false);
  const gallery = useRef(null);

  const meta = useMemo(() => productMeta(p), [p]);
  const similar = useMemo(
    () => {
      const all = getProducts();
      return [...all.filter((x) => x.category === p.category && x.id !== p.id), ...all.filter((x) => x.category !== p.category)].slice(0, 6);
    },
    [p]
  );

  const wished = wishlist.includes(p.id);
  const toggleWish = () => {
    setWishlist((w) => (w.includes(p.id) ? w.filter((x) => x !== p.id) : [...w, p.id]));
    toast(wished ? "Removed from wishlist" : "Added to wishlist");
  };

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title: p.name, url });
      else {
        await navigator.clipboard.writeText(url);
        toast("Link copied");
      }
    } catch {
      /* user cancelled share */
    }
  };

  const goTo = (i) => gallery.current?.scrollTo({ left: i * gallery.current.clientWidth, behavior: "smooth" });

  const buyNow = () => {
    if (!inCart(p.id)) addToCart(p.id);
    navigate("/cart");
  };

  const bar = {
    split: true,
    content: (
      <>
        <button className="btn btn-outline" onClick={() => (addToCart(p.id), openDrawer())}>
          Add to Cart
        </button>
        <button className="btn btn-primary" onClick={buyNow}>
          Buy Now
        </button>
      </>
    ),
  };

  return (
    <Page docTitle={p.name} header={{ back: true }} bar={bar}>
      <div className="pd-media">
        <div className="gallery" ref={gallery} onScroll={(e) => setSlide(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}>
          {p.images.map((src) => (
            <img key={src} src={src} alt={p.name} />
          ))}
        </div>
        {p.images.length > 1 && (
          <>
            <div className="dots">
              {p.images.map((src, i) => (
                <span key={src} className={i === slide ? "active" : ""} onClick={() => goTo(i)} />
              ))}
            </div>
            <div className="thumbs">
              {p.images.map((src, i) => (
                <button key={src} type="button" className={i === slide ? "active" : ""} onClick={() => goTo(i)} aria-label={`Image ${i + 1}`}>
                  <img src={src} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <section className="pd-card pd-main">
        <div className="pd-top">
          <h2 className="pd-name">{p.name}</h2>
          <div className="pd-actions">
            <button type="button" onClick={toggleWish} aria-pressed={wished}>
              <WishIcon filled={wished} />
              <span>Wishlist</span>
            </button>
            <button type="button" onClick={share}>
              <ShareIcon />
              <span>Share</span>
            </button>
          </div>
        </div>

        <div className="price-row big">
          <span className="sell-price">{moneyExact(p.price)}</span>
          <span className="mrp">{moneyExact(p.mrp)}</span>
          <span className="off">{offPercent(p.mrp, p.price)}% off</span>
        </div>

        <button type="button" className="special-offer" onClick={() => setOffersOpen((o) => !o)} aria-expanded={offersOpen}>
          {money(meta.offerPrice)} with {meta.offers.length} Special Offers
          <span className={`so-arrow${offersOpen ? " open" : ""}`}>›</span>
        </button>
        {offersOpen && (
          <ul className="special-list">
            {meta.offers.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        )}

        <div className="pd-rating-row">
          <span className="rating big">
            {p.rating} <StarIcon />
          </span>
          <span className="pd-rating-text">
            {meta.ratingsCount.toLocaleString("en-IN")} ratings and {meta.reviewsCount.toLocaleString("en-IN")} reviews
          </span>
          <span className="trusted">
            <TrustedIcon /> Trusted
          </span>
        </div>

        <div className="pd-free">Free Delivery</div>
      </section>

      <section className="pd-card deal-strip">
        <span>
          <BoltIcon /> Deal ends in
        </span>
        <DealTimer />
      </section>

      <section className="pd-card offer-box">
        <b>🎁 Buy 2 Get 1 Free</b>
        <p>Add any 3 items to cart — the lowest priced item is free.</p>
      </section>

      <section className="pd-card">
        <h3 className="section-title">Product Details</h3>
        <table className="pd-table">
          <tbody>
            {meta.details.map(([k, v]) => (
              <tr key={k}>
                <th>{k}</th>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="pd-desc">{p.desc}</p>
        <ul className="pd-points">
          <li>7 days easy return</li>
          <li>Cash on Delivery available</li>
          <li>Free delivery on all orders</li>
        </ul>
      </section>

      <RatingsAndReviews p={p} meta={meta} />

      <section className="pd-card">
        <h3 className="section-title">Similar Products</h3>
        <div className="product-list">
          {similar.map((x) => (
            <ProductCard key={x.id} product={x} />
          ))}
        </div>
      </section>
    </Page>
  );
}

function RatingsAndReviews({ p, meta }) {
  const [shown, setShown] = useState(REVIEWS_STEP);
  const [liked, setLiked] = useState({});
  const max = Math.max(...meta.breakdown);

  return (
    <section className="pd-card rr">
      <h3 className="section-title">Product Rating and Review</h3>

      <div className="rr-summary">
        <div className="rr-score">
          <div className="rr-big">
            {p.rating} <span>★</span>
          </div>
          <div className="rr-count">
            {meta.ratingsCount.toLocaleString("en-IN")} Ratings,
            <br />
            <br />
            {meta.reviewsCount.toLocaleString("en-IN")} Reviews
          </div>
        </div>

        <div className="rr-bars">
          {RATING_LABELS.map((label, i) => (
            <div className="rr-bar-row" key={label}>
              <span className="rr-label">{label}</span>
              <span className="rr-track">
                <span style={{ width: `${(meta.breakdown[i] / max) * 100}%`, background: BAR_COLORS[i] }} />
              </span>
              <span className="rr-num">{meta.breakdown[i].toLocaleString("en-IN")}</span>
            </div>
          ))}
        </div>
      </div>

      <ul className="rr-list">
        {meta.reviews.slice(0, shown).map((rv) => (
          <li key={rv.id} className="rr-item">
            <div className="rr-user">
              <UserIcon /> {rv.name}
            </div>
            <div className="rr-meta">
              <span className={`rating${rv.rating < 3 ? " low" : ""}`}>
                {rv.rating} <StarIcon />
              </span>
              <span>Posted on {rv.dateText}</span>
            </div>
            <p className="rr-text">{rv.text}</p>
            <img className="rr-img" src={rv.img} alt="" loading="lazy" />
            <button type="button" className={`rr-helpful${liked[rv.id] ? " on" : ""}`} onClick={() => setLiked((l) => ({ ...l, [rv.id]: !l[rv.id] }))}>
              <ThumbIcon /> Helpful ({(rv.helpful + (liked[rv.id] ? 1 : 0)).toLocaleString("en-IN")})
            </button>
          </li>
        ))}
      </ul>

      {shown < meta.reviews.length && (
        <button type="button" className="rr-more" onClick={() => setShown((s) => s + REVIEWS_STEP)}>
          View more reviews
        </button>
      )}
    </section>
  );
}
