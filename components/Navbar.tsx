"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const NAV_LINKS = [
  {
    label: "About Us",
    href: "https://syspree.com/about-us/",
    children: [
      { label: "Our Team", href: "https://syspree.com/our-team/" },
      { label: "Careers", href: "https://careers.syspree.com/jobs/" },
    ],
  },
  {
    label: "Services",
    href: "https://syspree.com/services/",
    children: [
      { label: "Web Design & Development", href: "https://syspree.com/services/web-design-development/" },
      { label: "Digital Marketing", href: "https://syspree.com/services/digital-marketing/" },
      { label: "AI Marketing", href: "https://syspree.com/services/ai-marketing/" },
      { label: "Information Technology", href: "https://syspree.com/services/information-technology/" },
      { label: "Outsourcing", href: "https://syspree.com/services/outsourcing/" },
    ],
  },
  {
    label: "Industries",
    href: "https://syspree.com/industries/",
    children: [
      { label: "E-commerce", href: "https://syspree.com/industries/e-commerce-industry/" },
      { label: "Technology & SaaS", href: "https://syspree.com/industries/technology-and-saas/" },
      { label: "Consulting & Corporate", href: "https://syspree.com/industries/consulting/" },
      { label: "Education & Training", href: "https://syspree.com/industries/education-marketing/" },
      { label: "Healthcare", href: "https://syspree.com/industries/healthcare/" },
      { label: "Interior Designers", href: "https://syspree.com/industries/interiors/" },
      { label: "Travel & Tourism", href: "https://syspree.com/industries/travel/" },
      { label: "Hospitality & FnB", href: "https://syspree.com/industries/hospitality/" },
    ],
  },
  {
    label: "Locations",
    href: "https://syspree.com/locations/",
    children: [
      { label: "India", href: "https://syspree.com/locations/india/" },
      { label: "UAE", href: "https://syspree.com/locations/uae/" },
      { label: "Australia", href: "https://syspree.com/locations/australia/" },
      { label: "UK", href: "https://syspree.com/locations/uk/" },
      { label: "USA", href: "https://syspree.com/locations/usa/" },
      { label: "Singapore", href: "https://syspree.com/locations/singapore/" },
    ],
  },
  {
    label: "Óur Works",
    href: "https://syspree.com/portfolio/",
    children: [
      { label: "Testimonials", href: "https://syspree.com/testimonials/" },
      { label: "Case Studies", href: "https://syspree.com/case-studies/" },
    ],
  },
  { label: "Blog", href: "https://syspree.com/blog/" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <a href="https://syspree.com/" className="nav-logo-img">
        <Image
          src="https://syspree.com/wp-content/uploads/2024/04/logosyspree.png"
          alt="Syspree"
          width={131}
          height={63}
          priority
          unoptimized
          style={{ height: "42px", width: "auto" }}
        />
      </a>

      <ul className={`nav-links${open ? " open" : ""}`}>
        <li>
          <a href="https://syspree.com/" className="active">Home</a>
        </li>
        {NAV_LINKS.map((link) => (
          <li
            key={link.label}
            className={link.children ? "has-dropdown" : ""}
            onMouseEnter={() => link.children && handleMouseEnter(link.label)}
            onMouseLeave={handleMouseLeave}
          >
            <a href={link.href} onClick={() => setOpen(false)}>
              {link.label}
              {link.children && <span className="arrow">▾</span>}
            </a>
            {link.children && activeDropdown === link.label && (
              <ul className="dropdown">
                {link.children.map((child) => (
                  <li key={child.label}>
                    <a href={child.href}>{child.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
            Book Free Consultation
          </a>
        </li>
      </ul>

      <button
        className="hamburger"
        aria-label="Toggle navigation"
        onClick={() => setOpen((p) => !p)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}