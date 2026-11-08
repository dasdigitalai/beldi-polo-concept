// Flat-lay illustrations of the apparel, drawn in SVG so the shop needs no product photography.
// `fill` is the fabric colour and `ink` the crest/print colour.
const BODY =
  "M140 74 L98 94 L48 152 L86 180 L116 154 L116 338 Q200 352 284 338 L284 154 L314 180 L352 152 L302 94 L260 74";
// Long-sleeved version for the quarter-zip and hoodie.
const LONG =
  "M140 74 L100 92 L56 252 L98 264 L126 172 L126 338 Q200 352 274 338 L274 172 L302 264 L344 252 L300 92 L260 74";
const EDGE = "rgba(0,0,0,0.3)";

// Beldi's wordmark, centred on (x, y) and `w` wide. `logo` picks the mint, navy or ivory version
// so it reads on the fabric.
function Mark({ x, y, w, logo = "mint" }) {
  const h = (w * 311) / 900;
  return <image href={`/brand/beldi-wordmark-${logo}.png`} x={x - w / 2} y={y - h / 2} width={w} height={h} />;
}

function Shirt({ children, neck, long }) {
  return (
    <>
      <path d={`${long ? LONG : BODY} ${neck} Z`} stroke={EDGE} strokeWidth="2" strokeLinejoin="round" />
      {long ? (
        <>
          <path d="M126 172 L98 264 M274 172 L302 264" stroke={EDGE} strokeWidth="1.5" fill="none" />
          <path d="M60 238 L102 250 M340 238 L298 250" stroke="rgba(0,0,0,0.22)" strokeWidth="14" strokeLinecap="butt" />
        </>
      ) : (
        <>
          <path d="M116 154 L86 180" stroke={EDGE} strokeWidth="1.5" />
          <path d="M284 154 L314 180" stroke={EDGE} strokeWidth="1.5" />
        </>
      )}
      <path d="M126 330 Q200 344 274 330" stroke="rgba(0,0,0,0.16)" strokeWidth="1.5" fill="none" />
      {children}
    </>
  );
}

// A shape in the garment's own colour with a light or dark wash on top, so collars, hoods and brims
// match the fabric whatever colour is chosen.
function Piece({ d, wash = "#fff", opacity = 0.14, stroke = EDGE, sw = 1.8 }) {
  return (
    <>
      <path d={d} stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
      <path d={d} fill={wash} fillOpacity={opacity} stroke="none" />
    </>
  );
}

const ART = {
  polo: ({ ink, logo }) => (
    <>
      <Shirt neck="Q200 98 140 74">
        <Piece d="M138 76 L172 58 L204 108 L178 114 Z" opacity={0.16} sw={1.6} />
        <Piece d="M262 76 L228 58 L196 108 L222 114 Z" opacity={0.16} sw={1.6} />
        <Piece d="M194 108 H206 V178 H194 Z" wash="#000" opacity={0.08} sw={1.2} />
        {[124, 144, 164].map((y) => <circle key={y} cx="200" cy={y} r="2.6" fill={ink} fillOpacity="0.85" />)}
        <path d="M60 148 L92 170" stroke="rgba(0,0,0,0.22)" strokeWidth="5" />
        <path d="M340 148 L308 170" stroke="rgba(0,0,0,0.22)" strokeWidth="5" />
      </Shirt>
      <Mark x={246} y={136} w={50} logo={logo} />
    </>
  ),
  zip: ({ ink, logo }) => (
    <>
      <Shirt neck="Q200 100 140 74" long>
        <Piece d="M150 70 Q200 44 250 70 L246 102 Q200 124 154 102 Z" opacity={0.14} />
        <path d="M158 78 Q200 58 242 78 Q200 100 158 78 Z" fill="#000" fillOpacity="0.22" />
        <path d="M200 110 L200 186" stroke={ink} strokeWidth="3" strokeDasharray="2 3" />
        <rect x="196" y="104" width="8" height="14" rx="2" fill={ink} />
        <circle cx="200" cy="192" r="4" fill="none" stroke={ink} strokeWidth="2" />
      </Shirt>
      <Mark x={246} y={148} w={50} logo={logo} />
    </>
  ),
  tee: ({ ink, logo }) => (
    <>
      <Shirt neck="Q200 108 140 74">
        <path d="M140 74 Q200 108 260 74" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="9" strokeLinecap="round" />
        <defs>
          <linearGradient id="teesun" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffd08a" />
            <stop offset="1" stopColor="#e07b3f" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="198" r="34" fill="url(#teesun)" />
        <path d="M150 214 H250" stroke={ink} strokeWidth="2" />
        <path d="M178 214 V168 M222 214 V168" stroke={ink} strokeWidth="3" strokeLinecap="round" />
        <text x="200" y="246" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontWeight="700" fontSize="13" letterSpacing="4" fill={ink}>SUNSET POLO</text>
        <Mark x={200} y={272} w={56} logo={logo} />
      </Shirt>
    </>
  ),
  hoodie: ({ ink, logo }) => (
    <>
      <Shirt neck="Q200 112 140 74" long>
        <Piece d="M142 78 Q126 12 200 14 Q274 12 258 78 Q200 120 142 78 Z" opacity={0.12} sw={2} />
        <path d="M160 76 Q200 34 240 76 Q200 108 160 76 Z" fill="#000" fillOpacity="0.38" />
        <path d="M186 106 V152 M214 106 V152" stroke={ink} strokeWidth="3" strokeLinecap="round" />
        <Piece d="M146 262 Q200 250 254 262 L268 322 L132 322 Z" wash="#000" opacity={0.07} sw={1.6} />
        <path d="M128 322 H272" stroke="rgba(0,0,0,0.22)" strokeWidth="14" />
      </Shirt>
      <Mark x={200} y={206} w={92} logo={logo} />
    </>
  ),
  cap: ({ ink, logo }) => (
    <>
      <path d="M86 226 Q82 104 200 100 Q318 104 314 226 Z" stroke={EDGE} strokeWidth="2" strokeLinejoin="round" />
      <path d="M200 100 Q168 150 166 226 M200 100 Q232 150 234 226" fill="none" stroke="rgba(0,0,0,0.22)" strokeWidth="1.6" />
      <circle cx="200" cy="100" r="8" stroke={EDGE} strokeWidth="1.5" />
      <Piece d="M70 226 Q200 262 330 226 Q352 256 306 278 Q200 304 94 278 Q48 256 70 226 Z" wash="#000" opacity={0.16} sw={2} />
      <path d="M84 248 Q200 282 316 248" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
      <Mark x={200} y={170} w={112} logo={logo} />
    </>
  ),
  tote: ({ ink, logo }) => (
    <>
      <path d="M150 150 Q148 52 200 52 Q252 52 250 150" fill="none" stroke={EDGE} strokeWidth="16" strokeLinecap="round" />
      <path d="M150 150 Q148 52 200 52 Q252 52 250 150" fill="none" stroke="currentColor" strokeWidth="11" strokeLinecap="round" />
      <path d="M104 142 L296 142 L306 338 Q200 350 94 338 Z" stroke={EDGE} strokeWidth="2" strokeLinejoin="round" />
      <path d="M104 142 L296 142" stroke="rgba(0,0,0,0.25)" strokeWidth="6" />
      <Mark x={200} y={226} w={132} logo={logo} />
      <text x="200" y="272" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="8" letterSpacing="4" fill={ink}>EQUESTRIAN &amp; POLO CLUB</text>
    </>
  ),
};

export default function ProductArt({ type, fill, ink, logo, label }) {
  const Art = ART[type];
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label={label} fill={fill} color={fill}>
      <ellipse cx="200" cy="372" rx="120" ry="9" fill="#000" fillOpacity="0.1" stroke="none" />
      <Art ink={ink} logo={logo || "mint"} />
    </svg>
  );
}
