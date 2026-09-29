import Page from "../components/Page";
import { STORE } from "../data/store";

const FAQS = [
  ["How does Buy 2 Get 1 Free work?", "Add any 3 items to your cart. The lowest priced item becomes free automatically. Every set of 3 items gets 1 free."],
  ["Is Cash on Delivery available?", "Yes. In this demo project only Cash on Delivery is shown and no real payment is taken."],
  ["How can I track my order?", "Open the My Orders tab from the bottom menu to see all your placed orders."],
  ["What is the return policy?", "All products come with 7 days easy return from the date of delivery."],
  ["How do I change my delivery address?", "Your address is saved on the checkout page. You can edit it there before placing the next order."],
];

export default function Help() {
  return (
    <Page docTitle="Help" header={{ title: "Help Centre", back: true }}>
      <section className="pd-card">
        <h3 className="section-title">Frequently Asked Questions</h3>
        {FAQS.map(([q, a]) => (
          <details key={q} className="faq">
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </section>
      <section className="pd-card">
        <h3 className="section-title">Contact Us</h3>
        <p className="muted">Email: support@{STORE.name.toLowerCase()}.example</p>
        <p className="muted">Timing: 10 AM – 7 PM (Mon – Sat)</p>
      </section>
    </Page>
  );
}
