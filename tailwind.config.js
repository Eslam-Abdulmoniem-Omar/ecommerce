/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        tabletHeader: "994px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        yellow: "#ffc815",
      },
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
      },
      fontSize: {
        base: "1.25rem",
      },
    },
  },
  plugins: [require("daisyui")],
};


