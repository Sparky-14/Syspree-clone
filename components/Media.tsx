"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const MEDIA_CARDS = [
  {
    quote: <>SySpree&apos;s results-driven approach emphasizes <span style={{color:"#FF9211"}}>trust and transparency</span>.</>,
    logo: { src: "https://syspree.com/wp-content/uploads/2024/10/MSN-Emblem.png", alt: "MSN", w: 60, h: 34 },
    quoteIcon: "https://syspree.com/wp-content/uploads/2024/08/unnamed-file.png",
  },
  {
    quote: <>SySpree remains the gateway to <span style={{color:"#FF9211"}}>digital triumphs</span>.</>,
    logo: { src: "https://syspree.com/wp-content/uploads/2024/10/65fd76450906f0dd54ffbe24_LOGO-13-e1694153703658-1.png", alt: "ANI News", w: 80, h: 29 },
    quoteIcon: "https://syspree.com/wp-content/uploads/2024/08/unnamed-file.png",
  },
  {
    quote: <>SySpree&apos;s <span style={{color:"#FF9211"}}>inhouse IP</span>, generates <span style={{color:"#FF9211"}}>unparalleled growth</span>.</>,
    logo: { src: "https://syspree.com/wp-content/uploads/2024/08/Frame.png", alt: "JioNews", w: 80, h: 20 },
    quoteIcon: "https://syspree.com/wp-content/uploads/2024/08/unnamed-file.png",
  },
];

export default function Media() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="media-sec" ref={ref}>
      <div className="container">
        <p className="sec-label reveal">Media</p>
        <h2 className="media-heading reveal">
          <span style={{color:"#FF9211"}}>Syspree</span> in Media
        </h2>
        <p className="media-desc reveal">
          Our work and achievements have been recognized in leading newspapers, blogs, and industry publications.
          Here are some of the places where Syspree has been featured.
        </p>

        <div className="media-cards-grid">
          {MEDIA_CARDS.map((card, i) => (
            <div className={`media-card reveal reveal-delay-${i + 1}`} key={i}>
              {/* Big orange quote mark */}
              <div className="media-quote-icon">
                <Image
                  src={card.quoteIcon}
                  alt="quote"
                  width={36}
                  height={28}
                  unoptimized
                />
              </div>
              {/* Quote text */}
              <p className="media-quote-text">{card.quote}</p>
              {/* Publication logo */}
              <div className="media-pub-logo">
                <Image
                  src={card.logo.src}
                  alt={card.logo.alt}
                  width={card.logo.w}
                  height={card.logo.h}
                  unoptimized
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}