import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import likeCheck from "../../../Assets/Images/likeCheck.png";
import likes from "../../../Assets/Images/like.png";
import DarkModelikes from "../../../Assets/Images/modeLike.png";
import comment from "../../../Assets/Images/comment.png";
import darkModeComment from "../../../Assets/Images/modeComment.png";
import bookmarkCheck from "../../../Assets/Images/bookMarkCheck.png";
import bookmark from "../../../Assets/Images/bookMark.png";
import darkModeBookmark from "../../../Assets/Images/modeBookmark.png";
import courseImage from "../../../Assets/Images/course.svg";
import courseImageMode from "../../../Assets/Images/courseMode.svg";
import { Button } from "../../Common/buttons";
import { addLike } from "../../../Core/Services/api/course/addLike";
import {
  getItem,
  setItem,
} from "../../../Core/Services/common/storage.services";
import { useSelector } from "react-redux";
import handleDescription from "../../Common/Functions/HandleDesc/HandleDesc";

const Course = ({
  userFavorite,
  cost,
  likeCount,
  commandCount,
  teacherName,
  title,
  describe,
  courseId,
}) => {
  const [save, setSave] = useState(false);
  const [Like, setLike] = useState(false);
  const navigate = useNavigate();

  const colorMode = useSelector((state) => state.theme.theme);


  const handleLike = async () => {
    if (Like) {
      setLike(!Like);
      const user = await addLike(
        `/Course/AddCourseDissLike?CourseId=${courseId}`
      );
      return;
    }
    setLike(!Like);
    const user = await addLike(`/Course/AddCourseLike?CourseId=${courseId}`);
  };

  return (
    <div className="w-[350px] h-96 border dark:border-none dark:bg-mode-800  rounded-2xl flex flex-col">
      {/* image & 3 button start */}

      <div className="w-full h-1/2  rounded-t-lg flex justify-center flex-row-reverse">
        {/*img Container*/}

        <div className="w-2/3 flex justify-center items-center  h-full rounded-tr-2xl ">
          <img className="w-[180px] rounded-tr-2xl " src={  colorMode === "dark" ? courseImageMode :  courseImage} alt="" />
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center  pt-[20px] text-[#090909] font-irSans">
          <div className="w-full h-1/3 pl-[30px] flex flex-col items-start">
            {save ? (
              <img
                className="w-[30px] cursor-pointer"
                src={bookmarkCheck}
                alt=""
                onClick={() => setSave(!save)}
              />
            ) : (
              <img
                className="w-[30px] cursor-pointer opacity-80"
                src={colorMode === "dark" ?  darkModeBookmark  :   bookmark}
                alt=""
                onClick={() => setSave(!save)}
              />
            )}
            <span className="w-[30px] text-center inline-block dark:text-mode-200 ">
              {userFavorite}
            </span>
          </div>
          <div className="w-full h-1/3 pl-[30px] flex flex-col items-start gap-1">
            {Like ? (
              <img
                className="w-[30px] cursor-pointer"
                src={likeCheck}
                alt=""
                onClick={() => handleLike()}
              />
            ) : (
              <img
                className="w-[30px] cursor-pointer  opacity-80"
                src={ colorMode === "dark" ? DarkModelikes : likes}
                alt=""
                onClick={() => handleLike()}
              />
            )}
            <span className="w-[30px] text-center inline-block dark:text-mode-200" >
              {likeCount}
            </span>
          </div>
          <div className="w-full h-1/3 pl-[30px] flex flex-col items-start gap-1">
            <img
              className="w-[30px] opacity-80 cursor-pointer"
              src={colorMode === "dark" ?  darkModeComment :comment}
              alt=""
              onClick={() => navigate(`/courseDetail/${courseId}`)}
            />
            <span className="w-[30px] text-center inline-block dark:text-mode-200">
              {commandCount}
            </span>
          </div>
        </div>
      </div>

      {/* image & 3 button end */}

      {/* details & more info button start */}

      <div className=" w-full h-[170px] flex flex-col gap-[10px] rounded-b-lg mt-6 relative">
        <span className="flex flex-row-reverse p-3 py-0 text-mode-900  text-base font-irSBold trauncte dark:text-mode-50">
          {title}
        </span>
        <span className="flex flex-row-reverse pr-3 text-mode-800 opacity-80  text-sm font-irSans dark:text-mode-100">
          {teacherName}
        </span>
        <span className="flex flex-row-reverse w-[94%] mx-auto  text-mode-700 opacity-80 text-xs font-irSans text-right text-ellipsis  overflow-hidden dark:text-mode-200">
          {describe}
        </span>

        {/* button & price start */}

        <div className="w-full h-[55px]  rounded-b-lg flex justify-center flex-row-reverse absolute bottom-0 ">
          <div className="w-1/2  flex justify-center items-center flex-row-reverse text-sm text-pallete-100 dark:text-DarkPallete-100 font-irSBold">
            {cost} : قیمت
          </div>
          <Button
            className="w-1/2  bg-pallete-100 dark:bg-DarkPallete-100 text-mode-100 rounded-tr-2xl rounded-bl-2xl rounded-tl-none rounded-br-none flex justify-center items-center font-irSBold"
            onClick={() => navigate(`/courseDetail/${courseId}`)}
          >
            {"اطلاعات بیشتر"}
          </Button>
        </div>

        {/* button & price end */}
      </div>

      {/* details & more info button end */}
    </div>
  );
};

export { Course };
