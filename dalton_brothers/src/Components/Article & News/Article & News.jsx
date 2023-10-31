import React from "react";

// import { Article } from "./ArticleSections/Article";
import { Article } from "./ArticleSections/Article/Article";
import { newsData } from "../../Core/Services/data";
import { LayOutHeaders } from "../Common/LayOutHeaders";
import { ScrollToTop } from "../ScrollAnimation/ScrolToTop/ScrollToTop";

const ArticleNews = () => {
  const data = newsData;
  return (
    <div className="w-100 flex flex-col gap-5 ">
      <LayOutHeaders topic={"اخبار و مقالات"} />
      <div className="w-100 flex flex-row flex-wrap justify-center gap-3 scale-x-90">
        {data.map((news, index) => (
          <Article {...news} key={index} />
        ))}
      </div>
      <ScrollToTop />
    </div>
  );
};

export { ArticleNews };
