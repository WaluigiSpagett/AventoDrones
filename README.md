# Avento Drones | Aerial Cinematography & UAV Photography

Welcome to the official repository for **Avento Drones**, a premium, high-performance website for professional UAV photography and aerial cinematography services based in the UK.

---

## ⚡ Tech Stack & Architecture

- **Frontend Core**: Semantic HTML5 structure with responsive multi-page architecture (`index.html`, `pricing.html`).
- **Styling Engine**: [Tailwind CSS](https://tailwindcss.com) combined with custom glassmorphic utilities and earthy design system tokens (`#f3f2ed` sand background, `#D4AF37` gold accent).
- **Typography & Icons**: Google Fonts (**Chivo** display headlines, **Inter** body copy, **JetBrains Mono** telemetry labels) & Google Material Symbols.
- **Interactivity**: Lightweight Vanilla JS powering responsive mobile drawer navigation, sticky scroll transitions, accessible keyboard shortcuts, and interactive booking inquiries.
- **Asset Optimization**: High-performance `.webp` image assets in `/images` configured with lazy loading (`loading="lazy"`) to maximize LCP and page speed.
- **Deployment**: Automated Git-based CI/CD via **GitHub Pages** with custom domain routing to `aventodrones.co.uk` via root `CNAME`.

---

## 📁 Repository Structure

```txt
├── .github/workflows/nextjs.yml  # Automatic GitHub Pages Deploy Action (Static upload)
├── images/                       # Optimized WebP assets, logos, and high-res imagery
├── index.html                    # Root Home Page (Hero, Services, Portfolio, Projects, About, Booking Form)
├── pricing.html                  # Services & Transparent Pricing Page
├── CNAME                         # Custom Domain configuration (aventodrones.co.uk)
├── README.md                     # Documentation
└── renovate.json                 # Automatic dependency updates
```

---

## 🎨 Key Features & Navigation

1. **Mobile Drawer Navigation**: Slide-out responsive mobile navigation menu with backdrop blur and keyboard accessibility (`Esc` key close).
2. **Interactive Mission Booking Form**: Fully styled glassmorphism contact form at `#contact` for instant booking inquiries.
3. **Comprehensive Page Sections**:
   - `[ CAPABILITIES ]` Precision Services pricing cards.
   - `[ SELECTED WORKS ]` Bento grid project gallery.
   - `[ CASE STUDIES ]` Featured missions breakdown (`#projects`).
   - `[ OPERATOR CREDENTIALS ]` CAA Certification & safety credentials (`#about`).
   - `[ GET IN TOUCH ]` Interactive mission booking form (`#contact`).

---

## 🛠️ Local Development

Since the website is static HTML5/CSS, no build process or package installation is required:

- Open `index.html` directly in any web browser.
- Or launch a local live server (e.g. VS Code Live Server or Python `python3 -m http.server 8000`).
