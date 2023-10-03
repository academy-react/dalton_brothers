import React from "react";

import { Header } from "./Header/Header.jsx";
import { Services } from "./ServiceHa/Services.jsx";

const Landing = () => {
  return (
    <div className="w-full max-w-screen-2xl m-auto">
      <Header />
      <Services/>
    </div>
  );
};

export { Landing };
