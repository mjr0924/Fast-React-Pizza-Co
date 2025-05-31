/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        screen: "100dvh", // 100% of the viewport height, accounting for mobile browser UI
      },
    },
  },
  plugins: [],
};
