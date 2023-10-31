import React from "react";
import { motion } from "framer-motion";
import { ArticleIntroduction } from "./Components/ArticleIntroduction/ArticleIntroduction";
import { RelatedArticle } from "./Components/RelatedArticle/RelatedArticle";
import { GotoArticle } from "./Components/GoToArticle/GoToArticle";
import { AboutArticle } from "./Components/AboutArticle/AboutArticle";
import { ScrollToTop } from "../../ScrollAnimation/ScrolToTop/ScrollToTop";
import { ArticleComments } from "./Components/ArticleComent/ArticleComent";

const ArticleDetail = () => {
  return (
    <motion.div
      className=""
           initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="">
        <GotoArticle />
        <ScrollToTop />
      </div>
      <div className="flex flex-col gap-[100px]">
        <AboutArticle />
        <ArticleIntroduction />
        <ArticleComments />
        <RelatedArticle />
      </div>
    </motion.div>
  );
};

export { ArticleDetail };
