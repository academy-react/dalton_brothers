import React from "react";

import { Link } from "react-router-dom";

import { Article } from "../../Article & News/ArticleSections/Article";
import { newsData } from "../../../Core/Services/data";
import NavLinks from "../../Common/Links/NavLinks";

const ArticleNews = () => {
  const data = [newsData[0], newsData[1], newsData[2]];

  return (
    <div className="w-100   flex flex-col gap-5 mt-20 ">
      <div className="w-[75%] h-16  flex flex-row-reverse justify-between items-center m-auto">
        <div className="mr-3 text-2xl h-28 flex justify-start items-center font-sha text-[#fcbf49]">
          آخرین اخبار و مقالات
        </div>

        <NavLinks
          text={"مشاهده ی تمام دوره ها"}
          style={"bg-[#6c63ff] hover:bg-[#463fd3] text-[#fff]"}
          path={"/news"}
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
