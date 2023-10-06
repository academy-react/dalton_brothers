/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sha: "shabnam",
      est: "Estedad",
      vaz: "vazir",
      vazY: "vazirYekan",
      BNa: "BNazanin",
      shabl: "shablon",
      BTi: "BTitrBd",
      Ord: "Ordibehesht",
    },

    extend: {
      boxShadow: { ri: "0px 0px 10px black" },
    },
  },
  plugins: [],
};
