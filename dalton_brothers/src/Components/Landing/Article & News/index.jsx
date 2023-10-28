import React from "react";

import { Link } from "react-router-dom";

import { Article } from "../../Article & News/ArticleSections/Article";
import { newsData } from "../../../Core/Services/data";
import { SimpleSlider } from "../../Common/Sliders/SimpleSlider";

const ArticleNews = () => {
  const data = [newsData[0], newsData[1], newsData[2]];

  return (
    <div className="w-100   flex flex-col gap-5 mt-20 ">
      <div className="w-[75%] h-16  flex flex-row-reverse justify-between items-center m-auto">
        <div className="mr-3 text-2xl h-28 flex justify-start items-center font-irSans text-[#fcbf49]">
          آخرین اخبار و مقالات
        </div>

        <Link
          onClick={() => (Document.documentElement.scrollTop = 0)}
          to={"/news"}
          className="w-[210px] h-[50px] bg-[#6c63ff] hover:cursor-pointer hover:bg-[#463fd3] flex justify-center items-center rounded-full font-irSans text-[#fff] text-l"
        >
          مشاهده بیشتر
        </Link>
      </div>

      <div className=" w-11/12 mx-auto flex justify-center flex-wrap items-center gap-10 ">
        <SimpleSlider data={newsData} item={"news"} />
      </div>
    </div>
  );
};

export { ArticleNews };
