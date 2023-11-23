import React from "react";
import { motion } from "framer-motion";
import { Header } from "./Header/Header.jsx";
import { Services } from "./ServiceHa/Services.jsx";
import { CourseList } from "./Course/index.jsx";
import { BestMasters } from "./BestMasters/BestMasters.jsx";
import { ArticleNews } from "./Article & News/index.jsx";
import { Category } from "./Category/Category.jsx";
import LandingComment from "./Comment/index.jsx";
import { LandingFooter } from "./Footer/LandingFooter.jsx";

import style from "./Landing.module.css";
import { ScrollToTop } from "../ScrollAnimation/ScrolToTop/ScrollToTop.jsx";

const Landing = () => {
  return (
    <motion.div
      className={style.landingContainer }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ScrollToTop />
      <Header />
      <Services />
      <Category />
      <CourseList />
      <ArticleNews />
      <BestMasters />
      <LandingComment />
      <LandingFooter />
    </motion.div>
  );
};

export { Landing };
