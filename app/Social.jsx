import { SOCIAL } from "./social";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15.5 21.5v-7h2.4l.4-2.9h-2.8V9.8c0-.8.3-1.4 1.5-1.4h1.4V5.8c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2.2H10.4v2.9h2.4v7" fill="currentColor" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.4" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// "Visit us on Facebook" and "Visit us on Instagram" buttons. `tone="light"` is for dark backgrounds.
export default function SocialButtons({ tone = "dark", className = "" }) {
  return (
    <div className={`social ${tone === "light" ? "social-light" : ""} ${className}`}>
      <a className="social-btn" href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer">
        <FacebookIcon />
        <span>Visit us on Facebook</span>
      </a>
      <a className="social-btn" href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
        <span>Visit us on Instagram</span>
      </a>
    </div>
  );
}
