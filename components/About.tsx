"use client";

import { useEffect, useRef } from "react";

const ABOUT_POINTS = [
  {
    title: "CORE Framework",
    text: "Built on Consult, Optimize, Reinforce, Excel. Every project is strategic, data-driven, and built for sustainable growth.",
  },
  {
    title: "Results That Matter",
    text: "Our strategies bring in high-value clients. $3M+ in digital services sold, led by industry veterans.",
  },
  {
    title: "10 Years of Excellence",
    text: "Helping businesses scale profitably across UAE, Middle East, Australia, India, UK, and US.",
  },
];

const CORE_ITEMS = [
  {
    letter: "C",
    name: "Consult",
    desc: "Understanding you and your clients to target them with the right strategy.",
  },
  {
    letter: "O",
    name: "Optimize",
    desc: "Executing what we strategized. Doing what we say is a habit at SySpree.",
  },
  {
    letter: "R",
    name: "Reinforce",
    desc: "We push the envelope by multiplying, tweaking and improving for lasting success.",
  },
  {
    letter: "E",
    name: "Excel",
    desc: "Excellence in all we do. We don't just strive for success - we strive harder.",
  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="reveal">
            <p className="sec-label">About Syspree</p>
            <h2 className="sec-title">
              <em>Powerhouse</em> of Digital Success
            </h2>
            <p className="sec-body">
              At Syspree, we don&apos;t just create digital strategies - we
              engineer business growth. As a powerhouse of digital success,
              we specialize in high-impact digital marketing, web development,
              and AI-driven marketing solutions designed to drive revenue,
              amplify brand presence, and maximize ROI.
            </p>
            <div className="about-points">
              {ABOUT_POINTS.map((point, i) => (
                <div className={`about-pt reveal reveal-delay-${i + 1}`} key={point.title}>
                  <div className="about-pt-dot">✓</div>
                  <div className="about-pt-text">
                    <strong>{point.title}</strong> - {point.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="btn-group reveal">
              <a href="#" className="btn-orange">Discover More About Syspree</a>
              <a href="#" className="btn-outline-orange">Our Team</a>
            </div>
          </div>

          <div className="core-visual reveal reveal-delay-2">
            <div className="core-grid">
              {CORE_ITEMS.map((item) => (
                <div className="core-box" key={item.letter}>
                  <div className="core-letter">{item.letter}</div>
                  <div className="core-name">{item.name}</div>
                  <div className="core-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
