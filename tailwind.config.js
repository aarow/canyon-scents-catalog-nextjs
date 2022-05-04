const titleFont = {
  fontFamily: "Abril Fatface, serif",
  fontWeight: "400",
  textTransform: "uppercase",
  letterSpacing: "6px",
};

module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h2: titleFont,
            h3: titleFont,
            hr: {
              borderColor: theme("colors.gray.200"),
              borderTopWidth: "1px",
              marginTop: "2rem",
              marginBottom: "2rem",
            },
            "ol > li::before": {
              color: theme("colors.gray.900"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.900"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
