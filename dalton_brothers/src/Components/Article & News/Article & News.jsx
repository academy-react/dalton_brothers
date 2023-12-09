import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { Article } from "./ArticleSections/Article";
import { Article } from "./ArticleSections/Article/Article";
// import { newsData } from "../../Core/Services/data";
import { LayOutHeaders } from "../Common/LayOutHeaders";
import { ScrollToTop } from "../ScrollAnimation/ScrolToTop/ScrollToTop";
import { basicGet } from "../../Core/Services/api/course/courseList/courseList";

const ArticleNews = () => {
  const [articleList, setArticleList] = useState([]);

  const getArticles = async () => {
    const result = await basicGet("/News?PageNumber=1&RowsOfPage=10");

    const response = result.news;
    //console.log(result);
    setArticleList(response);
  };

  useEffect(() => {
    getArticles();
  }, []);

  // const data = ;
  return (
    <motion.div
      className="w-100 flex flex-col gap-5 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <LayOutHeaders topic={"اخبار و مقالات"} /> */}
      <div className="w-full flex flex-row flex-wrap justify-center gap-9 gap-y-7 scale-x-90 mt-10">
        {articleList.map((news, index) => (
          <Article
            {...news}
            key={index}
            insertDate={news.insertDate.split("T")[0].replaceAll("-", "/")}
            updateDate={news.updateDate.split("T")[0].replaceAll("-", "/")}
          />
        ))}
      </div>
      <ScrollToTop />
    </motion.div>
  );
};

export { ArticleNews };
