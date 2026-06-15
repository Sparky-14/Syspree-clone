"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const CASES = [
  {
    img: "https://syspree.com/wp-content/uploads/2024/09/30x-increase-in-leads-for-a-sports-coaching-company-case-study-for-digital-Marketing-for-3000-increase-in-traffic-syspree.webp",
    eyebrow: "Digital Marketing",
    stat: "30 Times Surge in Leads within a year",
    industry: "Sports Coaching Company",
    href: "https://syspree.com/case-studies/case-study-digital-marketing-for-sports/",
  },
  {
    img: "https://syspree.com/wp-content/uploads/2024/09/14x-increase-in-traffic-for-immigration-companies-case-study-for-digital-Marketing-for-1400-increase-in-traffic-syspree.webp",
    eyebrow: "Lead Generation",
    stat: "14x increase in traffic for immigration company",
    industry: "Immigration Company",
    href: "https://syspree.com/case-studies/case-study-digital-marketing-for-oracle/",
  },
  {
    img: "https://syspree.com/wp-content/uploads/2024/05/Frame-1000003306.png",
    eyebrow: "E-commerce Marketing",
    stat: "Massive revenue growth for FMCG brand",
    industry: "FMCG Distributors",
    href: "https://syspree.com/case-studies/case-study-digital-fmcg-marketing-for-fmcg-products/",
  },
  {
    img: "https://syspree.com/wp-content/uploads/2024/09/Decking-case-study-for-digital-Marketing-for-500-increase-in-leads.webp",
    eyebrow: "Paid Media",
    stat: "500% increase in leads for decking company",
    industry: "Decking & Patio Company",
    href: "https://syspree.com/case-studies/case-study-digital-marketing-for-decking/",
  },
  {
    img: "https://syspree.com/wp-content/uploads/2024/09/double-leads-in-less-than-2-months-for-accounting-companies-case-study-for-digital-Marketing-for-200-increase-in-traffic-syspree.webp",
    eyebrow: "SEO + PPC",
    stat: "Doubled leads in less than 2 months",
    industry: "Accountants & Corporate Services",
    href: "https://syspree.com/case-studies/case-study-digital-marketing-for-accounting-leads/",
  },
  {
    img: "https://syspree.com/wp-content/uploads/2024/09/holistic-lifestyle-brand-case-study-for-digital-Marketing-for-900-increase-in-traffic.webp",
    eyebrow: "Social Media",
    stat: "900% increase in traffic for lifestyle brand",
    industry: "Holistic Lifestyle Brand",
    href: "https://syspree.com/case-studies/",
  },
];

export default function CaseStudies() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")), { threshold: 0.1 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section case-studies" id="case-studies" ref={ref}>
      <div className="container">
        <div className="text-center reveal">
          <p className="sec-label">Case Studies</p>
          <h2 className="sec-title"><em>Proven Results</em> Across Industries</h2>
          <p className="sec-body">Real businesses, real growth. See how we&apos;ve delivered measurable results for our clients.</p>
        </div>
        <div className="case-grid">
          {CASES.map((c, i) => (
            <a href={c.href} className={`case-card reveal reveal-delay-${(i % 3) + 1}`} key={c.industry} target="_blank" rel="noopener noreferrer">
              <div className="case-thumb">
                <Image src={c.img} alt={c.industry} fill style={{ objectFit: "cover" }} unoptimized />
              </div>
              <div className="case-body">
                <p className="case-eyebrow">{c.eyebrow}</p>
                <p className="case-stat">{c.stat}</p>
                <p className="case-ind">{c.industry}</p>
              </div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <a href="https://syspree.com/case-studies/" className="btn-outline-orange" target="_blank" rel="noopener noreferrer">Learn How We Can Help Your Business</a>
        </div>
      </div>
    </section>
  );
}
