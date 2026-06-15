"use client";
import { useEffect, useRef } from "react";

const LOCATIONS = [
  {
    name: "India", href: "https://syspree.com/locations/india/", orange: true,
    cities: [
      { name: "Mumbai", href: "https://syspree.com/locations/mumbai/" },
      { name: "Bengaluru", href: "https://syspree.com/locations/bengaluru/" },
      { name: "Delhi NCR", href: "https://syspree.com/locations/delhi-ncr/" },
      { name: "Chennai", href: "https://syspree.com/locations/chennai/" },
      { name: "Hyderabad", href: "https://syspree.com/locations/hyderabad/" },
      { name: "Pune", href: "https://syspree.com/locations/pune/" },
      { name: "Surat", href: "https://syspree.com/locations/surat/" },
      { name: "Ahmedabad", href: "https://syspree.com/locations/ahmedabad/" },
      { name: "Goa", href: "https://syspree.com/locations/goa/" },
    ],
  },
  {
    name: "Australia", href: "https://syspree.com/locations/australia/", orange: true,
    cities: [
      { name: "Brisbane", href: "https://syspree.com/locations/brisbane/" },
      { name: "Adelaide", href: "https://syspree.com/locations/adelaide/" },
      { name: "Gold Coast", href: "https://syspree.com/locations/gold-coast/" },
      { name: "Canberra", href: "https://syspree.com/locations/canberra/" },
      { name: "Perth", href: "https://syspree.com/locations/perth/" },
      { name: "Sydney", href: "https://syspree.com/locations/sydney/" },
      { name: "Melbourne", href: "https://syspree.com/locations/melbourne/" },
    ],
  },
  {
    name: "USA", href: "https://syspree.com/locations/usa/", orange: true,
    cities: [
      { name: "New York", href: "https://syspree.com/locations/new-york-city/" },
      { name: "San Francisco", href: "https://syspree.com/locations/san-francisco" },
      { name: "Miami", href: "https://syspree.com/locations/miami/" },
      { name: "Chicago", href: "https://syspree.com/locations/chicago/" },
      { name: "Los Angeles", href: "https://syspree.com/locations/los-angeles/" },
    ],
  },
  {
    name: "UAE", href: "https://syspree.com/locations/uae/", orange: true,
    cities: [
      { name: "Dubai", href: "https://syspree.com/locations/dubai/" },
      { name: "Ras Al Khaimah", href: "https://syspree.com/locations/ras-al-khaimah/" },
      { name: "Ajman", href: "https://syspree.com/locations/ajman/" },
      { name: "Sharjah", href: "https://syspree.com/locations/sharjah/" },
      { name: "Abu Dhabi", href: "https://syspree.com/locations/abu-dhabi/" },
    ],
  },
  {
    name: "UK", href: "https://syspree.com/locations/uk/", orange: true,
    cities: [
      { name: "London", href: "https://syspree.com/locations/london/" },
      { name: "Leeds", href: "https://syspree.com/locations/leeds/" },
      { name: "Birmingham", href: "https://syspree.com/locations/birmingham/" },
      { name: "Glasgow", href: "https://syspree.com/locations/glasgow/" },
      { name: "Edinburgh", href: "https://syspree.com/locations/edinburgh/" },
    ],
  },
  {
    name: "Singapore", href: "https://syspree.com/locations/singapore/", orange: false,
    cities: [
      { name: "Oman", href: "https://syspree.com/locations/oman/", orange: true },
      { name: "Saudi", href: "https://syspree.com/locations/saudi/", orange: true },
      { name: "Newzealand", href: "https://syspree.com/locations/newzealand/", orange: true },
      { name: "Africa", href: "https://syspree.com/locations/africa/", orange: true },
      { name: "Europe", href: "https://syspree.com/locations/europe/", orange: true },
    ],
  },
  {
    name: "Bahrain", href: "https://syspree.com/locations/bahrain/", orange: false,
    cities: [
      { name: "Kuwait", href: "https://syspree.com/locations/kuwait/", orange: false },
      { name: "Thailand", href: "https://syspree.com/locations/thailand/", orange: false },
      { name: "Philippines", href: "https://syspree.com/locations/philippines/", orange: false },
      { name: "Canada", href: "https://syspree.com/locations/canada/", orange: false },
      { name: "Malaysia", href: "https://syspree.com/locations/malaysia/", orange: false },
    ],
  },
];

export default function Locations() {
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
    <section className="locations-sec" ref={ref}>
      <div className="container">
        <div className="locations-grid reveal">
          {LOCATIONS.map((col) => (
            <div className="loc-col" key={col.name}>
              <a
                href={col.href}
                className={`loc-country${col.orange === false ? " loc-country-orange" : ""}`}
                target="_blank" rel="noopener noreferrer"
              >
                {col.name}
              </a>
              <ul className="loc-cities">
                {col.cities.map((city: { name: string; href: string; orange?: boolean }) => (
                  <li key={city.name}>
                    <a
                      href={city.href}
                      className={city.orange ? "loc-city-orange" : ""}
                      target="_blank" rel="noopener noreferrer"
                    >
                      {city.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}