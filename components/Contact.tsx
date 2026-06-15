// "use client";

// import { useState, useRef, useEffect } from "react";

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
//   const [submitted, setSubmitted] = useState(false);
//   const ref = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const els = ref.current?.querySelectorAll(".reveal");
//     if (!els) return;
//     const obs = new IntersectionObserver(
//       (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
//       { threshold: 0.1 }
//     );
//     els.forEach((el) => obs.observe(el));
//     return () => obs.disconnect();
//   }, []);

//   const handleSubmit = () => {
//     if (form.name && form.email) setSubmitted(true);
//   };

//   return (
//     <section className="section contact" id="contact" ref={ref}>
//       <div className="container">
//         <div className="contact-grid">
//           <div className="reveal">
//             <p className="sec-label">Get In Touch</p>
//             <h2 className="sec-title">
//               Let&apos;s Start Your <em>Growth Journey</em>
//             </h2>
//             <p className="sec-body" style={{ marginBottom: "2rem" }}>
//               Book a free consultation and discover exactly how SySpree can
//               help you acquire the right clients, at the right price, with the
//               right results.
//             </p>

//             {submitted ? (
//               <div style={{
//                 background: "var(--orange-light)", border: "2px solid var(--orange)",
//                 borderRadius: "12px", padding: "1.5rem 2rem", color: "var(--dark)",
//                 fontWeight: 600,
//               }}>
//                 ✅ Thank you, {form.name}! We&apos;ll reach out within 24 hours.
//               </div>
//             ) : (
//               <div className="contact-form">
//                 <input
//                   type="text"
//                   placeholder="Your Full Name *"
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your Email Address *"
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   value={form.phone}
//                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                 />
//                 <textarea
//                   placeholder="Tell us about your business and goals..."
//                   value={form.message}
//                   onChange={(e) => setForm({ ...form, message: e.target.value })}
//                 />
//                 <button
//                   className="btn-orange contact-submit"
//                   onClick={handleSubmit}
//                 >
//                   Book Free Consultation →
//                 </button>
//               </div>
//             )}
//           </div>

//           <div className="contact-info reveal reveal-delay-2">
//             <div className="office">
//               <h4>🇮🇳 India — Head Office</h4>
//               <p>
//                 1101 B, A-Wing, Dev Corpora,<br />
//                 Eastern Express Hwy, Cadbury Junction,<br />
//                 Khopat, Thane West – 400601<br />
//                 <a href="tel:+912262139090">+91 22 6213 9090</a>
//               </p>
//             </div>
//             <div className="contact-divider" />
//             <div className="office">
//               <h4>🇦🇪 UAE — Dubai</h4>
//               <p>
//                 Business Bay, Dubai, United Arab Emirates<br />
//                 <a href="tel:+97145864040">+971 4 586 4040</a>
//               </p>
//             </div>
//             <div className="contact-divider" />
//             <div className="office">
//               <h4>🇦🇺 Australia</h4>
//               <p>
//                 Sydney, New South Wales, Australia<br />
//                 <a href="tel:+611300SYSPREE">+61 1300 SYSPREE</a>
//               </p>
//             </div>
//             <div className="contact-divider" />
//             <div className="office">
//               <h4>📧 Email</h4>
//               <p>
//                 <a href="mailto:info@syspree.com">info@syspree.com</a><br />
//                 <a href="mailto:support@syspree.com">support@syspree.com</a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState, useRef, useEffect } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = () => {
    if (form.name && form.email) setSubmitted(true);
  };

  return (
    <section className="contact-sec" id="contact" ref={ref}>
      <div className="container">
        {/* Top heading */}
        <div className="contact-head reveal">
          <p className="contact-eyebrow">Contact Us</p>
          <h2 className="contact-title">
            <span style={{ color: "var(--orange)" }}>Get in Touch</span>
          </h2>
        </div>

        <div className="contact-layout">
          {/* LEFT: Form */}
          <div className="contact-form-col reveal">
            {submitted ? (
              <div className="contact-success">
                ✅ Thank you, {form.name}! We&apos;ll reach out within 24 hours.
              </div>
            ) : (
              <div className="contact-form">
                <input type="text" placeholder="Your Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input type="email" placeholder="Your Email Address *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                <textarea placeholder="Tell us about your business and goals..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                <button className="btn-orange contact-submit" onClick={handleSubmit}>
                  Get in Touch
                </button>
              </div>
            )}
          </div>

          {/* RIGHT: Office addresses */}
          <div className="contact-offices reveal reveal-delay-2">

            {/* Singapore */}
            <div className="office-block">
              <h3 className="office-title">Singapore Office:</h3>
              <div className="office-row">
                <span className="office-icon">📞</span>
                <span>+65 8900 0811</span>
              </div>
              <div className="office-divider" />
              <div className="office-row">
                <span className="office-icon">🗺️</span>
                <span>
                  SYSPREE DIGITAL PTE LTD.<br />
                  7 Temasek Boulevard, #12-07 Suntec Tower<br />
                  One, Singapore, 038987
                </span>
              </div>
              <div className="office-divider" />
              <div className="office-row">
                <span className="office-icon">⊙</span>
                <span>UEN : 201931082K</span>
              </div>
              <div className="office-orange-bar" />
            </div>

            {/* UAE */}
            <div className="office-block">
              <h3 className="office-title">United Arab Emirates (UAE):</h3>
              <div className="office-row">
                <span className="office-icon">📞</span>
                <span>
                  +971 48714592<br />
                  +971 505312199
                </span>
              </div>
              <div className="office-divider" />
              <div className="office-row">
                <span className="office-icon">🗺️</span>
                <span>
                  SySpree Digital<br />
                  Aspect Tower 1005 A office no.<br />
                  Business Bay, UAE
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="office-block">
              <h3 className="office-title">Email:</h3>
              <div className="office-row">
                <span className="office-icon">✉️</span>
                <a href="mailto:contactus@syspree.com">contactus@syspree.com</a>
              </div>
            </div>

            {/* India */}
            <div className="office-block">
              <h3 className="office-title">India office:</h3>
              <div className="office-row">
                <span className="office-icon">📞</span>
                <a href="tel:+918652398888">+91 8652398888</a>
              </div>
              <div className="office-divider" />
              <div className="office-row">
                <span className="office-icon">📞</span>
                <span>
                  +91 22 41275220,<br />
                  +91 2246048068
                </span>
              </div>
              <div className="office-divider" />
              <div className="office-row">
                <span className="office-icon">🗺️</span>
                <span>
                  SYSPREE DIGITAL PVT LTD.<br />
                  1101- B, 11th Floor,<br />
                  Dev Corpora, &apos;A&apos; wing,<br />
                  Eastern Express Highway,<br />
                  Cadbury Junction,<br />
                  Thane (W), Mumbai,<br />
                  Maharashtra 400601, India.
                </span>
              </div>
              <div className="office-divider" />
              <div className="office-row">
                <span className="office-icon">⊙</span>
                <span>
                  (CIN) : U72900MH2021FTC372638<br />
                  GSTIN : 27ABHCS6321H1Z9
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}