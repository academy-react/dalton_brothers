import React from "react";

import { Header } from "./Header/Header.jsx";
import { Services } from "./ServiceHa/Services.jsx";
import { CourseList } from "./Course/index.jsx";
import { BestMasters } from "./BestMasters/BestMasters.jsx";
import { Suggestions } from "./Suggestions/Suggestions.jsx";

const Landing = () => {
  return (
    <div className="w-full max-w-screen-2xl m-auto">
      <Header />
      <Services />
      <CourseList />

      <BestMasters />
      <Suggestions />
    </div>
  );
};

export { Landing };
