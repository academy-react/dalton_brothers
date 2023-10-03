import React from 'react'

import ArticleImage from "../../../Assets/Images/article.png";
import ArticleWriter from "../../../Assets/Images/articleWriter.png";
import like from "../../../Assets/Images/like.png";
import comment from "../../../Assets/Images/comment.png";
import bookmark from "../../../Assets/Images/bookMark.png";


const Article = () => {
  return (
    <div className="w-80 h-96 border  rounded-lg flex flex-col">


    {/* image & 3 button start */}

    <div className="w-full h-1/2  rounded-t-lg flex justify-center flex-row-reverse">
      {/*img Container*/}

      <div className="w-2/3 h-full  rounded-tr-2xl ">
        <img className="w-full h-full" src={ArticleImage} alt="" />
      </div>
      <div className="w-1/3 flex flex-col  ">
        <div className="w-full h-1/3 flex justify-center items-center">
          <img className="w-[25px] " src={bookmark} alt="" />
        </div>
        <div className="w-full h-1/3 flex justify-center items-center">
          <img className="w-[25px] " src={like} alt="" />
        </div>
        <div className="w-full h-1/3 flex justify-center items-center">
          <img className="w-[25px] " src={comment} alt="" />
        </div>
      </div>
    </div>

    {/* image & 3 button end */}

    {/* details & more info button start */}

    <div className=" w-full h-[170px]  flex flex-col  gap-5 rounded-b-lg mt-7 ">
      <span className="flex flex-row-reverse p-3 font-est ">موضوع مقاله</span>
      <span className="flex flex-row-reverse pr-3 text-neutral-600 text-sm">
        مقاله شماره 12
      </span>

      {/* button & price start */}

      <div className="w-full h-1/2  rounded-b-lg flex justify-center flex-row-reverse ">
        <div className="w-1/2  flex justify-center items-center flex-row-reverse text-sm  gap-5">
         <img className='w-7 h-7' src={ArticleWriter} alt="" />
         فرامرز
        </div>
        <div className="w-1/2  bg-teal-300 rounded-tr-2xl rounded-bl-lg flex justify-center items-center">
          مشاهده مقاله
        </div>
      </div>

      {/* button & price end */}
    </div>

    {/* details & more info button end */}
  </div>
  )
}

export  {Article}