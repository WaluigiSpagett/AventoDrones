# Avento Drones | Aerial Cinematography & UAV Photography

Welcome to the official repository for **Avento Drones**, a premium, high-performance website for professional UAV photography and aerial cinematography services based in the UK.

---

## ⚡ Tech Stack & Architecture

- **Frontend Core**: Semantic HTML5 structure with responsive multi-page architecture (`index.html`, `pricing.html`, `portfolio.html`, `projects/*.html`).
- **Styling Engine**: [Tailwind CSS](https://tailwindcss.com) combined with custom glassmorphic utilities and earthy design system tokens (`#f3f2ed` sand background, `#D4AF37` gold accent).
- **Typography & Icons**: Google Fonts (**Chivo** display headlines, **Inter** body copy, **JetBrains Mono** telemetry labels) & Google Material Symbols.
- **Interactivity**: Lightweight Vanilla JS powering responsive mobile drawer navigation, category filtering, interactive 4-photo lightbox viewers, sticky scroll transitions, and booking inquiries.
- **Asset Optimization**: High-performance `.webp` image assets in `/images` configured with lazy loading (`loading="lazy"`) to maximize LCP and page speed.
- **Deployment**: Automated Git-based CI/CD via **GitHub Pages** with custom domain routing to `aventodrones.co.uk` via root `CNAME`.

---

## 📁 Repository Structure

```txt
├── .github/workflows/nextjs.yml  # Automatic GitHub Pages Deploy Action (Static upload)
├── images/                       # WebP assets, logos, and project media
│   └── projects/                 # Portfolio showcase images (4 photos per project)
├── index.html                    # Root Home Page
├── pricing.html                  # Services & Transparent Pricing Page
├── portfolio.html                # Portfolio Discovery Page (Interactive Category Filter Grid)
├── projects/                     # Dedicated Individual Project Pages
│   ├── borgwarner.html           # BorgWarner Technical Center
│   ├── north-park-grove.html     # 2 North Park Grove Residence
│   ├── omega-stone.html          # Omega Stone Headquarters
│   └── springfield-building.html # Springfield New Building Development
├── CNAME                         # Custom Domain configuration (aventodrones.co.uk)
├── README.md                     # Documentation
└── renovate.json                 # Automatic dependency updates
```

---

## 🎨 Portfolio & Individual Project System

1. **Portfolio Discovery (`portfolio.html`)**:
   - Interactive category filters (**All**, **Commercial Facilities**, **Luxury Real Estate**, **Structural Inspection**).
   - Rich hover card previews showing project title, category tag, and site details.
2. **Individual Project Pages (`projects/[slug].html`)**:
   - **4-Photo Gallery Grid** with full-screen interactive lightbox viewer.
   - Project specs breakdown (Category, Deliverables, Location, Pilot Qualifications).
   - Mission Overview & Scope summary.
   - Direct "Book Similar Shoot" CTA.
   - Previous / Next project pagination links.

---

## 🛠️ Local Development

Since the website is static HTML5/CSS, no build process or package installation is required:

- Open `index.html` or `portfolio.html` directly in any web browser.
- Or launch a local live server (e.g. VS Code Live Server or Python `python3 -m http.server 8000`).
