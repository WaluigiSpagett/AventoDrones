const plugin = require('tailwindcss/plugin');
const themeStyle = require('./content/data/style.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './content/**/*'],
    safelist: [
        'colors-a',
        'colors-b',
        'colors-c',
        'colors-d',
        'colors-e',
        'colors-f',
        {
            pattern: /(m|p)(t|b|l|r)-(0|px|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/
        }
    ],
    theme: {
        extend: {
            colors: {
                light: themeStyle.light,
                'on-light': themeStyle.onLight,
                dark: themeStyle.dark,
                'on-dark': themeStyle.onDark,
                complementary: themeStyle.complementary,
                'on-complementary': themeStyle.onComplementary,
                // --- Stitch Design System Colors ---
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
                "on-secondary": "#ffffff",
                "on-primary-fixed-variant": "#454749",
                "secondary": "#735c00",
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
                "on-secondary-fixed-variant": "#574500",
                "bone-white": "#F9F6EE",
                "metallic-gold": "#D4AF37"
            },
            spacing: {
                '1/1': '100%',
                '1/4': '25%',
                '2/3': '66.666%',
                '3/2': '150%',
                '3/4': '75%',
                '4/3': '133.333%',
                '9/16': '56.25%',
                "container-max": "1440px",
                "gutter": "24px",
                "margin-desktop": "48px",
                "xs": "8px",
                "xl": "64px",
                "sm": "16px",
                "md": "24px",
                "base": "4px",
                "margin-mobile": "16px"
            },
            borderRadius: {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            fontFamily: {
                fontPrimary: ['Chivo', 'sans-serif'],
                fontSecondary: ['Chivo', 'sans-serif'],
                fontMonospaced: ['JetBrains Mono', 'monospace'],
                mono: ['JetBrains Mono', 'monospace'],
                sans: ['Inter', 'sans-serif'],
                "body-lg": ["Inter"],
                "body-md": ["Inter"],
                "headline-md": ["Chivo"],
                "headline-lg": ["Chivo"],
                "display-lg-mobile": ["Chivo"],
                "display-lg": ["Chivo"],
                "label-md": ["JetBrains Mono"]
            },
            fontSize: {
                "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "label-md": ["13px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}],
                "headline-md": ["24px", {"lineHeight": "1.4", "fontWeight": "600"}],
                "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}],
                "headline-lg": ["32px", {"lineHeight": "1.3", "fontWeight": "600"}],
                "display-lg-mobile": ["40px", {"lineHeight": "1.2", "fontWeight": "700"}],
                "display-lg": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}]
            },
            letterSpacing: {
                wide: '.05em',
                wider: '.1em',
                widest: '.25em'
            },
            maxWidth: {
                'container-max': '1440px'
            }
        }
    },
    plugins: [
        plugin(function ({ addBase, addComponents, theme }) {
            const h1Size = themeStyle.h1.size;
            const adjustH1Size = ['6xl', '7xl', '8xl', '9xl'].includes(h1Size);
            const h2Size = themeStyle.h2.size;
            const adjustH2Size = ['5xl', '6xl', '7xl', '8xl', '9xl'].includes(h2Size);
            const h3Size = themeStyle.h3.size;
            const adjustH3Size = ['4xl', '5xl', '6xl', '7xl', '8xl', '9xl'].includes(h3Size);
            addBase({
                body: {
                    fontFamily: theme(`fontFamily.${themeStyle.fontBody}`)
                },
                'h1,.h1': {
                    ...(adjustH1Size && {
                        fontSize: theme('fontSize.5xl'),
                        '@media (min-width: 640px)': {
                            fontSize: theme(`fontSize.${h1Size}`)
                        }
                    }),
                    ...(!adjustH1Size && {
                        fontSize: theme(`fontSize.${h1Size}`)
                    }),
                    fontWeight: theme(`fontWeight.${themeStyle.h1.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.h1.letterSpacing}`),
                    textDecoration: themeStyle.h1.decoration,
                    textTransform: themeStyle.h1.case
                },
                h2: {
                    ...(adjustH2Size && {
                        fontSize: theme('fontSize.4xl'),
                        '@media (min-width: 640px)': {
                            fontSize: theme(`fontSize.${h2Size}`)
                        }
                    }),
                    ...(!adjustH2Size && {
                        fontSize: theme(`fontSize.${h2Size}`)
                    }),
                    fontWeight: theme(`fontWeight.${themeStyle.h2.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.h2.letterSpacing}`),
                    textDecoration: themeStyle.h2.decoration,
                    textTransform: themeStyle.h2.case
                },
                h3: {
                    ...(adjustH3Size && {
                        fontSize: theme('fontSize.3xl'),
                        '@media (min-width: 640px)': {
                            fontSize: theme(`fontSize.${h3Size}`)
                        }
                    }),
                    ...(!adjustH3Size && {
                        fontSize: theme(`fontSize.${h3Size}`)
                    }),
                    fontWeight: theme(`fontWeight.${themeStyle.h3.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.h3.letterSpacing}`),
                    textDecoration: themeStyle.h3.decoration,
                    textTransform: themeStyle.h3.case
                },
                h4: {
                    fontSize: theme(`fontSize.${themeStyle.h4.size}`),
                    fontWeight: theme(`fontWeight.${themeStyle.h4.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.h4.letterSpacing}`),
                    textDecoration: themeStyle.h4.decoration,
                    textTransform: themeStyle.h4.case
                },
                h5: {
                    fontSize: theme(`fontSize.${themeStyle.h5.size}`),
                    fontWeight: theme(`fontWeight.${themeStyle.h5.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.h5.letterSpacing}`),
                    textDecoration: themeStyle.h5.decoration,
                    textTransform: themeStyle.h5.case
                },
                h6: {
                    fontSize: theme(`fontSize.${themeStyle.h6.size}`),
                    fontWeight: theme(`fontWeight.${themeStyle.h6.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.h6.letterSpacing}`),
                    textDecoration: themeStyle.h6.decoration,
                    textTransform: themeStyle.h6.case
                }
            });
            addComponents({
                '.sb-component-button-primary': {
                    fontWeight: theme(`fontWeight.${themeStyle.buttonPrimary.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.buttonPrimary.letterSpacing}`),
                    padding: `${themeStyle.buttonPrimary.verticalPadding}px ${themeStyle.buttonPrimary.horizontalPadding}px`,
                    textTransform: themeStyle.buttonPrimary.case
                },
                '.sb-component-button-primary.sb-component-button-icon': {
                    padding: `${themeStyle.buttonPrimary.verticalPadding}px`
                },
                '.sb-component-button-secondary': {
                    fontWeight: theme(`fontWeight.${themeStyle.buttonSecondary.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.buttonSecondary.letterSpacing}`),
                    padding: `${themeStyle.buttonSecondary.verticalPadding}px ${themeStyle.buttonSecondary.horizontalPadding}px`,
                    textTransform: themeStyle.buttonSecondary.case
                },
                '.sb-component-button-secondary.sb-component-button-icon': {
                    padding: `${themeStyle.buttonSecondary.verticalPadding}px`
                },
                '.sb-component-link': {
                    fontWeight: theme(`fontWeight.${themeStyle.link.weight}`),
                    letterSpacing: theme(`letterSpacing.${themeStyle.link.letterSpacing}`),
                    textTransform: themeStyle.link.case
                }
            });
        })
    ]
};
