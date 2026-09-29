import { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import CartDrawer from "./components/CartDrawer";
import Account from "./pages/Account";
import Address from "./pages/Address";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Help from "./pages/Help";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OrderSuccess from "./pages/OrderSuccess";
import Orders from "./pages/Orders";
import Payment from "./pages/Payment";
import PaymentReturn from "./pages/PaymentReturn";
import Product from "./pages/Product";

const AdminApp = lazy(() => import("./admin/AdminApp"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/category/:id" element={<Categories />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment/return/:orderId" element={<PaymentReturn />} />
        <Route path="/checkout" element={<Navigate to="/address" replace />} />
        <Route path="/order-success/:id" element={<OrderSuccess />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/help" element={<Help />} />
        <Route path="/account" element={<Account />} />
        <Route
          path="/admin/*"
          element={
            <Suspense fallback={null}>
              <AdminApp />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CartDrawer />
    </>
  );
}
