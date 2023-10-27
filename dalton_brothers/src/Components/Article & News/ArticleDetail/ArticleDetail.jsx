import React from "react";

import { ArticleIntroduction } from "./Components/ArticleIntroduction/ArticleIntroduction";
import { RelatedArticle } from "./Components/RelatedArticle/RelatedArticle";
import { GotoArticle } from "./Components/GoToArticle/GoToArticle";
import { AboutArticle } from "./Components/AboutArticle/AboutArticle";

const ArticleDetail = () => {
  return (
    <div className="">
      <div className="">
        <GotoArticle/>
      </div>
      <div className="flex flex-col gap-[100px]">
        <AboutArticle/>
        <ArticleIntroduction />
        <RelatedArticle />
      </div>
    </div>
  );
};

export { ArticleDetail };
