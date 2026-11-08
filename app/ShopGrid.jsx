"use client";

import { useState } from "react";
import ProductArt from "./ProductArt";
import { useCart } from "./CartContext";
import { PRODUCTS, money } from "./products";

function Product({ p }) {
  const { add, setOpen } = useCart();
  const [ci, setCi] = useState(0);
  const [size, setSize] = useState(p.sizes.length > 1 ? "M" : p.sizes[0]);
  const c = p.colors[ci];

  const addToCart = () => {
    add({ key: `${p.id}|${c.name}|${size}`, id: p.id, type: p.type, name: p.name, colorName: c.name, fill: c.fill, ink: c.ink, logo: c.logo, size, price: p.price });
    setOpen(true);
  };

  return (
    <article className="product">
      <div className="product-art">
        <ProductArt type={p.type} fill={c.fill} ink={c.ink} logo={c.logo} label={`${p.name} in ${c.name}`} />
      </div>
      <div className="product-body">
        <div className="product-head">
          <h3>{p.name}</h3>
          <span className="price">{money(p.price)}</span>
        </div>
        <p className="blurb">{p.blurb}</p>

        <div className="opt">
          <span className="opt-label" id={`${p.id}-c`}>Colour: <b>{c.name}</b></span>
          <div className="swatches" role="radiogroup" aria-labelledby={`${p.id}-c`}>
            {p.colors.map((col, i) => (
              <button
                key={col.name}
                type="button"
                role="radio"
                aria-checked={i === ci}
                aria-label={col.name}
                className={`swatch${i === ci ? " on" : ""}`}
                style={{ "--sw": col.fill }}
                onClick={() => setCi(i)}
              />
            ))}
          </div>
        </div>

        <div className="opt">
          <label className="opt-label" htmlFor={`${p.id}-s`}>Size</label>
          <select id={`${p.id}-s`} value={size} onChange={(e) => setSize(e.target.value)} disabled={p.sizes.length === 1}>
            {p.sizes.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>

        <button type="button" className="btn btn-dark add" onClick={addToCart}>Add to cart</button>
      </div>
    </article>
  );
}

export default function ShopGrid() {
  return (
    <div className="products">
      {PRODUCTS.map((p) => <Product key={p.id} p={p} />)}
    </div>
  );
}
