import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import style from "../../../Landing/Header/header.module.css";
import ArticleImage from "../../../../Assets/Images/article.png";
import ArticleWriter from "../../../../Assets/Images/articleWriter.png";
import likeCheck from "../../../../Assets/Images/likeCheck.png";
import like from "../../../../Assets/Images/like.png";
import comment from "../../../../Assets/Images/comment.png";
import bookmark from "../../../../Assets/Images/bookMark.png";
import bookmarkCheck from "../../../../Assets/Images/bookmarkCheck.png";

import { Button } from "../../../Common/buttons";
import { addArticleLike } from "../../../../Core/Services/api/course/Like/Like";
import handleDescription from "../../../Common/Functions/HandleDesc/HandleDesc";
import { addLike } from "../../../../Core/Services/api/course/addLike";
import {
  IconUserEdit,
  IconStarFilled,
  IconEye,
  IconHeart,
  IconHeartFilled,
  IconArrowNarrowLeft,
} from "@tabler/icons-react";

const Article = ({
  miniDescribe,
  addUserFullName,
  title,
  newsCatregoryName,
  id,
  currentImageAddressTumb,
  currentRate,
  currentView,
  insertDate,
  updateDate,
  currentLikeCount,
  currentUserIsLike,
}) => {
  const [Like, setLike] = useState(currentUserIsLike);
  const token = useSelector((state) => state.token.token);

  const navigate = useNavigate();

  const handleLike = async () => {
    if (token) {
      if (Like == true) {
        setLike(false);
      } else {
        const userIsLike = await addLike(`/News/NewsLike/${id}`);
        console.log(userIsLike);
        setLike(true);
        return;
      }
    } else {
      toast.error("برای لایک باید در سایت ثبت نام کنید");
    }
  };

  console.log(currentUserIsLike);

  return (
    <>
      <div className="hidden w-[700px] h-[80px] bg-red-400 sticky top-96 right-96  "></div>
      <div className="w-[780px]  border rounded-[30px] flex-col bg-[#F1F5F9] p-4 pb-0">
        <div className=" w-full h-44 flex">
          <div className=" h-full w-3/5 flex-col pr-4">
            <h3 className=" w-full h-1/4 flex items-center justify-end font-irSBold text-xl">
              {title}{" "}
            </h3>
            <h5 className=" w-full h-1/4 flex items-center justify-end font-irSans text-lg text-gray-600">
              {" "}
              {newsCatregoryName}{" "}
            </h5>
            <p
              className=" w-full h-1/2 flex items-center leading-8 text-right font-irSans text-gray-500"
              dir="rtl"
            >
              {miniDescribe && handleDescription(miniDescribe, 120)}
            </p>
            <div className="w-4/5 border border-gray-300 mx-auto"></div>
          </div>
          <div className=" h-full w-2/5">
            <div className=" w-full h-full rounded-[30px]">
              <img
                src={currentImageAddressTumb}
                alt="عکسی وجود ندارد "
                className="w-full h-full flex justify-center items-center "
              ></img>
            </div>
          </div>
        </div>
        <div className="w-full h-24 flex flex-row-reverse items-center font-irSans text-[15px]">
          <div className="w-[180px] h-full flex flex-col justify-evenly text-gray-500">
            <div className="w-full h-1/4 flex">
              <p className="h-full w-[160px] flex justify-center items-center pl-2 pt-1">
                {insertDate}
              </p>
              <p className="h-full w-[130px] text-right"> : انتشار خبر </p>
            </div>
            <div className="w-full h-1/4 flex">
              <p className="h-full w-[160px] flex justify-center items-center pl-2 pt-1 ">
                {updateDate}
              </p>
              <p className="h-full w-[130px] text-right"> : آپدیت خبر </p>
            </div>
          </div>
          <div className="w-[180px]  h-full flex relative ">
            <div className="h-3/5 border border-gray-600 border-r-0 absolute right-0 top-6"></div>
            <div className="w-4/5 h-1/2 m-auto  flex flex-row-reverse items-center">
              <div className="h-3/5 w-1/4 flex justify-center items-center">
                <IconUserEdit
                  strokeWidth={1.5}
                  className="w-full h-full text-gray-700"
                ></IconUserEdit>
              </div>
              <div className="h-full w-3/4 whitespace-nowrap flex items-center mr-1 text-gray-700">
                {addUserFullName && handleDescription(addUserFullName, 11)}
              </div>
            </div>
          </div>
          <div className="w-[130px] h-1/3 flex flex-row-reverse items-center">
            <div className="w-1/2 h-2/3 flex flex-row-reverse">
              <div className="w-1/2 text-orange-300 flex justify-center items-center text-lg pt-[3px]">
                {" "}
                {currentRate}{" "}
              </div>
              <IconStarFilled
                className="w-1/2 text-orange-300 flex justify-center items-center pl-2"
                fill="orange-300"
              ></IconStarFilled>
            </div>
            <div className="w-1/2  h-2/3 flex flex-row-reverse">
              <div className="w-1/2 text-gray-600 flex justify-center items-center text-lg pt-[2px]">
                {" "}
                {currentView}{" "}
              </div>
              <IconEye className="w-1/2 h-full text-gray-600 flex justify-center items-center pl-2"></IconEye>
            </div>
          </div>
          <div className="w-[87px] h-[36%] ml-3 mr-1">
            {Like ? (
              <div
                className="bg-red-300 w-full h-full rounded-[20px] flex justify-center items-center cursor-pointer pl-1"
                onClick={()=> handleLike()}
              >
                <div className="w-4/5 h-4/5 flex flex-row-reverse">
                  <div className=" w-1/2 h-full flex items-center justify-center text-red-500 text-xl">
                    {" "}
                    {currentUserIsLike ? currentLikeCount : currentLikeCount+1}{" "}
                  </div>
                  <IconHeartFilled
                    strokeWidth={1.5}
                    className="text-red-500 w-1/2 h-full cursor-pointer"
                  ></IconHeartFilled>
                </div>
              </div>
            ) : (
              <div
                className="bg-white w-full h-full rounded-[20px] flex justify-center items-center cursor-pointer pl-1"
                onClick={()=> handleLike()}
              >
                <div className="w-4/5 h-4/5 flex flex-row-reverse">
                  <div className=" w-1/2 h-full flex items-center justify-center text-red-500 text-xl">
                    {" "}
                    {currentUserIsLike ? currentLikeCount : currentLikeCount -1}{" "}
                  </div>
                  <IconHeart
                    strokeWidth={1.5}
                    className="text-red-500 w-1/2 h-full cursor-pointer"
                  ></IconHeart>
                </div>
              </div>
            )}
          </div>
          <Button
            className="w-[150px] h-1/3 flex flex-row-reverse !px-0 !py-0"
            onClick={() => navigate(`/newsDetail/${id}`)}
          >
            <div className="w-2/3 h-full whitespace-nowrap font-irSans text-gray-500 font-bold flex justify-center items-center pr-3">
              {" "}
              جزئیات بیشتر{" "}
            </div>
            <div className="w-[50px] h-8  flex justify-center items-center ">
              <IconArrowNarrowLeft
                className="w-full h-full text-gray-500"
                strokeWidth={1.5}
              ></IconArrowNarrowLeft>
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export { Article };
