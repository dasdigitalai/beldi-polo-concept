"use client";

import { useEffect, useRef, useState } from "react";

// Looping dusk-polo video behind the hero. The SVG sunset scene underneath stays as the
// placeholder while it loads, and is the only background for visitors who prefer reduced
// motion or have Data Saver on. Phones get a smaller portrait file. A pause button is
// provided so the motion can be stopped (WCAG 2.2.2).
export default function HeroVideo({ desktop, mobile }) {
  const ref = useRef(null);
  const [src, setSrc] = useState(null);
  const [on, setOn] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = navigator.connection && navigator.connection.saveData;
    if (reduced || saveData) return;
    setSrc(window.matchMedia("(max-width: 720px)").matches ? mobile : desktop);
  }, [desktop, mobile]);

  useEffect(() => {
    const v = ref.current;
    if (!v || !src) return;
    v.muted = true; // set as a property too: React does not always reflect the attribute, and autoplay needs it
    v.play().catch(() => {});
  }, [src]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play().catch(() => {}); setPaused(false); } else { v.pause(); setPaused(true); }
  };

  return (
    <>
      {src ? (
        <video
          ref={ref}
          className={`hero-video${on ? " on" : ""}`}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setOn(true)}
        />
      ) : null}
      <div className={`hero-shade${on ? " on" : ""}`} aria-hidden="true" />
      {on ? (
        <button type="button" className="hero-pause" onClick={toggle} aria-label={paused ? "Play background video" : "Pause background video"}>
          {paused ? (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>
          )}
        </button>
      ) : null}
    </>
  );
}
