import React from "react";

import { Article } from "../../Article & News/ArticleSections/Article";
import { newsData } from "../../../Core/Services/data";
import { LayOutHeaders } from "../../Common/LayOutHeaders";

const ArticleNews = () => {
  const data = [newsData[0], newsData[1], newsData[2]];

  return (
    <div className="w-100 flex flex-col gap-5 mt-20 ">
      <div className="w-[83%] m-auto">
        <LayOutHeaders
          topic={"آخرین اخبار و مقالات"}
          btnText={"مشاهده ی تمام خبر ها و مقالات"}
          path={"/news"}
          style={
            "bg-[#ffe6b5] text-[#8c792c] hover:bg-[#fcbf49] hover:text-[#fff]"
          }
        />
      </div>
      <div className=" w-11/12 mx-auto flex justify-center flex-wrap items-center gap-10 ">
        {data.map((news, index) => (
          <Article {...news} key={index} />
        ))}
      </div>
    </div>
  );
};

export { ArticleNews };
