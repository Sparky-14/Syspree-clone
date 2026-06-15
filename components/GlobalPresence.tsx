"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function GlobalPresence() {
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
    <section className="global-sec" id="global" ref={ref}>
      <div className="global-inner">
        {/* Eyebrow — "OUR GLOBAL PRESENCE" */}
        <p className="global-eyebrow reveal">
          OUR <span className="global-eyebrow-orange">GLOBAL</span> PRESENCE
        </p>

        {/* Main heading */}
        <h2 className="global-heading reveal">
          <span className="global-heading-orange">Countries</span> we are in
        </h2>

        {/* Description */}
        <p className="global-desc reveal">
          Syspree is proud to serve clients from around the world, delivering tailored digital
          marketing and web development solutions that drive growth in diverse markets. Here are
          the countries where we have made an impact.
        </p>

        {/* World Map image — full width, centered */}
        <div className="global-map-wrap reveal">
          <Image
            src="/images/world.png"
            alt="Syspree Global Presence Map"
            width={1024}
            height={612}
            unoptimized
            style={{ width: "100%", height: "auto", display: "block" }}
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}