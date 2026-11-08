import { Brand } from "./Brand";
import { NAV } from "./nav";
import SocialButtons from "./Social";

const SITE = "https://beldieq.com";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="cols">
          <div>
            <Brand />
            <p className="about">Polo, stabling and hunter/jumper horsemanship in Wellington and Loxahatchee Groves, Florida.</p>
            <SocialButtons tone="light" className="footer-social" />
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              {NAV.map(([label, href]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Polo</h4>
            <ul>
              <li>Beldi Polo North</li>
              <li>14563 N Road</li>
              <li>Beldi Polo East</li>
              <li>1472 E Road</li>
            </ul>
          </div>
          <div>
            <h4>Equestrian</h4>
            <ul>
              <li>12750 Indian Mound Road</li>
              <li>Wellington, FL 33449</li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>Concept redesign by <a href="https://dasdigitalai.com/website-design">DAS Digital</a>. This is not the official Beldi Equestrian &amp; Polo Club website; facility details are from <a href={SITE} rel="noopener">beldieq.com</a>.</span>
        </div>
      </div>
    </footer>
  );
}
