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
                // --- Dark Gold & Obsidian Template Colors ---
                "outline": "#99907c",
                "on-primary": "#3c2f00",
                "on-surface": "#e2e2e2",
                "tertiary": "#cecece",
                "on-background": "#e2e2e2",
                "on-error-container": "#ffdad6",
                "tertiary-fixed-dim": "#c6c6c7",
                "surface-container-low": "#1b1b1b",
                "on-secondary-fixed-variant": "#474741",
                "secondary-fixed": "#e5e2db",
                "on-tertiary-container": "#434546",
                "primary-fixed": "#ffe088",
                "on-primary-container": "#554300",
                "on-secondary-fixed": "#1c1c17",
                "tertiary-container": "#b2b3b3",
                "surface-variant": "#353535",
                "on-secondary-container": "#b7b5ae",
                "on-error": "#690005",
                "surface-container-lowest": "#0e0e0e",
                "obsidian": "#000000",
                "primary": "#f2ca50",
                "secondary": "#c9c6bf",
                "on-secondary": "#31312b",
                "on-surface-variant": "#d0c5af",
                "on-tertiary-fixed-variant": "#454747",
                "error-container": "#93000a",
                "on-primary-fixed-variant": "#574500",
                "surface-container": "#1f1f1f",
                "tertiary-fixed": "#e2e2e2",
                "surface-container-high": "#2a2a2a",
                "error": "#ffb4ab",
                "surface-tint": "#e9c349",
                "on-tertiary": "#2f3131",
                "primary-fixed-dim": "#e9c349",
                "secondary-container": "#474741",
                "outline-variant": "#4d4635",
                "secondary-fixed-dim": "#c9c6bf",
                "surface-container-highest": "#353535",
                "surface": "#131313",
                "metallic-gold": "#D4AF37",
                "inverse-primary": "#735c00",
                "primary-container": "#d4af37",
                "surface-bright": "#393939",
                "surface-dim": "#131313",
                "bone-white": "#F9F6EE",
                "on-tertiary-fixed": "#1a1c1c",
                "inverse-on-surface": "#303030",
                "on-primary-fixed": "#241a00",
                "background": "#131313",
                "inverse-surface": "#e2e2e2"
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
                "margin-desktop": "80px",
                "unit": "8px",
                "margin-mobile": "20px"
            },
            borderRadius: {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            fontFamily: {
                fontPrimary: ['Manrope', 'sans-serif'],
                fontSecondary: ['Manrope', 'sans-serif'],
                fontMonospaced: ['JetBrains Mono', 'monospace'],
                mono: ['JetBrains Mono', 'monospace'],
                sans: ['Manrope', 'sans-serif'],
                "body-lg": ["Manrope"],
                "body-md": ["Manrope"],
                "headline-md": ["Manrope"],
                "headline-lg": ["Manrope"],
                "headline-lg-mobile": ["Manrope"],
                "display-lg": ["Manrope"],
                "label-md": ["JetBrains Mono"],
                "label-mono": ["JetBrains Mono"],
                "label-caps": ["JetBrains Mono"]
            },
            fontSize: {
                "headline-md": ["24px", {"lineHeight": "1.4", "fontWeight": "400"}],
                "label-mono": ["14px", {"lineHeight": "1.4", "fontWeight": "400"}],
                "label-caps": ["12px", {"lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "500"}],
                "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "300"}],
                "headline-lg": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "300"}],
                "display-lg": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "200"}],
                "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "label-md": ["13px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "500"}]
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
