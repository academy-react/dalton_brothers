import React from "react";

import { Header } from "./Header/Header.jsx";
import { Services } from "./ServiceHa/Services.jsx";
import { CourseList } from "./Course/index.jsx";
import { BestMasters } from "./BestMasters/BestMasters.jsx";
import { ArticleNews } from "./Article & News/index.jsx";
import { Category } from "./Category/Category.jsx";
import LandingComment from "./Comment/index.jsx";
import { LandingFooter } from "./Footer/LandingFooter.jsx";

import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.landingContainer}>
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
