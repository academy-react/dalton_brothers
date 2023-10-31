import React from "react";

import { ArticleIntroduction } from "./Components/ArticleIntroduction/ArticleIntroduction";
import { RelatedArticle } from "./Components/RelatedArticle/RelatedArticle";
import { GotoArticle } from "./Components/GoToArticle/GoToArticle";
import { AboutArticle } from "./Components/AboutArticle/AboutArticle";
import { ScrollToTop } from "../../ScrollAnimation/ScrolToTop/ScrollToTop";
import { ArticleComments } from "./Components/ArticleComent/ArticleComent";

const ArticleDetail = () => {
  return (
    <div className="">
      <div className="">
        <GotoArticle/>
        <ScrollToTop />
      </div>
      <div className="flex flex-col gap-[100px]">
        <AboutArticle/>
        <ArticleIntroduction />
        <ArticleComments/>
        <RelatedArticle />
      </div>
    </div>
  );
};

export { ArticleDetail };
