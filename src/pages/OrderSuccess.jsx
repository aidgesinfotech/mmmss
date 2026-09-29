import { Link, useParams } from "react-router-dom";
import { Steps } from "../components/CartParts";
import { CheckIcon } from "../components/Icons";
import Page from "../components/Page";
import useLocalStorage from "../hooks/useLocalStorage";
import { money } from "../lib/format";
import { KEYS } from "../lib/storage";

export default function OrderSuccess() {
  const { id } = useParams();
  const [orders] = useLocalStorage(KEYS.orders, []);
  const order = orders.find((o) => o.id === id);

  return (
    <Page docTitle="Order Placed" header={{ title: "Order Placed" }}>
      <Steps active={5} />
      {order ? (
        <div className="empty success">
          <CheckIcon />
          <h2>Order Placed!</h2>
          <p>
            Order ID: <b>{order.id}</b>
          </p>
          <p>Total: {money(order.total)}</p>
          <p className="muted">
            {order.payment === "Cashfree" && order.status === "Paid"
              ? "Payment received via Cashfree."
              : "This is a demo order — nothing will be charged or shipped."}
          </p>
          <Link to="/orders" className="btn btn-primary">
            View My Orders
          </Link>
          <Link to="/" className="btn btn-outline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="empty">
          <p>Order not found</p>
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      )}
    </Page>
  );
}
