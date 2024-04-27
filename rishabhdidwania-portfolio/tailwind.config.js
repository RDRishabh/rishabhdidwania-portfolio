/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-default": "#fff",
        "gray-50": "#f9fafb",
        "gray-600": "#4b5563",
        crimson: "#ef4444",
        "gray-900": "#111827",
        "gray-200": "#e5e7eb",
        lightgray: "#cccfd1",
        "gray-100": "#f3f4f6",
        "gray-700": "#374151",
        black: "#000",
        gray: {
          "100": "rgba(255, 255, 255, 0)",
          "200": "rgba(4, 13, 18, 0.87)",
        },
        darkslategray: {
          "100": "#454a59",
          "200": "rgba(56, 64, 69, 0.87)",
        },
        mediumseagreen: {
          "100": "#00d084",
          "200": "#10b981",
        },
      },
      spacing: {},
      fontFamily: {
        "body2-normal-all": "Inter",
        inherit: "inherit",
        lato: "Lato",
        "faster-one": "'Faster One'",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      xl: "20px",
      "9xl": "28px",
      lg: "18px",
      "11xl": "30px",
      "5xl": "24px",
      "41xl": "60px",
      "29xl": "48px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
