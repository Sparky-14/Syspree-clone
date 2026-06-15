"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SLIDES = [
  {
    thumb: "https://syspree.com/wp-content/uploads/2024/09/menka.jpg",
    name: "Iyengar Counselling Services",
    video: "https://player.vimeo.com/video/1013419334",
  },
  {
    thumb: "https://syspree.com/wp-content/uploads/2024/09/frontline.jpg",
    name: "Frontline Dubai",
    video: "https://player.vimeo.com/video/1013421642",
  },
  {
    thumb: "https://syspree.com/wp-content/uploads/2024/09/gateway.jpg.webp",
    name: "Gateway Passengers Transport",
    video: "https://player.vimeo.com/video/1013422185",
  },
  {
    thumb: "https://syspree.com/wp-content/uploads/2024/09/Thumbnail-1-tlg.jpg",
    name: "TLG",
    video: "https://player.vimeo.com/video/1013497611",
  },
  {
    thumb: "https://syspree.com/wp-content/uploads/2024/09/Thumbnail-1.jpg",
    name: "Client Testimonial",
    video: "https://player.vimeo.com/video/1010918660",
  },
  {
    thumb: "https://syspree.com/wp-content/uploads/2024/09/Thumbnail-2.jpg",
    name: "Client Testimonial",
    video: "https://player.vimeo.com/video/1012643868",
  },
  {
    thumb: "https://syspree.com/wp-content/uploads/2025/01/Thumbnail-1.jpg",
    name: "Client Testimonial",
    video: "https://player.vimeo.com/video/1047091532",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(1); // center card
  const total = SLIDES.length;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 3000);
  };

  useEffect(() => {
    startAuto();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const resetAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAuto();
  };

  const prev = () => { setActive((a) => (a - 1 + total) % total); resetAuto(); };
  const next = () => { setActive((a) => (a + 1) % total); resetAuto(); };

  // Get 3 visible: left, center, right
  const getSlide = (offset: number) => SLIDES[(active + offset + total) % total];

  const cardStyle = (pos: "left" | "center" | "right"): React.CSSProperties => {
    if (pos === "center") return {
      transform: "scale(1) rotateY(0deg)",
      zIndex: 3,
      opacity: 1,
      boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
    };
    if (pos === "left") return {
      transform: "scale(0.85) rotateY(12deg) translateX(40px)",
      zIndex: 2,
      opacity: 0.75,
    };
    return {
      transform: "scale(0.85) rotateY(-12deg) translateX(-40px)",
      zIndex: 2,
      opacity: 0.75,
    };
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-label">OUR CLIENTS SPEAK FOR US</div>

      <div className="coverflow-stage">
        {/* LEFT card */}
        <div className="coverflow-card" style={cardStyle("left")} onClick={prev}>
          <Image src={getSlide(-1).thumb} alt={getSlide(-1).name} fill unoptimized style={{ objectFit: "cover" }} />
          <div className="coverflow-shadow-right" />
        </div>

        {/* CENTER card */}
        <div className="coverflow-card coverflow-center" style={cardStyle("center")}>
          <Image src={getSlide(0).thumb} alt={getSlide(0).name} fill unoptimized style={{ objectFit: "cover" }} />
        </div>

        {/* RIGHT card */}
        <div className="coverflow-card" style={cardStyle("right")} onClick={next}>
          <Image src={getSlide(1).thumb} alt={getSlide(1).name} fill unoptimized style={{ objectFit: "cover" }} />
          <div className="coverflow-shadow-left" />
        </div>

        {/* Arrows */}
        <button className="coverflow-btn coverflow-prev" onClick={prev} aria-label="Previous">&#8249;</button>
        <button className="coverflow-btn coverflow-next" onClick={next} aria-label="Next">&#8250;</button>
      </div>
    </section>
  );
}