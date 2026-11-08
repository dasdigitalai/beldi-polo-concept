"use client";

import { useEffect, useRef, useState } from "react";

// Looping dusk-polo video behind the hero. The SVG sunset scene underneath is the placeholder while
// it loads, and the background whenever the video is not playing.
//
// Some visitors never get autoplay: iPhones in Low Power Mode block it, and people who ask for
// reduced motion or have Data Saver on should not get moving video unasked. For them (and if autoplay
// is refused for any other reason) a "Play video" button appears, and tapping it plays the video.
// Once playing there is a pause button (WCAG 2.2.2). The video element is always in the page and its
// source is assigned in the tap handler itself, because iOS only honours play() from a user gesture.
export default function HeroVideo({ desktop, mobile }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  const [paused, setPaused] = useState(false);
  const [needsTap, setNeedsTap] = useState(false);

  const start = () => {
    const v = ref.current;
    if (!v) return Promise.reject(new Error("no video"));
    if (!v.getAttribute("src")) v.src = window.matchMedia("(max-width: 720px)").matches ? mobile : desktop;
    v.muted = true; // as a property too: React does not always reflect the attribute, and autoplay needs it
    return v.play() || Promise.resolve();
  };

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = navigator.connection && navigator.connection.saveData;
    if (reduced || saveData) {
      setNeedsTap(true);
      return undefined;
    }
    start().catch(() => setNeedsTap(true));
    // Some browsers neither play nor reject; treat "still not playing" as blocked.
    const t = setTimeout(() => {
      if (ref.current && ref.current.paused) setNeedsTap(true);
    }, 3000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPlaying = () => {
    setOn(true);
    setNeedsTap(false);
    setPaused(false);
  };

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else {
      v.pause();
      setPaused(true);
    }
  };

  return (
    <>
      <video
        ref={ref}
        className={`hero-video${on ? " on" : ""}`}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
        onPlaying={onPlaying}
      />
      <div className={`hero-shade${on ? " on" : ""}`} aria-hidden="true" />
      {!on && needsTap ? (
        <button type="button" className="hero-pause with-label" onClick={() => start().catch(() => {})} aria-label="Play background video">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
          <span>Play video</span>
        </button>
      ) : null}
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
