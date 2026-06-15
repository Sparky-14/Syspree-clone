"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const STORIES = [
  {
    img: "https://syspree.com/wp-content/uploads/2024/10/10-Proven-Digital-Strategies-to-Boost-Lead-Generation-by-SySpree-768x768.webp",
    title: "10 Proven Digital Strategies to Boost Lead Generation and Drive Business Growth",
    href: "https://syspree.com/blog/digital-strategies-for-lead-generation/",
    type: "Blog",
  },
  {
    img: "https://syspree.com/wp-content/uploads/2024/10/Scaling-Your-Business-with-Digital-Marketing_-A-Deep-Dive-into-High-ROI-Campaigns-SySpree-768x768.webp",
    title: "Scaling Your Business with Digital Marketing: A Deep Dive into High-ROI Campaigns",
    href: "https://spotifycreators-web.app.link/e/2LllZpWX8Pb",
    type: "Podcast",
  },
  {
    img: "https://syspree.com/wp-content/uploads/2024/10/How-We-Achieve-5X-Growth-in-Online-Traffic-Sales-by-SySpree-768x768.webp",
    title: "Deep Analysis of Lead Funnels That Deliver Results for Tech Companies",
    href: "https://syspree.com/blog/tech-lead-funnels/",
    type: "Blog",
  },
];

export default function Blogs() {
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
    <section className="stories-sec" id="blogs" ref={ref}>
      <div className="container">
        {/* Heading — matches live site exactly */}
        <div className="stories-heading reveal">
          <p className="stories-eyebrow">
            OUR <span style={{color:"#FF9211"}}><strong>EXPERTISE</strong></span>, YOUR KNOWLEDGE
          </p>
          <h2 className="stories-title">Blogs, Podcasts, Vlogs</h2>
        </div>

        {/* 3-column grid — image on top, title below */}
        <div className="stories-grid">
          {STORIES.map((s, i) => (
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`story-card reveal reveal-delay-${i + 1}`}
              key={i}
            >
              <div className="story-img-wrap">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  unoptimized
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="story-body">
                <p className="story-type">{s.type}</p>
                <h3 className="story-title-text">{s.title}</h3>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="stories-cta reveal">
          <a href="https://syspree.com/blog/" target="_blank" rel="noopener noreferrer" className="btn-orange">
            View the Knowledge Center
          </a>
        </div>
      </div>
    </section>
  );
}