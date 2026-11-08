"use client";

import { useEffect, useRef } from "react";
import { useCart } from "./CartContext";
import ProductArt from "./ProductArt";
import { money } from "./products";

export default function CartDrawer() {
  const { items, setQty, count, subtotal, open, setOpen } = useCart();
  const ref = useRef(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="cart-drawer"
      aria-label="Shopping cart"
      onClose={() => setOpen(false)}
      onClick={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div className="cart-panel">
        <div className="cart-top">
          <h2>Your cart <span>({count})</span></h2>
          <button type="button" className="cart-x" onClick={() => setOpen(false)} aria-label="Close cart">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
            <a className="btn btn-dark" href="/shop" onClick={() => setOpen(false)}>Browse the shop</a>
          </div>
        ) : (
          <ul className="cart-list">
            {items.map((i) => (
              <li key={i.key}>
                <div className="cart-thumb"><ProductArt type={i.type} fill={i.fill} ink={i.ink} logo={i.logo} label="" /></div>
                <div className="cart-info">
                  <b>{i.name}</b>
                  <span>{i.colorName} &middot; {i.size}</span>
                  <div className="qty">
                    <button type="button" onClick={() => setQty(i.key, i.qty - 1)} aria-label={`Remove one ${i.name}`}>&minus;</button>
                    <output aria-label="Quantity">{i.qty}</output>
                    <button type="button" onClick={() => setQty(i.key, i.qty + 1)} aria-label={`Add one more ${i.name}`}>+</button>
                  </div>
                </div>
                <div className="cart-price">{money(i.price * i.qty)}</div>
              </li>
            ))}
          </ul>
        )}

        {items.length > 0 ? (
          <div className="cart-foot">
            <div className="cart-sub"><span>Subtotal</span><b>{money(subtotal)}</b></div>
            <button type="button" className="btn btn-gold" disabled>Checkout</button>
            <p>Concept only: this is a design sample, so there is no checkout and no payment is taken.</p>
          </div>
        ) : null}
      </div>
    </dialog>
  );
}
