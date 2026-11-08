import "../beldi.css";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import ShopGrid from "../ShopGrid";
import SocialButtons from "../Social";

export const metadata = {
  title: "Shop | Beldi Equestrian & Polo Club | Concept Redesign",
  description: "A concept shop for Beldi branded apparel. Sample items and prices; not the official site.",
  robots: { index: false, follow: false },
};

export default function Shop() {
  return (
    <div className="beldi" id="top">
      <SiteHeader current="/shop" />

      <main id="main">
        <section className="shop-hero" aria-labelledby="shop-title">
          <div className="wrap">
            <div className="rule"><i /><span className="eyebrow light">The Beldi Shop</span></div>
            <h1 id="shop-title">Club colours, <em>worn well.</em></h1>
            <p>Polos, pullovers and caps for the sideline, the barn and the veranda, all carrying the Beldi crest.</p>
          </div>
        </section>

        <section className="section" aria-label="Products">
          <div className="wrap">
            <ShopGrid />
            <p className="shop-note">Concept shop: items, prices and sizes are samples, and checkout is not connected.</p>
          </div>
        </section>

        <section className="section sand" aria-labelledby="follow-title" style={{ paddingBlock: "4.5rem" }}>
          <div className="wrap follow">
            <div className="rule"><i /><span className="eyebrow">Follow along</span></div>
            <h2 id="follow-title">See what is new at Beldi</h2>
            <SocialButtons />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
