import React from "react";

import { Article } from "./ArticleSections/Article";
import { newsData } from "../../Core/Services/data";
import { LayOutHeaders } from "../Common/TopTitles/LayOutHeaders";

const ArticleNews = () => {
  const data = newsData;
  return (
    <div className="w-100 flex flex-col gap-5 ">
      <LayOutHeaders topic={"اخبار و مقالات"} />
      <div className="w-100 flex flex-row flex-wrap justify-center gap-3 scale-90">
        {data.map((news, index) => (
          <Article {...news} key={index} />
        ))}
      </div>
    </div>
  );
};

export { ArticleNews };
