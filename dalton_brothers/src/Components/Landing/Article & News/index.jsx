import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { Article } from "../../Article & News/ArticleSections/Article/Article";
import { newsData } from "../../../Core/Services/data";
import { SimpleSlider } from "../../Common/Sliders/SimpleSlider";
import { basicGet } from "../../../Core/Services/api/course/courseList";

const ArticleNews = () => {
  const [articleList, setArticleList] = useState([])

  const getSomeArticle = async () =>{
    const result = await basicGet("/News?PageNumber=1&RowsOfPage=10")

    const response = result.news


    console.log(result);
    setArticleList(response)
  }

  useEffect(() => {
    getSomeArticle()
  }, [])
  

  const data = [newsData[0], newsData[1], newsData[2]];

  return (
    <div className="w-100   flex flex-col gap-5 mt-20 ">
      <div className="w-[75%]  flex flex-row-reverse justify-between items-center m-auto">
      <div className="mr-3 ml-3 text-xl whitespace-nowrap h-28 flex justify-start items-center font-irSans text-[#fcbf49]">
          اخبار و مقالات
        </div>

        <Link
          // onClick={() => (Document.documentElement.scrollTop = 0)}
          to={"/news"}
          className="min-[500px]:w-[210px] whitespace-nowrap w-[175px] h-[50px] bg-[#6c63ff] hover:cursor-pointer hover:bg-[#463fd3] flex justify-center items-center rounded-full font-irSans text-[#fff] text-l"
        >
          مشاهده ی تمام اخبار
        </Link>
      </div>

      <div className=" w-11/12 mx-auto flex justify-center flex-wrap items-center gap-10 ">
        <SimpleSlider data={articleList} item={"news"} />
      </div>
    </div>
  );
};

export { ArticleNews };
