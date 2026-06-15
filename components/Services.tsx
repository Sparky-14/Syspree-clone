"use client";

import { useEffect, useRef } from "react";

const SERVICES = [
  { icon: "🌐", name: "Web Design &\nDevelopment", href: "#" },
  { icon: "📈", name: "Digital\nMarketing", href: "#" },
  { icon: "🤖", name: "Artificial\nIntelligence", href: "#" },
  { icon: "💻", name: "Information\nTechnology", href: "#" },
  { icon: "🤝", name: "Outsourcing", href: "#" },
];

export default function Services() {
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
    <section className="section services" id="services" ref={ref}>
      <div className="container">
        <div className="text-center reveal">
          <p className="sec-label">Our Capabilities</p>
          <h2 className="sec-title">
            Let&apos;s Start <em>Growing Your Business</em> Today!
          </h2>
          <p className="sec-body">
            From web development to AI-driven marketing, our full-stack digital
            capabilities are built to scale your business end-to-end.
          </p>
        </div>
        <div className="services-wrap">
          {SERVICES.map((s, i) => (
            <a
              href={s.href}
              className={`svc-card reveal reveal-delay-${i + 1}`}
              key={s.name}
            >
              <span className="svc-icon" aria-hidden="true">{s.icon}</span>
              <div className="svc-name" style={{ whiteSpace: "pre-line" }}>{s.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
