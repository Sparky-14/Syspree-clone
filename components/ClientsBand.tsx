import Image from "next/image";

const CLIENTS = [
  { src: "https://syspree.com/wp-content/uploads/2024/10/HDB_Financial_Services_logo.svg.png", alt: "HDB Financial Services" },
  { src: "https://syspree.com/wp-content/uploads/2024/10/Onida_Electronics-01.png", alt: "Onida" },
  { src: "https://syspree.com/wp-content/uploads/2024/10/business-standard-logo.png", alt: "Business Standard" },
  { src: "https://syspree.com/wp-content/uploads/2024/10/Intel_logo_2023.png", alt: "Intel" },
  { src: "https://syspree.com/wp-content/uploads/2024/05/vihang.png", alt: "Vihang" },
  { src: "https://syspree.com/wp-content/uploads/2024/10/GreenTree-logo_1-Copy-copy.png", alt: "GreenTree" },
  { src: "https://syspree.com/wp-content/uploads/2024/10/tro-2.png", alt: "TRO" },
  { src: "https://syspree.com/wp-content/uploads/2024/05/Pragati.png", alt: "Pragati" },
  { src: "https://syspree.com/wp-content/uploads/2024/05/Dhyana-Dubai.png", alt: "Dhyana Dubai" },
  { src: "https://syspree.com/wp-content/uploads/2024/10/Elan.png", alt: "Elan" },
];

export default function ClientsBand() {
  // Duplicate logos so marquee loops seamlessly
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <div className="clients-band">
      <p className="clients-band-label">
        TRUSTED BY 1,000+ BRANDS AS THEIR PREFERRED DIGITAL MARKETING AGENCY IN MUMBAI. CHOSEN FOR ONE REASON: RESULTS.
      </p>
      <div className="marquee-outer">
        <div className="marquee-track">
          {doubled.map((c, i) => (
            <div className="marquee-item" key={`${c.alt}-${i}`}>
              <Image
                src={c.src}
                alt={c.alt}
                width={140}
                height={55}
                unoptimized
                style={{ objectFit: "contain", filter: "grayscale(1)", opacity: 0.65 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}