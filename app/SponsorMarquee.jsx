"use client";

import { useState } from "react";

// Sponsor logos drifting right to left. The list is rendered twice so sliding it left by half
// loops seamlessly. It pauses on hover or keyboard focus and with the pause button (WCAG 2.2.2),
// and stands still, wrapped onto rows, for visitors who ask for reduced motion.
export default function SponsorMarquee({ sponsors }) {
  const [paused, setPaused] = useState(false);

  return (
    <div className="marquee" data-paused={paused}>
      <div className="marquee-view">
        <ul className="marquee-track">
          {[0, 1].map((copy) =>
            sponsors.map((s) => (
              <li key={`${copy}-${s.name}`} aria-hidden={copy === 1 ? "true" : undefined}>
                <a href={s.href} rel="noopener" tabIndex={copy === 1 ? -1 : undefined} aria-label={copy === 1 ? undefined : s.name}>
                  <img src={s.logo} alt={copy === 1 ? "" : s.name} style={{ "--h": `${s.h}px` }} loading="lazy" />
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
      <button type="button" className="marquee-btn" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? "Play sponsor scroll" : "Pause sponsor scroll"}>
        {paused ? (
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>
        )}
      </button>
    </div>
  );
}
