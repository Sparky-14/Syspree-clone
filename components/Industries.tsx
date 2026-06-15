"use client";

import { useEffect, useRef } from "react";

const INDUSTRIES = [
  { icon: "🛒", name: "E-Commerce", desc: "Driving traffic, conversions and repeat customers for online stores." },
  { icon: "💡", name: "Technology & SaaS", desc: "Generating qualified B2B pipeline for software companies." },
  { icon: "🏢", name: "Consulting & Corporate", desc: "Positioning consultants as the go-to authority in their niche." },
  { icon: "🎓", name: "Education & Training", desc: "Filling enrolments and building recognizable education brands." },
  { icon: "🏥", name: "Healthcare", desc: "Trusted digital strategies for clinics, hospitals and health brands." },
  { icon: "🪴", name: "Interior Design", desc: "Showcasing portfolios and converting dream clients online." },
  { icon: "✈️", name: "Travel & Tourism", desc: "Booking more experiences through targeted search and social." },
  { icon: "🍽️", name: "Hospitality & FnB", desc: "Filling tables and building loyal audiences for restaurants." },
];

export default function Industries() {
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
    <section className="section industries" id="industries" ref={ref}>
      <div className="container">
        <div className="text-center reveal">
          <p className="sec-label">Industries We Serve</p>
          <h2 className="sec-title">
            Deep Expertise Across <em>Key Sectors</em>
          </h2>
          <p className="sec-body">
            We don&apos;t do cookie-cutter marketing. Each industry has its own
            buyer journey, seasonality, and competitive landscape — and we know them all.
          </p>
        </div>
        <div className="ind-grid">
          {INDUSTRIES.map((ind, i) => (
            <div
              className={`ind-card reveal reveal-delay-${(i % 4) + 1}`}
              key={ind.name}
            >
              <span className="ind-icon">{ind.icon}</span>
              <div className="ind-name">{ind.name}</div>
              <p className="ind-desc">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
