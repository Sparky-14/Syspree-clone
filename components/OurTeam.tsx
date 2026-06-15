"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const TEAM_IMGS = [
  "https://syspree.com/wp-content/uploads/2024/10/1-1-240x300.png",
  "https://syspree.com/wp-content/uploads/2024/10/2-1-240x300.png",
  "https://syspree.com/wp-content/uploads/2024/10/3-240x300.png",
  "https://syspree.com/wp-content/uploads/2024/10/1-2-240x300.png",
  "https://syspree.com/wp-content/uploads/2024/10/2-2-240x300.png",
  "https://syspree.com/wp-content/uploads/2024/10/1-3-240x300.png",
  "https://syspree.com/wp-content/uploads/2024/10/5-240x300.png",
  "https://syspree.com/wp-content/uploads/2024/10/8-240x300.png",
  "https://syspree.com/wp-content/uploads/2024/10/9-240x300.png",
];

// Duplicate for infinite scroll
const SLIDES = [...TEAM_IMGS, ...TEAM_IMGS, ...TEAM_IMGS];

export default function OurTeam() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(TEAM_IMGS.length * 130);
  const isPaused = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach((en) => en.isIntersecting && en.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal")?.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPaused.current) return;
      setOffset((prev) => {
        const max = TEAM_IMGS.length * 2 * 130;
        const min = TEAM_IMGS.length * 130;
        const next = prev + 1;
        return next >= max ? min : next;
      });
    }, 14);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="team-sec" ref={ref}>
      <div className="team-inner">
        {/* Left: scrolling portrait carousel */}
        <div
          className="team-carousel reveal"
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
        >
          <div className="team-track" style={{ transform: `translateX(-${offset}px)` }}>
            {SLIDES.map((src, i) => (
              <div className="team-photo" key={i}>
                <Image
                  src={src}
                  alt={`Syspree team member ${(i % TEAM_IMGS.length) + 1}`}
                  width={120}
                  height={150}
                  unoptimized
                  style={{ objectFit: "cover", width: "100%", height: "100%", filter: "grayscale(1)" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: text */}
        <div className="team-text reveal reveal-delay-2">
          <h3 className="team-sub">OUR TEAM</h3>
          <p className="team-body">
            At Syspree, our team is not just skilled and full of domain expertise —they&apos;re
            innovators who elevate industry standards.
          </p>
          <p className="team-body">
            Each member brings unique expertise, years of experience and a passion for driving
            measurable results for each of our clients. Our talented professionals specialize in
            cutting-edge digital marketing strategies, web development, and brand growth, helping
            businesses outperform their competition.
          </p>
          <p className="team-body">
            Whether it&apos;s designing user-centric websites or crafting high-converting campaigns,
            our team delivers exceptional results, tailored to your specific needs. Trust in
            Syspree&apos;s unmatched talent pool to take your business to the next level with
            solutions that are creative, strategic, and results-driven.
          </p>
          <a href="https://syspree.com/our-team/" className="btn-orange" target="_blank" rel="noopener noreferrer">
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  );
}