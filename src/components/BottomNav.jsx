import { NavLink } from "react-router-dom";
import { AccountIcon, CategoryIcon, HelpIcon, HomeIcon, OrdersIcon } from "./Icons";

const ITEMS = [
  { to: "/", label: "Home", Icon: HomeIcon, end: true },
  { to: "/category", label: "Categories", Icon: CategoryIcon },
  { to: "/orders", label: "My Orders", Icon: OrdersIcon },
  { to: "/help", label: "Help", Icon: HelpIcon },
  { to: "/account", label: "Account", Icon: AccountIcon },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {ITEMS.map(({ to, label, Icon, end }) => (
        <NavLink key={to} to={to} end={end} className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}>
          <Icon />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
