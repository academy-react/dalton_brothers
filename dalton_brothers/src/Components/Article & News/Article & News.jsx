import React from "react";

import { Article } from "./ArticleSections/Article";
import { newsData } from "../../Core/Services/data";
import { LayOutHeaders } from "../Common/LayOutHeaders";

const ArticleNews = () => {
  const data = newsData;
  return (
    <div className="w-100 flex flex-col gap-5 ">
      <div className="w-[93%] m-auto">
        <LayOutHeaders
          topic={"اخبار و مقالات"}
          btnText={"بازگشت به صفحه ی اصلی"}
          path={"/"}
          style={"text-[#fff] bg-[#6c63ff] hover:bg-[#574eff]"}
        />
      </div>
      <div className="w-100 flex flex-row flex-wrap justify-center gap-3 scale-x-90">
        {data.map((news, index) => (
          <Article {...news} key={index} />
        ))}
      </div>
    </div>
  );
};

export { ArticleNews };
