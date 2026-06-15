"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SLIDES = [
  {
    thumb: "https://syspree.com/wp-content/uploads/2024/09/menka.jpg",
    name: "Iyengar Counselling Services",
    video: "https://player.vimeo.com/video/1013419334?autoplay=1&rel=0&controls=0",
  },
  {
    thumb: "https://syspree.com/wp-content/uploads/2024/09/frontline.jpg",
    name: "Frontline Dubai",
    video: "https://player.vimeo.com/video/1013421642?autoplay=1&rel=0&controls=0",
  },
  {
    thumb: "https://syspree.com/wp-content/uploads/2024/09/gateway.jpg.webp",
    name: "Gateway Passengers Transport",
    video: "https://player.vimeo.com/video/1013422185?autoplay=1&rel=0&controls=0",
  },
  {
    thumb: "https://syspree.com/wp-content/uploads/2024/09/Thumbnail-1-tlg.jpg",
    name: "TLG",
    video: "https://player.vimeo.com/video/1013497611?autoplay=1&rel=0&controls=0",
  },
  {
    thumb: "https://syspree.com/wp-content/uploads/2024/09/Thumbnail-1.jpg",
    name: "Client Testimonial",
    video: "https://player.vimeo.com/video/1010918660?autoplay=1&rel=0&controls=0",
  },
  {
    thumb: "https://syspree.com/wp-content/uploads/2024/09/Thumbnail-2.jpg",
    name: "Client Testimonial",
    video: "https://player.vimeo.com/video/1012643868?autoplay=1&rel=0&controls=0",
  },
  {
    thumb: "https://syspree.com/wp-content/uploads/2025/01/Thumbnail-1.jpg",
    name: "Client Testimonial",
    video: "https://player.vimeo.com/video/1047091532?autoplay=1&rel=0&controls=0",
  },
];

export default function ClientsSpeak() {
  const [active, setActive] = useState(0);
  const total = SLIDES.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 3500);
  };

  useEffect(() => {
    startAuto();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAuto();
  };

  const prev = () => { setActive((a) => (a - 1 + total) % total); setPlayingVideo(null); resetAuto(); };
  const next = () => { setActive((a) => (a + 1) % total); setPlayingVideo(null); resetAuto(); };
  const getIdx = (offset: number) => (active + offset + total) % total;

  return (
    <div className="cs-wrapper">
      {/* Heading sits on white bg above the orange section */}
      <div className="cs-heading-row">
        <span className="cs-heading-text">OUR CLIENTS SPEAK FOR US</span>
      </div>

      {/* Full-width orange section */}
      <div className="cs-orange-section">
        {/* Cards track — overflow hidden so side cards bleed to edges */}
        <div className="cs-track">

          {/* Far left card — partially visible */}
          <div className="cs-card cs-card-far-left" onClick={prev}>
            <div className="cs-card-inner">
              <Image src={SLIDES[getIdx(-2)].thumb} alt={SLIDES[getIdx(-2)].name} fill unoptimized style={{ objectFit: "cover" }} />
            </div>
          </div>

          {/* Left card */}
          <div className="cs-card cs-card-side cs-card-left" onClick={prev}>
            <div className="cs-card-inner">
              <Image src={SLIDES[getIdx(-1)].thumb} alt={SLIDES[getIdx(-1)].name} fill unoptimized style={{ objectFit: "cover" }} />
            </div>
          </div>

          {/* Center card — active */}
          <div className="cs-card cs-card-center">
            <div className="cs-card-inner">
              {playingVideo === SLIDES[getIdx(0)].video ? (
                <iframe
                  src={playingVideo}
                  style={{ width: "100%", height: "100%", border: "none", display: "block" }}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title={SLIDES[getIdx(0)].name}
                />
              ) : (
                <>
                  <Image src={SLIDES[getIdx(0)].thumb} alt={SLIDES[getIdx(0)].name} fill unoptimized style={{ objectFit: "cover" }} />
                  <button className="cs-play" onClick={() => setPlayingVideo(SLIDES[getIdx(0)].video)} aria-label="Play">
                    <svg viewBox="0 0 64 64" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="32" fill="rgba(255,255,255,0.88)" />
                      <polygon points="26,18 50,32 26,46" fill="#e87722" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Right card */}
          <div className="cs-card cs-card-side cs-card-right" onClick={next}>
            <div className="cs-card-inner">
              <Image src={SLIDES[getIdx(1)].thumb} alt={SLIDES[getIdx(1)].name} fill unoptimized style={{ objectFit: "cover" }} />
            </div>
          </div>

          {/* Far right card — partially visible */}
          <div className="cs-card cs-card-far-right" onClick={next}>
            <div className="cs-card-inner">
              <Image src={SLIDES[getIdx(2)].thumb} alt={SLIDES[getIdx(2)].name} fill unoptimized style={{ objectFit: "cover" }} />
            </div>
          </div>

        </div>

        {/* Next arrow — right side only, matching screenshot */}
        <button className="cs-next-arrow" onClick={next} aria-label="Next">&#8250;</button>

        {/* Wavy white strip at bottom */}
        <div className="cs-wave-bottom">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
}