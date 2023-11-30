import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import likeCheck from "../../../Assets/Images/likeCheck.png";
import likes from "../../../Assets/Images/like.png";
import comment from "../../../Assets/Images/comment.png";
import bookmarkCheck from "../../../Assets/Images/bookMarkCheck.png";
import bookmark from "../../../Assets/Images/bookMark.png";
import courseImage from "../../../Assets/Images/course.png";
import { Button } from "../../Common/buttons";
import { addLike } from "../../../Core/Services/api/course/addLike";
import {
  getItem,
  setItem,
} from "../../../Core/Services/common/storage.services";
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
// const test =async () => {
// const response = await ;
// }


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
    <div className="w-[350px] h-96 border  rounded-lg flex flex-col">
      {/* image & 3 button start */}

      <div className="w-full h-1/2  rounded-t-lg flex justify-center flex-row-reverse">
        {/*img Container*/}

        <div className="w-2/3 h-full rounded-tr-2xl ">
          <img className="w-full rounded-tr-2xl " src={courseImage} alt="" />
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center pt-[20px] text-[#090909] font-sha">
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
                src={bookmark}
                alt=""
                onClick={() => setSave(!save)}
              />
            )}
            <span className="w-[30px] text-center inline-block">
              {userFavorite}
            </span>
          </div>
          <div className="w-full h-1/3 pl-[30px] flex flex-col items-start">
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
                src={likes}
                alt=""
                onClick={() => handleLike()}
              />
            )}
            <span className="w-[30px] text-center inline-block">
              {likeCount}
            </span>
          </div>
          <div className="w-full h-1/3 pl-[30px] flex flex-col items-start">
            <img
              className="w-[30px] opacity-80 cursor-pointer"
              src={comment}
              alt=""
              onClick={() => navigate(`/courseDetail/${courseId}`)}
            />
            <span className="w-[30px] text-center inline-block">
              {commandCount}
            </span>
          </div>
        </div>
      </div>

      {/* image & 3 button end */}

      {/* details & more info button start */}

      <div className=" w-full h-[170px] flex flex-col gap-[10px] rounded-b-lg mt-7 relative">
        <span className="flex flex-row-reverse p-3 py-0  text-base font-irSBold truncate">
          {title}
        </span>
        <span className="flex flex-row-reverse pr-3 text-neutral-600 text-sm font-irSans">
          {teacherName}
        </span>
        <span className="flex flex-row-reverse pr-3 text-neutral-400 text-xs font-irSans text-right text-ellipsis ">
          {describe && handleDescription(describe, 20)}
        </span>

        {/* button & price start */}

        <div className="w-full rounded-b-lg flex justify-center flex-row-reverse absolute bottom-0 ">
          <div className="w-1/2  flex justify-center items-center flex-row-reverse text-sm text-[#fcbf49] font-irSans">
            {cost} : قیمت
          </div>
          <Button
            className="w-1/2  bg-[#fcbf49] text-gray-600 rounded-tr-2xl rounded-bl-lg rounded-tl-none rounded-br-none flex justify-center items-center font-irSBold"
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
