import { Link } from "react-router-dom";
import { CartLine, CartTotals, EmptyCart, Steps } from "../components/CartParts";
import Page from "../components/Page";
import SafetyCard from "../components/SafetyCard";
import { useCart } from "../context/cart";
import { moneyExact } from "../lib/format";

export default function Cart() {
  const { summary: s } = useCart();
  const header = { title: "CART", back: true };

  if (!s.lines.length) {
    return (
      <Page docTitle="Cart" header={header}>
        <EmptyCart />
      </Page>
    );
  }

  const bar = {
    content: (
      <>
        <div className="cart-bar-total">
          <div className="big-price">{moneyExact(s.total)}</div>
          <a href="#price-details">VIEW PRICE DETAILS</a>
        </div>
        <Link to="/address" className="btn btn-primary cart-continue">
          Continue
        </Link>
      </>
    ),
  };

  return (
    <Page docTitle="Cart" header={header} bar={bar}>
      <Steps active={1} />
      <section className="cart-lines">
        {s.lines.map((item) => (
          <CartLine key={item.id} item={item} />
        ))}
      </section>
      <CartTotals />
      <SafetyCard />
    </Page>
  );
}
