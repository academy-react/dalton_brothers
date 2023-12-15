import React, { useEffect, useState } from "react";

import { Article } from "../../../ArticleSections/Article/Article";
import { relatedNews } from "../../../../../Core/Services/data";
import { basicGet } from "../../../../../Core/Services/api/course/courseList/courseList";

const RelatedArticle = ({ addUserFullName, id }) => {
  const [OtherArticle, setOtherArticle] = useState([]);

  const getAllArticle = async () => {
    const result = await basicGet(`/News`);
    const response = result.news;
    setOtherArticle(response);
  };
  const filterAllAuthorArticle = OtherArticle.filter(
    (item) => item.addUserFullName == addUserFullName
  );
  const filterOtherAuthorArticle = filterAllAuthorArticle.filter(
    (item) => item.id != id
  );
  //console.log(filterOtherAuthorArticle);
  const items = filterOtherAuthorArticle.map((article, index) => (
    <Article
      {...article}
      key={index}
      insertDate={article.insertDate.split("T")[0].replaceAll("-", "/")}
      updateDate={article.updateDate.split("T")[0].replaceAll("-", "/")}
    />
  ));
  useEffect(() => {
    getAllArticle();
  }, []);

  return (
    <>
      {items.length == 0 ? (
        <></>
      ) : (
        <div className=" w-full">
          <p className="text-center h-[80px] w-full font-irSBold text-2xl mb-[50px] p-[30px] dark:text-DarkPallete-100 ">
            {" "}
            دیگر خبر های این نویسنده{" "}
          </p>
          <div className="w-full flex justify-evenly flex-wrap gap-9">
            {items}
          </div>
        </div>
      )}
    </>
  );
};

export { RelatedArticle };
