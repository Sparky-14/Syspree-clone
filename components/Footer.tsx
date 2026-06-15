// const QUICK_LINKS = ["Blog", "About Us", "Careers", "Contact Us", "Case Studies", "Privacy Policy", "Terms and Conditions"];
// const SERVICE_LINKS = ["Web Design & Development", "Digital Marketing", "AI Marketing", "Information Technology", "Outsourcing"];
// const INDUSTRY_LINKS = ["E-commerce", "Technology & SaaS", "Consulting", "Education & Training", "Healthcare", "Interior Designers", "Travel & Tourism", "Hospitality & FnB"];
// const SOCIALS = [
//   { label: "Facebook", short: "f" },
//   { label: "LinkedIn", short: "in" },
//   { label: "Instagram", short: "ig" },
//   { label: "X / Twitter", short: "𝕏" },
// ];

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-top">
//         <div>
//           <span className="footer-brand-logo">Sy<span>spree</span></span>
//           <p className="footer-desc">
//             A powerhouse of digital success specializing in high-impact digital
//             marketing, web development, and AI-driven marketing solutions
//             designed to drive revenue and maximize ROI.
//           </p>
//           <div className="socials">
//             {SOCIALS.map((s) => (
//               <a href="#" className="social-link" key={s.label} aria-label={s.label}>
//                 {s.short}
//               </a>
//             ))}
//           </div>
//         </div>

//         <div className="footer-col">
//           <h4>Quick Links</h4>
//           <ul>{QUICK_LINKS.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
//         </div>

//         <div className="footer-col">
//           <h4>Services</h4>
//           <ul>{SERVICE_LINKS.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
//         </div>

//         <div className="footer-col">
//           <h4>Industries</h4>
//           <ul>{INDUSTRY_LINKS.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <span>© 2014 – 2026 · SySpree.Com · All Rights Reserved</span>
//         <span className="footer-policies">
//           <a href="#">Privacy Policy</a>
//           <a href="#">Terms &amp; Conditions</a>
//           <a href="#">Posh Policies</a>
//         </span>
//       </div>
//     </footer>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";

/* ── data ── */
const QUICK_LINKS = [
  { label: "Blogs", href: "https://syspree.com/blog/" },
  { label: "About Us", href: "https://syspree.com/about-us/" },
  { label: "Careers", href: "https://careers.syspree.com/jobs/" },
  { label: "Contact Us", href: "https://syspree.com/contact/" },
  {
    label: "Case Studies", href: "#",
    children: [
      { label: "Sports Coaching Company", href: "https://syspree.com/case-studies/case-study-digital-marketing-for-sports/" },
      { label: "Immigration Company", href: "https://syspree.com/case-studies/case-study-digital-marketing-for-oracle/" },
      { label: "FMCG Distributors", href: "https://syspree.com/case-studies/case-study-digital-fmcg-marketing-for-fmcg-products/" },
      { label: "Decking and Patio Company", href: "https://syspree.com/case-studies/case-study-digital-marketing-for-decking/" },
      { label: "Accountants and Corporate Services", href: "https://syspree.com/case-studies/case-study-digital-marketing-for-accounting-leads/" },
    ],
  },
  {
    label: "Policies", href: "#",
    children: [
      { label: "Privacy Policy", href: "https://syspree.com/privacy-policy/" },
      { label: "Terms and Conditions", href: "https://syspree.com/terms-conditions/" },
      { label: "Posh Policies", href: "https://syspree.com/posh-policy/" },
    ],
  },
];

const SERVICES = [
  { label: "Web Design And Development", href: "https://syspree.com/services/web-design-development/" },
  { label: "Digital Marketing", href: "https://syspree.com/services/digital-marketing" },
  { label: "Artificial Intelligence", href: "https://syspree.com/services/ai-marketing/" },
  { label: "Information Technology", href: "https://syspree.com/services/information-technology/" },
  { label: "Outsourcing", href: "https://syspree.com/services/outsourcing/" },
];

const INDUSTRIES = [
  { label: "E-commerce", href: "https://syspree.com/industries/e-commerce-industry/" },
  { label: "Technology and SaaS", href: "https://syspree.com/industries/technology-and-saas/" },
  { label: "Consulting and Corporate Services", href: "https://syspree.com/industries/consulting/" },
  { label: "Education and Training", href: "https://syspree.com/industries/education-marketing/" },
  { label: "Healthcare", href: "https://syspree.com/industries/healthcare/" },
  { label: "Interior Designers and Renovators", href: "https://syspree.com/industries/interiors/" },
  { label: "Travel and Tourism", href: "https://syspree.com/industries/travel/" },
  { label: "Hospitality and FnB", href: "https://syspree.com/industries/hospitality/" },
];

const LOCATIONS = [
  {
    label: "India", href: "https://syspree.com/locations/india/",
    children: [
      { label: "Mumbai", href: "https://syspree.com/locations/mumbai/" },
      { label: "Delhi NCR", href: "https://syspree.com/locations/delhi-ncr/" },
      { label: "Bengaluru", href: "https://syspree.com/locations/bengaluru/" },
      { label: "Chennai", href: "https://syspree.com/locations/chennai/" },
      { label: "Hyderabad", href: "https://syspree.com/locations/hyderabad/" },
      { label: "Pune", href: "https://syspree.com/locations/pune/" },
      { label: "Surat", href: "https://syspree.com/locations/surat/" },
      { label: "Ahmedabad", href: "https://syspree.com/locations/ahmedabad/" },
      { label: "Goa", href: "https://syspree.com/locations/goa/" },
    ],
  },
  { label: "Singapore", href: "https://syspree.com/locations/singapore/" },
  {
    label: "Australia", href: "https://syspree.com/locations/australia/",
    children: [
      { label: "Brisbane", href: "https://syspree.com/locations/brisbane/" },
      { label: "Gold coast", href: "https://syspree.com/locations/gold-coast/" },
      { label: "Adelaide", href: "https://syspree.com/locations/adelaide/" },
      { label: "Canberra", href: "https://syspree.com/locations/canberra/" },
      { label: "Perth", href: "https://syspree.com/locations/perth/" },
      { label: "Sydney", href: "https://syspree.com/locations/sydney/" },
      { label: "Melbourne", href: "https://syspree.com/locations/melbourne/" },
    ],
  },
  {
    label: "USA", href: "https://syspree.com/locations/usa/",
    children: [
      { label: "New York", href: "https://syspree.com/locations/new-york-city/" },
      { label: "Los Angeles", href: "https://syspree.com/locations/los-angeles/" },
      { label: "Chicago", href: "https://syspree.com/locations/chicago/" },
      { label: "Miami", href: "https://syspree.com/locations/miami/" },
      { label: "San Francisco", href: "https://syspree.com/locations/san-francisco/" },
    ],
  },
  {
    label: "Europe", href: "https://syspree.com/locations/europe/",
    children: [
      { label: "France", href: "https://syspree.com/locations/france/" },
      { label: "Belgium", href: "https://syspree.com/locations/belgium/" },
      { label: "Ireland", href: "https://syspree.com/locations/ireland/" },
      { label: "Germany", href: "https://syspree.com/locations/germany/" },
      { label: "Portugal", href: "https://syspree.com/locations/portugal/" },
      { label: "Poland", href: "https://syspree.com/locations/poland/" },
      { label: "UK", href: "https://syspree.com/locations/uk/",
        sub: [
          { label: "Birmingham", href: "https://syspree.com/locations/birmingham/" },
          { label: "Edinburgh", href: "https://syspree.com/locations/edinburgh/" },
          { label: "Leeds", href: "https://syspree.com/locations/leeds/" },
          { label: "Glasgow", href: "https://syspree.com/locations/glasgow/" },
          { label: "London", href: "https://syspree.com/locations/london/" },
          { label: "Manchester", href: "https://syspree.com/locations/manchester/" },
        ]
      },
    ],
  },
  {
    label: "Middle East", href: "https://syspree.com/locations/middle-east/",
    children: [
      { label: "Oman", href: "https://syspree.com/locations/oman/" },
      { label: "Saudi Arabia", href: "https://syspree.com/locations/saudi-arabia/" },
      { label: "UAE", href: "https://syspree.com/locations/uae/" },
      { label: "Kuwait", href: "https://syspree.com/locations/kuwait/" },
      { label: "Bahrain", href: "https://syspree.com/locations/bahrain/" },
    ],
  },
  {
    label: "Africa", href: "https://syspree.com/locations/africa/",
    children: [{ label: "Tanzania", href: "https://syspree.com/locations/tanzania/" }],
  },
  { label: "Thailand", href: "https://syspree.com/locations/thailand/" },
  { label: "Philippines", href: "https://syspree.com/locations/philippines/" },
  { label: "Canada", href: "https://syspree.com/locations/canada/" },
  { label: "Sri Lanka", href: "https://syspree.com/locations/sri-lanka/" },
  { label: "Malaysia", href: "https://syspree.com/locations/malaysia/" },
  { label: "New Zealand", href: "https://syspree.com/locations/newzealand/" },
];

/* ── accordion item ── */
type NavItem = { label: string; href: string; children?: { label: string; href: string; sub?: { label: string; href: string }[] }[] };

function AccordionItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  return (
    <li className="ft-acc-item">
      <div className="ft-acc-row">
        <a href={item.href} className="ft-acc-label" target="_blank" rel="noopener noreferrer">{item.label}</a>
        {hasChildren && (
          <button className="ft-acc-toggle" onClick={() => setOpen(!open)} aria-label="toggle">
            {open ? "▲" : "▾"}
          </button>
        )}
      </div>
      {hasChildren && open && (
        <ul className="ft-acc-children">
          {item.children!.map((c) => (
            <li key={c.label}>
              <a href={c.href} target="_blank" rel="noopener noreferrer">{c.label}</a>
              {"sub" in c && c.sub && (
                <ul className="ft-acc-sub">
                  {(c.sub as {label:string;href:string}[]).map((s) => (
                    <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="ft-root">
      <div className="ft-grid">

        {/* ── Col 1: Brand ── */}
        <div className="ft-brand">
          <a href="https://syspree.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://syspree.com/wp-content/uploads/2024/04/logosyspree.png"
              alt="Syspree" width={131} height={63} unoptimized
              style={{ width: "130px", height: "auto", display: "block", marginBottom: "1.5rem" }}
            />
          </a>

          <p className="ft-col-head">Socials</p>
          <div className="ft-socials">
            <a href="https://www.facebook.com/Syspree/" className="ft-social" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/syspree/" className="ft-social" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/></svg>
            </a>
            <a href="https://in.linkedin.com/company/syspreedigital" className="ft-social" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://x.com/SySpree" className="ft-social" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>

          <p className="ft-col-head" style={{marginTop:"1.5rem"}}>Payments</p>
          <div className="ft-payments">
            <Image src="https://syspree.com/wp-content/uploads/2024/08/Footer-logos-1.png" alt="Payment methods" width={251} height={76} unoptimized style={{width:"180px",height:"auto"}}/>
            <Image src="https://syspree.com/wp-content/uploads/2024/08/Footer-logos-2.png" alt="Payment methods" width={251} height={76} unoptimized style={{width:"180px",height:"auto"}}/>
          </div>

          <a href="https://syspree.com/contact/" className="ft-pay-btn" target="_blank" rel="noopener noreferrer">Pay Here</a>

          <div style={{marginTop:"1.25rem"}}>
            <Image
              src="https://threebestrated.in/awards/web_designers-thane-2026-drk.svg"
              alt="Best Web designers in Thane"
              width={100} height={100} unoptimized
              style={{width:"100px",height:"100px"}}
            />
          </div>
        </div>

        {/* ── Col 2: Quick Links ── */}
        <div className="ft-col">
          <p className="ft-col-head">QUICKLINKS</p>
          <ul className="ft-acc-list">
            {QUICK_LINKS.map((item) => <AccordionItem key={item.label} item={item} />)}
          </ul>
        </div>

        {/* ── Col 3: Services ── */}
        <div className="ft-col">
          <p className="ft-col-head">SERVICES</p>
          <ul className="ft-plain-list">
            {SERVICES.map((s) => (
              <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
            ))}
          </ul>
        </div>

        {/* ── Col 4: Industries ── */}
        <div className="ft-col">
          <p className="ft-col-head">INDUSTRIES</p>
          <ul className="ft-plain-list">
            {INDUSTRIES.map((ind) => (
              <li key={ind.label}><a href={ind.href} target="_blank" rel="noopener noreferrer">{ind.label}</a></li>
            ))}
          </ul>
        </div>

        {/* ── Col 5: Locations ── */}
        <div className="ft-col">
          <p className="ft-col-head">LOCATIONS</p>
          <ul className="ft-acc-list">
            {LOCATIONS.map((item) => <AccordionItem key={item.label} item={item as NavItem} />)}
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="ft-bottom">
        <p>© 2014 – 2026 · SySpree.Com · All Rights Reserved</p>
      </div>
    </footer>
  );
}