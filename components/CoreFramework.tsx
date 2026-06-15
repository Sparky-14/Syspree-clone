"use client";

import { useEffect, useRef } from "react";

const CORE = [
  {
    letter: "C",
    name: "Consult",
    text: "We start by deeply understanding your business, your audience, and your goals - building a strategy that's uniquely yours.",
  },
  {
    letter: "O",
    name: "Optimize",
    text: "Executing what we strategized with precision. Doing what we say is a core habit at SySpree - always.",
  },
  {
    letter: "R",
    name: "Reinforce",
    text: "We push the envelope by multiplying, tweaking and improving every campaign for lasting, compounding success.",
  },
  {
    letter: "E",
    name: "Excel",
    text: "Excellence in all we do. We don't just strive for success - we raise the bar and strive even harder.",
  },
];

export default function CoreFramework() {
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
    <section className="section core-sec" ref={ref}>
      <div className="container">
        <div className="text-center reveal">
          <p className="sec-label">Our Framework</p>
          <h2 className="sec-title">
            The <em>CORE</em> of Everything We Do
          </h2>
          <p className="sec-body">
            Our proprietary four-step framework is what separates results-driven
            digital marketing from average agency work.
          </p>
        </div>
        <div className="core-sec-grid">
          {CORE.map((item, i) => (
            <div
              className={`core-block reveal reveal-delay-${i + 1}`}
              data-letter={item.letter}
              key={item.letter}
            >
              <div className="core-block-letter">{item.letter}</div>
              <div className="core-block-name">{item.name}</div>
              <p className="core-block-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
