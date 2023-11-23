/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#898889",
          "200": "#222",
          "300": "#222122",
          "400": "#1d1d1f",
        },
        white: "#fff",
        "primary-50": "#edeff6",
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "#e9e9e9",
        },
        darkslategray: "#3b3b3b",
        dimgray: "#555",
        black: "#000",
        "m3-sys-dark-on-surface-variant": "#cac4d0",
        "m3-sys-dark-surface": "#1c1b1f",
        "m3-sys-dark-on-surface": "#e6e1e5",
        lightcyan: "#e0f7fe",
      },
      spacing: {},
      fontFamily: {
        jaldi: "Jaldi",
        "bruno-ace": "'Bruno Ace'",
        cantarell: "Cantarell",
        "doppio-one": "'Doppio One'",
        inter: "Inter",
        "m3-body-small": "Roboto",
        "space-grotesk": "'Space Grotesk'",
        "degular-display-demo": "'Degular Display Demo'",
        puritan: "Puritan",
        "radio-canada": "'Radio Canada'",
      },
      borderRadius: {
        "31xl": "50px",
        "81xl": "100px",
      },
    },
    fontSize: {
      "11xl": "30px",
      "29xl": "48px",
      "5xl": "24px",
      lg: "18px",
      xs: "12px",
      "21xl": "40px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
