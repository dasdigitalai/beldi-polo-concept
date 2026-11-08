"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

// Cart for the concept shop. Kept in the browser (localStorage) so it survives a refresh and
// carries between the home page and the shop. There is no checkout behind it.
const CartContext = createContext(null);
const KEY = "beldi-concept-cart";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false); // do not save until the stored cart has been read back

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "[]");
      if (Array.isArray(saved)) setItems(saved);
    } catch {
      // Storage blocked or unreadable: start with an empty cart.
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {
      // Storage blocked: the cart still works for this visit.
    }
  }, [items, loaded]);

  const value = useMemo(() => {
    const add = (item) =>
      setItems((cur) => {
        const found = cur.find((i) => i.key === item.key);
        return found ? cur.map((i) => (i.key === item.key ? { ...i, qty: i.qty + 1 } : i)) : [...cur, { ...item, qty: 1 }];
      });
    const setQty = (key, qty) => setItems((cur) => (qty <= 0 ? cur.filter((i) => i.key !== key) : cur.map((i) => (i.key === key ? { ...i, qty } : i))));
    const clear = () => setItems([]);
    const count = items.reduce((n, i) => n + i.qty, 0);
    const subtotal = items.reduce((n, i) => n + i.qty * i.price, 0);
    return { items, add, setQty, clear, count, subtotal, open, setOpen };
  }, [items, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
