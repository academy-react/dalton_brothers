import React from "react";

import ArticleImage from "../../../Assets/Images/article.png";
import ArticleWriter from "../../../Assets/Images/articleWriter.png";
import like from "../../../Assets/Images/like.png";
import comment from "../../../Assets/Images/comment.png";
import bookmark from "../../../Assets/Images/bookMark.png";
import arrow from "../../../Assets/Images/arrow.png";

const Article = ({ author, number, topic }) => {
  return (
    <div className="w-[350px] h-96 p-3 border rounded-lg flex flex-col mt-10">
      {/* image & 3 button start */}
      <div className="w-full h-1/2 rounded-t-lg flex justify-center flex-row-reverse">
        {/*img Container*/}
        <div className="h-full rounded-tr-2xl ">
          <img className="w-full h-full" src={ArticleImage} alt="" />
        </div>
      </div>
      {/* image & 3 button end */}

      {/* details & more info button start */}

      <div className=" w-full flex flex-col px-[10px] gap-5 rounded-b-lg mt-1 ">
        <span className="flex flex-row-reverse font-irSBold text-gray-800">
          {topic}
        </span>
        <span className="flex flex-row-reverse text-neutral-500 font-irSans text-sm">
          مقاله شماره {number}
        </span>
        <div className="flex justify-start items-center flex-row-reverse gap-1 font-irSans text-neutral-500 text-sm">
          <img className="w-[20px]" src={ArticleWriter} alt="" />
          {author}
        </div>

        {/* button & price start */}

        <div className="w-full h-1/2  rounded-b-lg flex justify-between items-center flex-row-reverse ">
          <div className=" flex flex-row justify-center gap-[20px] opacity-40 ">
            <div className="w-full h-1/3 flex justify-center items-center">
              <img className="w-[30px] " src={bookmark} alt="" />
            </div>
            <div className="w-full h-1/3 flex justify-center items-center">
              <img className="w-[30px] " src={like} alt="" />
            </div>
            <div className="w-full h-1/3 flex justify-center items-center">
              <img className="w-[30px] " src={comment} alt="" />
            </div>
          </div>
          <div className="w-[45px] h-[45px]  rounded-full flex items-center justify-center">
            <img src={arrow} alt="" className="w-full h-full"/>
          </div>
        </div>

        {/* button & price end */}
      </div>

      {/* details & more info button end */}
    </div>
  );
};

export { Article };
