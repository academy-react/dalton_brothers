import React from "react";

import { Article } from "./ArticleSections/Article";
import { newsData } from "../../Core/Services/data";

const ArticleNews = () => {
  const data = newsData;
  return (
    <div className="w-[90%] m-auto flex flex-col gap-5 mt-20 ">
      <div className="w-full flex flex-row-reverse justify-start items-center  pr-[105px]">
        <div className=" font-black text-2xl h-20flex justify-start items-center font-sha">آخرین اخبار و مقالات</div>
      </div>

      <div className="w-100 flex justify-center flex-wrap items-center gap-9 ">
        {data.map((news, index) => (
          <Article {...news} key={index} />
        ))}
      </div>
    </div>
  );
};

export { ArticleNews };
