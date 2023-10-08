import React from "react";

import { Header } from "./Header/Header.jsx";
import { Services } from "./ServiceHa/Services.jsx";
import { CourseList } from "./Course/index.jsx";
import { BestMasters } from "./BestMasters/BestMasters.jsx";
import { ArticleNews } from "./Article & News/index.jsx";
import { Category } from "./Category/Category.jsx";
import LandingComment from "./Comment/index.jsx";
import { LandingFooter } from "./Footer/LandingFooter.jsx";

const Landing = () => {
  return (
    <div className="w-full max-w-screen-2xl m-auto">
      <Header />
      <Services />
      <Category />
      <CourseList />
      <ArticleNews />
      <BestMasters />
      <LandingComment />
      <LandingFooter />
    </div>
  );
};

export { Landing };
