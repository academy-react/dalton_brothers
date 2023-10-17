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
      irSans : "iranSans",
      irSBold : "iranSansBold",

    },

    extend: {
      boxShadow: { ri: "0px 0px 10px black" },
      backgroundImage: {
        ham: "url(./src/assets/images/arrow-ng.png)",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        "20%": "20%",
        "15%": "15%",
        "10%": "10%",
        16: "4rem",
      },
    },
  },
  plugins: [],
};
