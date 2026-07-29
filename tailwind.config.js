/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./projects/*.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary-container": "#fed65b",
        "error": "#ba1a1a",
        "surface-dim": "#dadada",
        "surface-variant": "#e2e2e2",
        "surface-container-lowest": "#ffffff",
        "on-primary-fixed": "#1a1c1e",
        "primary": "#000101",
        "on-tertiary-fixed-variant": "#41474d",
        "inverse-primary": "#c6c6c9",
        "background": "#f3f2ed",
        "tertiary": "#000103",
        "on-surface": "#1a1c1c",
        "outline": "#75777a",
        "on-secondary": "#1a1c1c",
        "on-primary-fixed-variant": "#454749",
        "secondary": "#D4AF37",
        "error-container": "#ffdad6",
        "tertiary-fixed": "#dde3ea",
        "outline-variant": "#c5c6ca",
        "secondary-fixed": "#ffe088",
        "on-tertiary-fixed": "#161c21",
        "inverse-on-surface": "#f0f1f1",
        "on-error": "#ffffff",
        "on-primary-container": "#838486",
        "primary-container": "#1a1c1e",
        "surface-container-low": "#ebe9e0",
        "on-background": "#1a1c1c",
        "surface-container-highest": "#e2e2e2",
        "on-error-container": "#93000a",
        "secondary-fixed-dim": "#e9c349",
        "on-surface-variant": "#44474a",
        "on-tertiary": "#ffffff",
        "surface-container-high": "#e8e8e8",
        "surface-tint": "#5d5e61",
        "on-secondary-container": "#745c00",
        "tertiary-fixed-dim": "#c1c7ce",
        "on-primary": "#ffffff",
        "surface-container": "#e6e3da",
        "tertiary-container": "#171d22",
        "primary-fixed": "#e2e2e5",
        "primary-fixed-dim": "#c6c6c9",
        "surface": "#f3f2ed",
        "inverse-surface": "#2f3131",
        "surface-bright": "#f3f2ed",
        "on-tertiary-container": "#7f858b",
        "on-secondary-fixed": "#241a00",
        "on-secondary-fixed-variant": "#574500"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "lg": "40px",
        "margin-desktop": "48px",
        "xs": "8px",
        "xl": "64px",
        "sm": "16px",
        "md": "24px",
        "gutter": "24px",
        "base": "4px",
        "margin-mobile": "16px"
      },
      fontFamily: {
        "body-lg": ["Inter", "sans-serif"],
        "label-md": ["JetBrains Mono", "monospace"],
        "headline-md": ["Chivo", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-lg": ["Chivo", "sans-serif"],
        "display-lg-mobile": ["Chivo", "sans-serif"],
        "display-lg": ["Chivo", "sans-serif"]
      },
      fontSize: {
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "label-md": ["13px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500" }],
        "headline-md": ["24px", { "lineHeight": "1.4", "fontWeight": "600" }],
        "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }],
        "headline-lg": ["32px", { "lineHeight": "1.3", "fontWeight": "600" }],
        "display-lg-mobile": ["40px", { "lineHeight": "1.2", "fontWeight": "700" }],
        "display-lg": ["64px", { "lineHeight": "-0.02em", "fontWeight": "700" }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ]
}
