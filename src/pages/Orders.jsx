import { EmptyCart } from "../components/CartParts";
import Page from "../components/Page";
import useLocalStorage from "../hooks/useLocalStorage";
import { findProduct, money } from "../lib/format";
import { KEYS } from "../lib/storage";

const dateFmt = { day: "numeric", month: "short", year: "numeric" };

export default function Orders() {
  const [orders] = useLocalStorage(KEYS.orders, []);

  return (
    <Page docTitle="My Orders" header={{ title: "My Orders", back: true }}>
      {!orders.length && <EmptyCart text="No orders yet" />}
      {orders.map((o) => {
        const first = findProduct(o.items[0]?.id);
        const count = o.items.reduce((s, i) => s + i.qty, 0);
        return (
          <section key={o.id} className="pd-card order-card">
            <div className="order-head">
              <b>#{o.id}</b>
              <span className="status">{o.status}</span>
            </div>
            <div className="order-body">
              {first && <img src={first.img} alt="" loading="lazy" />}
              <div>
                <div className="order-name">
                  {first ? first.name : "Items"}
                  {o.items.length > 1 && ` + ${o.items.length - 1} more`}
                </div>
                <div className="muted">
                  {count} item(s) · {new Date(o.date).toLocaleDateString("en-IN", dateFmt)}
                </div>
                <div className="sell-price">{money(o.total)}</div>
              </div>
            </div>
          </section>
        );
      })}
    </Page>
  );
}
