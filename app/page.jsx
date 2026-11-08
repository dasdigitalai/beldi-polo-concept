import "./beldi.css";

// Concept redesign by DAS Digital of the Beldi Equestrian & Polo Club website (beldieq.com).
// Facility facts and addresses are taken from the club's current site; the descriptive copy and
// the design are ours. Not the official website, and kept out of search results.
export const metadata = {
  title: "Beldi Equestrian & Polo Club | Concept Redesign",
  description: "A concept redesign of the Beldi Equestrian & Polo Club website. Not the official site.",
  robots: { index: false, follow: false },
  };

const SITE = "https://beldieq.com";
const maps = (q) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;

const NAV = [
  ["Sunset Polo", "#sunset"],
  ["Polo Facilities", "#polo"],
  ["Equestrian Facility", "#equestrian"],
  ["Contact", "#inquire"],
];

const FACTS = [
  ["3", "Private facilities"],
  ["6", "Regulation polo fields"],
  ["95", "Acres of turf & paddocks"],
  ["452", "Stalls across the club"],
];

const BARNS = [
  ["Barn 1", 14],
  ["Barn 2", 22],
  ["Barn 3", 16],
];

const SPONSORS = [
  ["Palm Beach Equine Clinic", "https://equineclinic.com/"],
  ["Purina Mills", "https://www.purinamills.com/"],
  ["Farm Credit FL", "https://www.farmcreditfl.com/"],
  ["Red Barn", "https://redbarn1.com/"],
  ["The Wellington", "https://www.thewellington.com/"],
];

const PHOTOS = [
  { src: "/photos/beldi-golden-hour.jpg", cap: "Golden hour on the field", alt: "Polo players on horseback on a bright green field under a pink and blue evening sky, with trees and the clubhouse behind", w: 640, h: 432 },
  { src: "/photos/beldi-evening-match.jpg", cap: "An evening match", alt: "A polo match in progress at dusk, riders crossing the field with tall trees behind them", w: 640, h: 480 },
  { src: "/photos/beldi-veranda.jpg", cap: "The veranda at dusk", alt: "A covered wooden veranda with string lights and guests seated at tables, looking out over the polo field at sunset", w: 640, h: 392 },
  { src: "/photos/beldi-welcome.jpg", cap: "Welcome to Beldi", alt: "A black entrance sign reading Welcome to Beldi beside palm trees, with the polo grounds behind", w: 640, h: 392 },
];

const LOCATIONS = [
  { name: "Equestrian Facility", street: "12750 Indian Mound Road", city: "Wellington, Florida 33449" },
  { name: "Beldi Polo East", street: "1472 E Road", city: "Loxahatchee Groves, Florida 33470" },
  { name: "Beldi Polo North", street: "14563 N Road", city: "Loxahatchee Groves, Florida 33470" },
];

const INQUIRIES = [
  { t: "Stabling", p: "Interested in stabling at Beldi Polo North or East? Tell us about your string.", href: `${SITE}/contact` },
  { t: "Barn rentals", p: "Seasonal and annual barn rentals at the Wellington equestrian facility.", href: `${SITE}/contact` },
  { t: "General inquiries", p: "Questions about the club, Sunset Polo or anything else.", href: `${SITE}/contact` },
];

function Monogram() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#14283f" stroke="#e6c58f" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="18" fill="none" stroke="#c4924f" strokeWidth="0.8" />
      <text x="24" y="31.5" textAnchor="middle" fontFamily="Georgia, serif" fontSize="22" fill="#e6c58f">B</text>
    </svg>
  );
}

function Brand() {
  return (
    <a href="#top" className="brand" aria-label="Beldi Equestrian & Polo Club, home">
      <Monogram />
      <span>
        <b>Beldi</b>
        <small>Equestrian &amp; Polo Club</small>
      </span>
    </a>
  );
}

// A polo field at golden hour: sun, tree line and goal posts, so the page needs no stock photography.
function Scene() {
  return (
    <svg className="scene" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <radialGradient id="sun" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#fff1cf" />
          <stop offset="0.55" stopColor="#ffd08a" />
          <stop offset="1" stopColor="#f2a65a" />
        </radialGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#ffd9a0" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ffd9a0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="turf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1b2a2e" />
          <stop offset="1" stopColor="#0a1217" />
        </linearGradient>
      </defs>
      <circle cx="720" cy="262" r="250" fill="url(#glow)" />
      <circle cx="720" cy="262" r="86" fill="url(#sun)" />
      <path
        d="M0 272 Q17 254 34 272 Q54 220 74 272 Q85 260 96 272 Q120 260 144 272 Q161 232 178 272 Q189 232 200 272 Q214 260 228 272 Q239 240 250 272 Q270 260 290 272 Q304 260 318 272 Q342 240 366 272 Q377 232 388 272 Q399 254 410 272 Q439 220 468 272 Q492 260 516 272 Q540 232 564 272 Q584 260 604 272 Q618 260 632 272 Q656 254 680 272 Q697 240 714 272 Q728 232 742 272 Q753 232 764 272 Q781 232 798 272 Q827 254 856 272 Q867 232 878 272 Q902 220 926 272 Q940 248 954 272 Q965 232 976 272 Q1005 260 1034 272 Q1058 260 1082 272 Q1106 254 1130 272 Q1150 220 1170 272 Q1194 240 1218 272 Q1235 240 1252 272 Q1276 240 1300 272 Q1317 248 1334 272 Q1348 254 1362 272 Q1391 254 1420 272 Q1430 232 1440 272 V400 H0Z"
        fill="#2a2038"
      />
      <path d="M0 292 H1440 V400 H0Z" fill="url(#turf)" />
      <g stroke="#f6f0e4" strokeOpacity="0.14" strokeWidth="1.5" fill="none">
        <path d="M720 292 L-120 400" />
        <path d="M720 292 L1560 400" />
        <path d="M720 292 L430 400" />
        <path d="M720 292 L1010 400" />
        <path d="M0 330 H1440" strokeOpacity="0.09" />
        <path d="M0 368 H1440" strokeOpacity="0.07" />
      </g>
      <g stroke="#f6f0e4" strokeLinecap="round" fill="none">
        <path d="M640 292 V166" strokeWidth="3.2" />
        <path d="M800 292 V166" strokeWidth="3.2" />
        <path d="M640 166 l-6 -8 M800 166 l6 -8" strokeWidth="2" strokeOpacity="0.8" />
      </g>
      <ellipse cx="640" cy="293" rx="9" ry="2.2" fill="#000" fillOpacity="0.35" />
      <ellipse cx="800" cy="293" rx="9" ry="2.2" fill="#000" fillOpacity="0.35" />
    </svg>
  );
}

const ICONS = {
  shoe: <><path d="M12 42C5 30 6 8 24 8s19 22 12 34" /><path d="M12 42h6M30 42h6" /><circle cx="11" cy="28" r="1" /><circle cx="14" cy="18" r="1" /><circle cx="37" cy="28" r="1" /><circle cx="34" cy="18" r="1" /></>,
  mallet: <><path d="M12 38L38 6" /><rect x="30" y="2" width="15" height="7" rx="3.5" transform="rotate(52 37 5.5)" /><circle cx="13" cy="37" r="5" /></>,
  pin: <><path d="M24 44S10 30 10 20a14 14 0 0128 0c0 10-14 24-14 24z" /><circle cx="24" cy="20" r="5" /></>,
};

function Icon({ name, className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

export default function BeldiConcept() {
  return (
    <div className="beldi" id="top">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap"
      />

      <div className="announce">
        Concept redesign by DAS Digital &middot; Not the official site &middot;{" "}
        <a href={SITE} rel="noopener">Visit beldieq.com</a>
      </div>

      <header className="header">
        <div className="wrap">
          <Brand />
          <nav className="nav" aria-label="Main">
            {NAV.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
            <a href="#inquire" className="btn btn-gold">Inquire</a>
          </nav>
          <details className="menu">
            <summary aria-label="Menu"><span /></summary>
            <div className="panel">
              {NAV.map(([label, href]) => (
                <a key={href} href={href}>{label}</a>
              ))}
              <a href="#inquire" className="btn btn-gold">Inquire</a>
            </div>
          </details>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-title">
          <Scene />
          <div className="wrap">
            <div className="rule"><i /><span className="eyebrow light">Wellington &middot; Loxahatchee Groves</span></div>
            <h1 id="hero-title">Polo and horsemanship at <em>golden hour.</em></h1>
            <p className="lede">
              Beldi Equestrian &amp; Polo Club brings together regulation polo fields, generous stabling and a
              hunter/jumper farm across three private facilities in Palm Beach County.
            </p>
            <div className="cta">
              <a href="#sunset" className="btn btn-gold">Sunset Polo</a>
              <a href="#inquire" className="btn btn-line">Stable with us</a>
            </div>
          </div>
        </section>

        <section className="facts" aria-label="The club at a glance">
          <div className="wrap">
            <ul>
              {FACTS.map(([n, l]) => (
                <li key={l}><b>{n}</b><span>{l}</span></li>
              ))}
            </ul>
          </div>
        </section>

        {/* Equestrian and Polo, as on the club's own home page */}
        <section className="section" aria-labelledby="doors-title">
          <div className="wrap">
            <div className="head">
              <div className="rule"><i /><span className="eyebrow">Two disciplines, one club</span></div>
              <h2 id="doors-title">Choose your discipline</h2>
              <p>From the polo fields of Loxahatchee Groves to the hunter/jumper rings of Wellington.</p>
            </div>
            <div className="doors">
              <a className="door" href="#equestrian">
                <Icon name="shoe" className="glyph" />
                <span className="eyebrow light">Hunter / Jumper</span>
                <h3>Equestrian</h3>
                <address>12750 Indian Mound Road<br />Wellington, Florida</address>
                <span className="link">Explore</span>
              </a>
              <a className="door" href="#polo">
                <Icon name="mallet" className="glyph" />
                <span className="eyebrow light">Polo</span>
                <h3>Polo</h3>
                <address>1472 E Road &amp; 14563 N Road<br />Loxahatchee Groves, Florida</address>
                <span className="link">Explore</span>
              </a>
            </div>
          </div>
        </section>

        {/* Sunset Polo */}
        <section className="sunset" id="sunset" aria-labelledby="sunset-title">
          <div className="wrap">
            <div className="rule"><i /><span className="eyebrow light">The signature occasion</span></div>
            <h2 id="sunset-title">Sunset <em>Polo</em></h2>
            <p>Fast ponies, long shadows and the best light of the day. An evening at the polo is the finest way to meet the club.</p>
            <div className="cta">
              <a href={`${SITE}/sunset-polo`} rel="noopener" className="btn btn-dark">Dates &amp; details</a>
            </div>
            <p className="fine">Dates and tickets are published on the club&rsquo;s Sunset Polo page.</p>
          </div>
        </section>

        {/* Photos */}
        <section className="section" aria-labelledby="gallery-title">
          <div className="wrap">
            <div className="head">
              <div className="rule"><i /><span className="eyebrow">Life at Beldi</span></div>
              <h2 id="gallery-title">An evening at the polo</h2>
              <p>Long shadows over the field, the sound of hooves and a seat on the veranda.</p>
            </div>
            <div className="gallery">
              {PHOTOS.map((ph) => (
                <figure key={ph.src}>
                  <img src={ph.src} alt={ph.alt} width={ph.w} height={ph.h} loading="lazy" />
                  <figcaption>{ph.cap}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Polo facilities */}
        <section className="section sand" id="polo" aria-labelledby="polo-title">
          <div className="wrap">
            <div className="head">
              <div className="rule"><i /><span className="eyebrow">Polo facilities</span></div>
              <h2 id="polo-title">Two polo grounds, built for the game</h2>
              <p>Regulation fields, generous barns and an exercise track at each, looked after by a full-time on-site caretaker.</p>
            </div>
            <div className="sites">
              <article className="site">
                <span className="addr">14563 N Road &middot; Loxahatchee Groves</span>
                <h3>Beldi Polo North</h3>
                <div className="nums">
                  <div><b>60</b><span>Acres</span></div>
                  <div><b>5</b><span>Polo fields</span></div>
                  <div><b>320</b><span>Stalls</span></div>
                </div>
                <ul className="ticks">
                  <li>Five regulation-sized polo fields</li>
                  <li>320 stalls with tack rooms, feed rooms and laundry rooms</li>
                  <li>Exercise track with a full-time on-site caretaker</li>
                  <li>Gym with cold plunge and sauna</li>
                  <li>Clubhouse and asados</li>
                </ul>
                <a className="btn btn-dark" href={maps("14563 N Rd, Loxahatchee Groves, FL 33470")} rel="noopener">Get directions</a>
              </article>
              <article className="site">
                <span className="addr">1472 E Road &middot; Loxahatchee Groves</span>
                <h3>Beldi Polo East</h3>
                <div className="nums">
                  <div><b>20</b><span>Acres</span></div>
                  <div><b>1</b><span>Polo field</span></div>
                  <div><b>80</b><span>Stalls</span></div>
                </div>
                <ul className="ticks">
                  <li>A regulation-sized polo field</li>
                  <li>80-stall barn with tack rooms, feed rooms and laundry rooms</li>
                  <li>Exercise track with a full-time on-site caretaker</li>
                </ul>
                <a className="btn btn-dark" href={maps("1472 E Rd, Loxahatchee Groves, FL 33470")} rel="noopener">Get directions</a>
              </article>
            </div>
          </div>
        </section>

        {/* Equestrian facility */}
        <section className="section dark" id="equestrian" aria-labelledby="equ-title">
          <div className="wrap equ">
            <div>
              <span className="eyebrow light">Equestrian Facility &middot; Wellington</span>
              <h2 id="equ-title">The Hunter/Jumper Farm</h2>
              <p className="lead">
                A 15-acre farm minutes from the show grounds, with a ten-acre derby field, two arenas and three
                barns, and a full-time caretaker on site.
              </p>
              <div className="nums">
                <div><b>15</b><span>Acres</span></div>
                <div><b>52</b><span>Stalls</span></div>
                <div><b>10</b><span>Acre derby field</span></div>
              </div>
              <ul className="ticks">
                <li>Derby field with automatic watering system</li>
                <li>Two 140&prime; &times; 240&prime; arenas with GGT footing and automatic watering</li>
                <li>Two round pens with GGT footing</li>
                <li>Grooms housing and RV hook-ups available</li>
                <li>Ample paddocks for turn-out</li>
              </ul>
              <a className="btn btn-gold" href="#inquire">Apply for a barn rental</a>
            </div>
            <div className="barns">
              <h3>Three barns, 52 stalls</h3>
              <div className="sub">Each with tack, feed and laundry rooms, wash &amp; grooming stalls and client areas</div>
              {BARNS.map(([name, n]) => (
                <div className="bar" key={name}>
                  <span>{name}</span>
                  <i style={{ width: `${(n / 22) * 100}%` }} aria-hidden="true" />
                  <em>{n}</em>
                </div>
              ))}
              <p className="bar-note">Seasonal and annual barn rentals. Barns 1 and 2 include grooms&rsquo; apartments.</p>
            </div>
          </div>
        </section>

        {/* Visit */}
        <section className="section" aria-labelledby="visit-title">
          <div className="wrap">
            <div className="head">
              <div className="rule"><i /><span className="eyebrow">Visit us</span></div>
              <h2 id="visit-title">Find your way to Beldi</h2>
              <p>Three facilities across Wellington and Loxahatchee Groves.</p>
            </div>
            <div className="visit">
              {LOCATIONS.map((l) => (
                <article className="loc" key={l.name}>
                  <Icon name="pin" />
                  <h3>{l.name}</h3>
                  <address>{l.street}<br />{l.city}</address>
                  <a className="link on-light" href={maps(`${l.street}, ${l.city}`)} rel="noopener">Get directions</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors */}
        <section className="section sand sponsors" aria-labelledby="sponsors-title" style={{ paddingBlock: "4.5rem" }}>
          <div className="wrap">
            <div className="rule" style={{ justifyContent: "center" }}><i /><span className="eyebrow">Our sponsors</span></div>
            <h2 id="sponsors-title">A big thank you to our sponsors.</h2>
            <ul>
              {SPONSORS.map(([name, href]) => (
                <li key={name}><a href={href} rel="noopener">{name}</a></li>
              ))}
            </ul>
          </div>
        </section>

        {/* Inquire */}
        <section className="section inquire" id="inquire" aria-labelledby="inquire-title">
          <div className="wrap">
            <div className="inquire-box">
              <div className="rule"><i /><span className="eyebrow light">Inquiries</span></div>
              <h2 id="inquire-title">Bring your horses to Beldi</h2>
              <p>Whether you are stabling for the season, applying for a barn or simply have a question, we would love to hear from you.</p>
              <div className="inquire-grid">
                {INQUIRIES.map((i) => (
                  <a className="inq" key={i.t} href={i.href} rel="noopener">
                    <h3>{i.t}</h3>
                    <p>{i.p}</p>
                    <span className="link">Contact the club</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="cols">
            <div>
              <Brand />
              <p className="about">Polo, stabling and hunter/jumper horsemanship in Wellington and Loxahatchee Groves, Florida.</p>
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
    </div>
  );
}
