import React from "react";
import { ArticleIntroduction } from "./Components/ArticleIntroduction/ArticleIntroduction";
import { RelatedArticle } from "./Components/RelatedArticle/RelatedArticle";

const ArticleDetail = () => {
  return (
    <div className="flex flex-col gap-[100px]">
      <ArticleIntroduction />
      <RelatedArticle />
    </div>
  );
};

export { ArticleDetail };
