# Avento Drones | Aerial Cinematography & UAV Photography

Welcome to the official repository for **Avento Drones**, a premium, high-performance static website for professional UAV photography and aerial cinematography services based in the UK.

---

## ⚡ Tech Stack & Architecture

This website has been overhauled into an ultra-fast, zero-overhead **static HTML/CSS** site to guarantee instant load times and painless deployment.

- **Frontend Core**: Vanilla HTML5 structure.
- **Styling Engine**: [Tailwind CSS](https://tailwindcss.com) (compiled dynamically via high-performance CDN configuration).
- **Typography System**: Google Fonts integrations featuring **Chivo** (display headlines), **Inter** (body copy), and **JetBrains Mono** (telemetry labels).
- **Design Paradigm**: Wireframe earth-tones (Light Sand `#f3f2ed`) combined with modern CSS glassmorphism (`backdrop-filter`) and premium cell-grid slide-down hover animations.
- **Assets Engine**: High-resolution local image storage in `/images` configured with relative paths to avoid 404 errors on subpaths.
- **Deployment**: Automatic Git-based CI/CD via **GitHub Pages** (runs in under 10 seconds with zero-compilation build overhead).
- **Custom Domain**: Integrated mapped routing to `aventodrones.co.uk` via the root `CNAME` file.

---

## 📁 Repository Structure

```txt
├── .github/workflows/nextjs.yml  # Automatic GitHub Pages Deploy Action (Static upload)
├── images/                       # High-resolution drone assets, logos, and gallery clips
├── index.html                    # Root Home Page (Stitch Design System "Portfolio" screen)
├── CNAME                         # Custom Domain configuration (aventodrones.co.uk)
├── README.md                     # This documentation
├── .gitignore                    # Ignored local files
└── renovate.json                 # Automatic dependency updates
```

---

## 🎨 Integrating Google Stitch Web Pages

Because the project is 100% static HTML and CSS, adding new pages designed in **Google Stitch** is incredibly simple:

1. **Design your page** in Google Stitch.
2. **Export or curl the raw HTML file**.
3. **Plop it directly into the repository root** (e.g. `services.html`, `projects.html`, `about.html`).
4. **Copy any new assets** (images/videos) into the `images/` directory.
5. **Adjust the image source paths** in the curled HTML to relative local paths (e.g. `images/new_shot.jpg`).
6. **Commit & Push** your new file to the `main` branch. GitHub Pages will build and publish it instantly!

---

## 🛠️ Development & Local Viewing

Since the project contains no compilers, bundlers, or package installations, you do not need to run `npm install`.

- **Double-click `index.html`** to preview the site locally in any browser.
- Alternatively, run a lightweight live server extension in VS Code for instant reload capabilities.
