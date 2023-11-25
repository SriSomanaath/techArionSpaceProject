/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: {
        120: "500px",
      },
      backgroundImage: {
        homeMobile: "url('./src/assets/home/background-home-mobile.jpg')",
        homeTablet: "url('./src/assets/home/background-home-tablet.jpg')",

        destinationMobile:
          "url('./src/assets/destination/background-destination-mobile.jpg')",
        destinationTablet:
          "url('./src/assets/destination/background-destination-tablet.jpg')",

        crewMobile: "url('./src/assets/crew/background-crew-mobile.jpg')",
        crewTablet: "url('./src/assets/crew/background-crew-tablet.jpg')",

        technologyMobile:
          "url('./src/assets/technology/background-technology-mobile.jpg')",
        technologyTablet:
          "url('./src/assets/technology/background-technology-tablet.jpg')",
      },
    },
  },
  plugins: [],
};
