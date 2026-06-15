"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { target: 10000, suffix: "+", label: "Keywords Ranked on Page 1" },
  { target: 1000, suffix: "+", label: "5X Business Growth" },
  { target: 10, suffix: "+", label: "Trusted Digital Leadership" },
  { target: 1000, suffix: "+", label: "Websites Managed" },
  { target: 100000, suffix: "+", label: "Leads per day" },
];

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) { setStarted(true); obs.unobserve(e.target); } }); },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1600; const steps = 60; const interval = duration / steps;
    const timers = STATS.map((stat, i) => {
      const step = stat.target / steps; let current = 0;
      return setInterval(() => {
        current = Math.min(current + step, stat.target);
        setCounts((prev) => { const next = [...prev]; next[i] = Math.floor(current); return next; });
        if (current >= stat.target) clearInterval(timers[i]);
      }, interval);
    });
    return () => timers.forEach((t) => clearInterval(t));
  }, [started]);

  return (
    <div className="ach-wrap" ref={ref}>
      <div className="container">
        <div className="ach-layout">
          {/* Left side — label + heading */}
          <div className="ach-left">
            <p className="ach-eyebrow">RESULTS IN NUMBERS</p>
            <h2 className="ach-heading">
              Our <span className="ach-heading-orange">Achievements</span> in Numbers
            </h2>
          </div>

          {/* Right side — 2x2 + 1 grid with orange borders */}
          <div className="ach-grid-box">
            <div className="ach-grid-inner">
              {STATS.map((stat, i) => (
                <div className={`ach-box${i === 4 ? " ach-box-wide" : ""}`} key={stat.label}>
                  <div className="ach-box-num">
                    {counts[i].toLocaleString()}{stat.suffix}
                  </div>
                  <div className="ach-box-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}