import React from "react";

// import { courseData } from "../../../../Core/Services/data";

import userGold from "../../../../../src/assets/Images/user-gold-2.png";
import AboutCourseImg from "../../../../../src/assets/Images/icons8-python-144.png";
import { reserveCourse } from "../../../../Core/Services/api/course/reserve";

import courseDetailImage from "../../../../assets/Images/courseDetailImage.jpg";

import {
  IconBookmarks,
  IconThumbUp,
  IconThumbDown,
  IconUserCheck,
  IconStarFilled,
  IconStar,
} from "@tabler/icons-react";

const AboutCourse = ({
  title,
  teacherName,
  cost,
  startTime,
  courseStatusName,
  courseLevelName,
  endTime,
  imageAddress,
  capacity,
  currentRate,
  courseId,
}) => {
  const selectedCourse = {
    courseId: courseId,
  };
  const handleClick = async () => {
    const result = await reserveCourse(selectedCourse);
    console.log(result);
  };
  return (
    <div className="h-[500px] bg-pallete-100 bg-opacity-20 w-full mt-10 flex justify-center items-center px-10 pt-10 pb-5   ">
      {/* ------------------------  title  & info -------------------------------------------------- */}

      {/*--------------------- title  & teacher  ------------------------------- */}
      <div className="w-3/5 h-full flex flex-col items-end gap-10 ">
        <p className="text-end font-irSBold text-2xl text-mode-800">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <div className="flex justify-start items-center text-mode-700 flex-row-reverse gap-3  font-irSBold">
          <IconUserCheck className="text-mode-700 w-8 h-8 " />
          مدرس دوره
        </div>
        {/* ---------------------------------------------------- */}

        {/* capility & rate & info */}
        <div className="flex justify-center items-center flex-row-reverse  bg-white w-4/5 h-[250px] rounded-[30px]">
          <div className="w-2/5 h-full  flex flex-col justify-evenly items-center">
            <div className="bg-mode-50 w-28 h-28 rounded-full flex flex-col justify-center items-center gap-2 text-mode-700 font-irSans text-sm">
              <p className="text-mode-800 font-irSBold text-xl"> 80%</p>
              ظرفیت پرشده
            </div>
            <p className="text-mode-700 font-irSans text-lg">4/5</p>
            <div className="flex justify-center items-center">
              <IconStarFilled className="text-pallete-100" />
              <IconStarFilled className="text-pallete-100" />
              <IconStarFilled className="text-pallete-100" />
              <IconStarFilled className="text-pallete-100" />
              <IconStar className="text-pallete-100" />
            </div>
            <p className="text-mode-700 font-irSans text-base flex flex-row-reverse gap-2 ">
              {" "}
              <p>92</p>نفر{" "}
            </p>
          </div>

          {/* ------------------------------------------------ */}
          {/* ----------------------------  info --------------------------------------- */}
          <div className="w-3/5 h-full flex flex-col gap-6 items-end justify-center font-irSans">
            {/* one item */}
            <div className="text-mode-700  flex flex-row-reverse ">
              : وضعیت
              <span className="font-irSBold mr-2">شروع نشده</span>{" "}
            </div>
            {/* --------------- */}
            {/* one item */}
            <div className="text-mode-700  flex flex-row-reverse ">
              : (تومان) هزینه دوره
              <span className="font-irSBold mr-2 flex "> 500000 </span>{" "}
            </div>
            {/* --------------- */}
            {/* one item */}
            <div className="text-mode-700  flex flex-row-reverse ">
              :  تاریخ شروع دوره{" "}
              <span className="font-irSBold mr-2">1402 / 08 /03</span>{" "}
            </div>
            {/* --------------- */}

            {/* one item */}
            <div className="text-mode-700  flex flex-row-reverse ">
              :  سطح دوره{" "}
              <span className="font-irSBold mr-2">پیشرفته</span>{" "}
            </div>
            {/* --------------- */}


          </div>

          
          {/*  -----------------------------------  */}
        </div>
      </div>

      {/*----------------------- image &  buttons ------------------------------------------------------------------------- */}
      <div className="w-2/5 h-full  ">
        <div className="h-[70%]  flex justify-center items-center">
          {" "}
          <img
            className="w-4/5 h-full rounded-[30px] flex justify-center items-center"
            src={courseDetailImage}
            alt="عکسی وجود ندارد"
          />
        </div>
        <div className="h-[30%] w-[80%] m-auto flex justify-between items-center flex-row-reverse ">
          <div className="w-full flex justify-end">
            <button
              className="  bg-pallete-100  text-xl px-16 py-2 rounded-[40px] text-white font-irSans"
              onClick={() => handleClick()}
            >
              ثبت نام
            </button>
          </div>
          <div className="h-full w-full flex justify-start items-center gap-3 ">
            <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center  cursor-pointer">
              <IconBookmarks className="text-mode-700" />
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="w-20 h-[44px] bg-white rounded-l-[100px] rounded-r-[20px]  flex justify-center items-center gap-2 cursor-pointer">
                <IconThumbUp className="text-mode-700 w-6 h-6" stroke={1.8} />
                <p className="text-mode-700 "> 25</p>
              </div>
              <div className="w-20 h-[44px] bg-white rounded-r-[100px] rounded-l-[20px]  flex justify-center items-center gap-2 cursor-pointer ">
                <IconThumbDown
                  className="text-mode-700 w-6 h-6 relative top-[2px]"
                  stroke={1.8}
                />
                <p className="text-mode-700 "> 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutCourse };

/* <button
          className="md:px-14 md:py-4 bg-[#fcbf49] md:text-xl text-md px-11 py-3 absolute -bottom-[27px] rounded-[40px] text-white font-irSans"
          onClick={() => handleClick()}
        >
          ثبت نام
        </button>*/
