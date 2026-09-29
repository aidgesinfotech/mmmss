import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import DealTimer from "../components/DealTimer";
import { BoltIcon } from "../components/Icons";
import Page from "../components/Page";
import ProductCard from "../components/ProductCard";
import { STORE } from "../data/store";
import { getProducts } from "../lib/shop";

const PAGE_SIZE = 20;

export default function Home() {
  const feed = getProducts();
  const [limit, setLimit] = useState(PAGE_SIZE);
  const sentinel = useRef(null);
  const hasMore = limit < feed.length;

  useEffect(() => {
    if (!hasMore || !sentinel.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setLimit((l) => l + PAGE_SIZE), { rootMargin: "600px" });
    io.observe(sentinel.current);
    return () => io.disconnect();
  }, [hasMore]);

  return (
    <Page>
    <div className="banner-stack">
      <a href="#products">
        <img src="/banners/sale-banner.gif" alt="Mega Blockbuster Sale is live. Shop now" />
      </a>
      <a href="#products">
        <img src="/banners/hero.webp" alt="Up to 80% off on everything. Buy 2 Get 1 Free" />
      </a>
    </div>
    
    <div className="marquee" aria-label="Offer">
        <div className="marquee-inner">
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i}>{STORE.offerText}</span>
          ))}
        </div>
      </div>
      <div className="banner-stack">
        <Link to="/category">
          <img src="/banners/categories.webp" alt="Shop by category" />
        </Link>
      </div>


      <div className="deals-head">
        <p>
          Daily Deals
          <span className="deals-bolt">
            <BoltIcon />
          </span>
        </p>
        <DealTimer className="deals-timer" icon="bomb" />
      </div>

      <section className="products" id="products">
        <h4>Products For You</h4>
        {!feed.length && <p className="muted center pad">No products available yet.</p>}
        <div className="product-list">
          {feed.slice(0, limit).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        {hasMore && <div ref={sentinel} className="spinner feed-spinner" />}
      </section>
    </Page>
  );
}
