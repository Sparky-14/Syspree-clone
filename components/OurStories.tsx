"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const STORIES = [
  {
    thumb: "https://syspree.com/wp-content/uploads/2024/10/thumb-1.jpg",
    video: "https://player.vimeo.com/video/1020065810?autoplay=1&rel=0&controls=0",
    caption: "One team,\nOne dream, SySpree.",
  },
  {
    thumb: "https://syspree.com/wp-content/uploads/2024/10/Story-2.00_00_01_13.Still002.png",
    video: "https://player.vimeo.com/video/1020066832?autoplay=1&rel=0&controls=0",
    caption: "",
  },
  {
    thumb: "https://syspree.com/wp-content/uploads/2024/10/Story-3.00_00_01_25.Still001.png",
    video: "https://player.vimeo.com/video/1020067072?autoplay=1&rel=0&controls=0",
    caption: "",
  },
  {
    thumb: "https://syspree.com/wp-content/uploads/2024/10/thumb-4.jpg",
    video: "https://player.vimeo.com/video/1020067486?autoplay=1&rel=0&controls=0",
    caption: "Creme de la\nCreme",
  },
];

// Duplicate for infinite loop
const SLIDES = [...STORIES, ...STORIES, ...STORIES];

const CARD_W = 250; // px per card
const GAP = 10;
const VISIBLE = 4;

export default function OurStories() {
  const [offset, setOffset] = useState(STORIES.length * (CARD_W + GAP));
  const [playing, setPlaying] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPaused = useRef(false);

  // Auto-slide: move 1px every ~8ms → smooth scroll, speed matches live site
  useEffect(() => {
    animRef.current = setInterval(() => {
      if (isPaused.current) return;
      setOffset((prev) => {
        const max = STORIES.length * 2 * (CARD_W + GAP);
        const min = STORIES.length * (CARD_W + GAP);
        const next = prev + 1;
        // Seamless loop: when we've scrolled one full set, jump back
        if (next >= max) return min;
        return next;
      });
    }, 10);
    return () => { if (animRef.current) clearInterval(animRef.current); };
  }, []);

  const pause = () => { isPaused.current = true; };
  const resume = () => { isPaused.current = false; };

  return (
    <section className="our-stories-sec">
      {/* Heading */}
      <div className="our-stories-head">
        <p className="our-stories-eyebrow">OUR STORIES</p>
        <h2 className="our-stories-title">What&apos;s Happening at Syspree</h2>
      </div>

      {/* Carousel */}
      <div
        className="our-stories-viewport"
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        <div
          ref={trackRef}
          className="our-stories-track"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {SLIDES.map((s, i) => (
            <div className="story-slide" key={i}>
              {playing === `${i}` ? (
                <iframe
                  src={s.video}
                  className="story-iframe"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title={`Story ${i}`}
                />
              ) : (
                <div
                  className="story-slide-inner"
                  onClick={() => { setPlaying(`${i}`); pause(); }}
                >
                  {/* Thumbnail */}
                  <Image
                    src={s.thumb}
                    alt={`Syspree Story ${(i % STORIES.length) + 1}`}
                    fill
                    unoptimized
                    style={{ objectFit: "cover" }}
                  />

                  {/* Dark gradient overlay */}
                  <div className="story-overlay" />

                  {/* Syspree logo circle — top left */}
                  <div className="story-logo">
                    <Image
                      src="https://syspree.com/wp-content/uploads/2024/04/logosyspree.png"
                      alt="Syspree"
                      width={32}
                      height={32}
                      unoptimized
                      style={{ objectFit: "contain", borderRadius: "50%" }}
                    />
                  </div>

                  {/* Play button — center */}
                  <div className="story-play">
                    <svg viewBox="0 0 60 60" width="52" height="52" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="30" cy="30" r="28" fill="none" stroke="white" strokeWidth="2.5" />
                      <polygon points="24,18 46,30 24,42" fill="white" />
                    </svg>
                  </div>

                  {/* Caption — bottom left */}
                  {s.caption && (
                    <div className="story-caption">
                      {s.caption.split("\n").map((line, li) => (
                        <span key={li}>{line}<br /></span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}