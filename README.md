# SySpree Homepage Clone — Next.js

A pixel-close clone of [syspree.com](https://syspree.com) built with **Next.js 16 + TypeScript + Tailwind CSS**.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 16 | React framework with App Router |
| TypeScript | Type safety |
| Tailwind CSS v4 | Utility-first CSS (via PostCSS plugin) |
| Custom CSS | Complex layout patterns, animations |
| Google Fonts | Inter + Playfair Display |

---

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Install & Run

```bash
# 1. Clone or unzip the project
cd syspree-home

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
syspree-home/
├── app/
│   ├── globals.css          # Design tokens + all CSS
│   ├── layout.tsx           # Root layout + metadata
│   └── page.tsx             # Homepage composition
├── components/
│   ├── Navbar.tsx           # Sticky nav with scroll shadow + mobile hamburger
│   ├── Hero.tsx             # Full-height hero with poll widget
│   ├── ClientsBand.tsx      # Trusted clients pill strip
│   ├── About.tsx            # About section + CORE visual grid
│   ├── CaseStudies.tsx      # 6-card case studies grid
│   ├── Services.tsx         # 5 service cards
│   ├── CtaStrip.tsx         # Dark CTA banner
│   ├── CoreFramework.tsx    # CORE framework 4-column section
│   ├── Industries.tsx       # 8 industry cards
│   ├── Media.tsx            # "As Featured In" media logos
│   ├── Achievements.tsx     # Animated counter stats (IntersectionObserver)
│   ├── GlobalPresence.tsx   # Country chips grid
│   ├── Testimonials.tsx     # 4 testimonial cards
│   ├── Blogs.tsx            # 6 blog post cards
│   ├── Contact.tsx          # Contact form + office addresses
│   └── Footer.tsx           # 4-column footer + social links
├── public/                  # Static assets (add real images here)
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs       # Tailwind CSS v4 PostCSS config
```

---

## Features Implemented

- ✅ Responsive (mobile / tablet / desktop breakpoints)
- ✅ Sticky navbar with scroll shadow + mobile hamburger menu
- ✅ Scroll-reveal animations (IntersectionObserver, `prefers-reduced-motion` safe)
- ✅ Animated stat counters on scroll into view
- ✅ Interactive poll widget with progress bars
- ✅ Hover states on all interactive elements
- ✅ Contact form with inline success state
- ✅ CSS design token system (orange, navy, grey palette)
- ✅ Inter + Playfair Display typography matching live site
- ✅ Modular, reusable components (FeatureCard pattern, TestimonialBlock, etc.)

---

## Adding Real Images

When you have the actual assets, swap placeholders in:

- `Hero.tsx` — replace `.hero-img-placeholder` with `<Image>` from `next/image`
- `CaseStudies.tsx` — replace `.case-thumb` backgrounds with real screenshots
- `Blogs.tsx` — replace `.blog-thumb` with featured images
- `Testimonials.tsx` — replace `.test-avatar` initials with real photos

All images go in `/public/` and reference as `/your-image.webp`.

---

## Deployment

### Vercel (recommended for Next.js)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the `.next` folder or use `next export` for static
```

---

## Notes

- No Figma design link was shared in the task, so this is based on the live [syspree.com](https://syspree.com) homepage as the reference.
- Placeholder content is used for images/dynamic sections as permitted by the task spec.
- Partner logos (Google Partner, Shopify, Razorpay, MSME) are text-based placeholders pending actual SVG/image assets.
