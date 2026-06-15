"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [choice, setChoice] = useState<"yes" | "no">("yes");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg-text" aria-hidden="true">Sy</div>
      <div className="hero-inner">

        {/* LEFT */}
        <div className={`hero-left hero-animate${loaded ? " hero-animate-in" : ""}`}>
          <p className="hero-eyebrow">
            RIGHT CLIENTS, RIGHT PRICE, RIGHT RESULTS TAILORED FOR YOU
          </p>
          <h1 className="hero-headline">
            <span className="orange">Digital Marketing</span> and
            <br />
            <span className="orange">Web Development</span>
            <br />
            Built for <span className="orange">Your Profit</span>
          </h1>
          <p className="hero-sub">
            POWERED BY OUR PROVEN FRAMEWORK <strong>CORE</strong>.
          </p>

          <div className="poll-widget">
            <p className="poll-title">Whats your thought?</p>

            <div className="poll-option" onClick={() => setChoice("yes")}>
              <input type="radio" name="poll" id="yes" checked={choice === "yes"} onChange={() => setChoice("yes")} />
              <label htmlFor="yes">
                Yes, I want to increase profits through digital marketing
              </label>
              <span className="poll-pct">88%</span>
            </div>
            <div className="poll-bar">
              <div className="poll-bar-fill" style={{ width: "88%" }} />
            </div>

            <div className="poll-option" onClick={() => setChoice("no")}>
              <input type="radio" name="poll" id="no" checked={choice === "no"} onChange={() => setChoice("no")} />
              <label htmlFor="no">No, I am not ready to grow just yet</label>
              <span className="poll-pct">12%</span>
            </div>
            <div className="poll-bar">
              <div className="poll-bar-fill" style={{ width: "12%" }} />
            </div>

            <button className="poll-btn">I Made My Choice</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className={`hero-right hero-animate${loaded ? " hero-animate-in" : ""}`} style={{ transitionDelay: "0.15s" }}>
          <div className="hero-img-wrap">
            {/* 5X badge */}
            {/* <div className="growth-badge">
              <div className="growth-badge-num">5<span>X</span></div>
              <div className="growth-badge-label">GROWTH<br />RESULTS</div>
            </div> */}

            <Image
              src="/images/image.png"
              alt="Digital Marketing Results - Syspree"
              width={700}
              height={650}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              priority
              unoptimized
            />

            {/* Real partner badges */}
            
          </div>
        </div>

      </div>
    </section>
  );
}