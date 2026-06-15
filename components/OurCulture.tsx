"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function OurCulture() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    if (!els) return;
    const obs = new IntersectionObserver(
      (e) => e.forEach((en) => en.isIntersecting && en.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="culture-sec" ref={ref}>
      {/* OUR CULTURE heading */}
      <div className="culture-head reveal">
        <p className="culture-eyebrow">OUR CULTURE</p>
        <h2 className="culture-title">Our <strong>Community</strong></h2>
      </div>

      <div className="culture-inner">
        {/* Leadership — left text, right 2 photos */}
        <div className="culture-leadership reveal">
          <div className="culture-left">
            <h3 className="culture-sub">OUR LEADERSHIP</h3>
            <p className="culture-body">
              At Syspree, our leadership team is at the forefront of innovation and strategic growth.
              It is the backbone of our success and the driving force behind our clients&apos; success.
            </p>
            <p className="culture-body">
              Caahill, as the Head of Business Management, Operations, and Fulfillment, plays a pivotal
              role in ensuring seamless project execution and operational excellence. His leadership
              guarantees that Syspree&apos;s clients receive top-tier solutions with measurable impact.
            </p>
            <p className="culture-body">
              Jay, as the Head of Sales, drives Syspree&apos;s market growth and excels at strengthening
              client relationships. His leadership in expanding Syspree&apos;s reach ensures we stay
              competitive and deliver exceptional services.
            </p>
            <p className="culture-body">
              Together, they lead Syspree to deliver transformative results that drive your business forward.
            </p>
            <a href="https://syspree.com/our-team/" className="culture-learn-btn" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
          <div className="culture-photos">
            <div className="culture-photo">
              <Image
                src="https://syspree.com/wp-content/uploads/2024/10/1-240x300.png"
                alt="Syspree Leadership"
                width={240} height={300}
                unoptimized
                style={{ objectFit: "cover", width: "100%", height: "100%", filter: "grayscale(1)" }}
              />
            </div>
            <div className="culture-photo">
              <Image
                src="https://syspree.com/wp-content/uploads/2024/10/2-240x300.png"
                alt="Syspree Leadership"
                width={240} height={300}
                unoptimized
                style={{ objectFit: "cover", width: "100%", height: "100%", filter: "grayscale(1)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}