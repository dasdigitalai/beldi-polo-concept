"use client";

import { Brand } from "./Brand";
import CartDrawer from "./CartDrawer";
import { useCart } from "./CartContext";
import { NAV } from "./nav";

const SITE = "https://beldieq.com";

export default function SiteHeader({ current }) {
  const { count, setOpen } = useCart();
  const openCart = () => setOpen(true);

  return (
    <>
      <div className="announce">
        Concept redesign by DAS Digital &middot; Not the official site &middot;{" "}
        <a href={SITE} rel="noopener">Visit beldieq.com</a>
      </div>

      <header className="header">
        <div className="wrap">
          <Brand />
          <nav className="nav" aria-label="Main">
            {NAV.map(([label, href]) => (
              <a key={href} href={href} aria-current={href === current ? "page" : undefined}>{label}</a>
            ))}
            <button type="button" className="btn btn-gold cart-btn" onClick={openCart}>Cart ({count})</button>
          </nav>
          <details className="menu">
            <summary aria-label="Menu"><span /></summary>
            <div className="panel">
              {NAV.map(([label, href]) => (
                <a key={href} href={href}>{label}</a>
              ))}
              <button type="button" className="btn btn-gold cart-btn" onClick={openCart}>Cart ({count})</button>
            </div>
          </details>
        </div>
      </header>
      <CartDrawer />
    </>
  );
}
