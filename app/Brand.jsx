export function Monogram() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill="#14283f" stroke="#e6c58f" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="18" fill="none" stroke="#c4924f" strokeWidth="0.8" />
      <text x="24" y="31.5" textAnchor="middle" fontFamily="Georgia, serif" fontSize="22" fill="#e6c58f">B</text>
    </svg>
  );
}

export function Brand() {
  return (
    <a href="/" className="brand" aria-label="Beldi Equestrian & Polo Club, home">
      <Monogram />
      <span>
        <b>Beldi</b>
        <small>Equestrian &amp; Polo Club</small>
      </span>
    </a>
  );
}
