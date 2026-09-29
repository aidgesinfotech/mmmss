import { useCallback, useMemo, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { cartSummary } from "../lib/format";
import { KEYS } from "../lib/storage";
import { CartContext } from "./cart";
import { useToast } from "./toast";

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage(KEYS.cart, []);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toast = useToast();

  const addToCart = useCallback(
    (id, qty = 1) => {
      setCart((c) => {
        const existing = c.find((i) => i.id === id);
        return existing ? c.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i)) : [...c, { id, qty }];
      });
      toast("Added to cart");
    },
    [setCart, toast]
  );

  const setQty = useCallback(
    (id, qty) => setCart((c) => (qty <= 0 ? c.filter((i) => i.id !== id) : c.map((i) => (i.id === id ? { ...i, qty } : i)))),
    [setCart]
  );

  const removeFromCart = useCallback((id) => setCart((c) => c.filter((i) => i.id !== id)), [setCart]);
  const clearCart = useCallback(() => setCart([]), [setCart]);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const value = useMemo(
    () => ({
      cart,
      summary: cartSummary(cart),
      count: cart.reduce((s, i) => s + i.qty, 0),
      inCart: (id) => cart.some((i) => i.id === id),
      addToCart,
      setQty,
      removeFromCart,
      clearCart,
      drawerOpen,
      openDrawer,
      closeDrawer,
    }),
    [cart, drawerOpen, addToCart, setQty, removeFromCart, clearCart, openDrawer, closeDrawer]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
