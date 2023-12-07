import React from "react";

// import { courseData } from "../../../../Core/Services/data";

import userGold from "../../../../../src/assets/Images/user-gold-2.png";
import AboutCourseImg from "../../../../../src/assets/Images/icons8-python-144.png";
import { reserveCourse } from "../../../../Core/Services/api/course/reserve";

import courseDetailImage from "../../../../assets/Images/courseDetailImage.jpg";

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
    <div className="h-[500px] bg-pallete-50 w-full mt-10 flex justify-center items-center p-10  ">
      <div className="w-3/5 h-full bg-slate-600 "></div>
      <div className="w-2/5 h-full  bg-red-700">
        <div className="h-[70%] bg-yellow-400 flex justify-center items-center">
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
              className="  bg-[#fcbf49] md:text-xl text-md px-10 py-2 rounded-[40px] text-white font-irSans"
              onClick={() => handleClick()}
            >
              ثبت نام
            </button>
          </div>
          <div className="h-full w-full flex justify-center items-center gap-7">
            <div className="w-14 h-14 bg-white rounded-full">
              <img src="" alt="" />
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="w-20 h-12 bg-white rounded-l-[100px] rounded-r-[20px]">
                <img src="" alt="" />
              </div>
              <div className="w-20 h-12 bg-white rounded-r-[100px] rounded-l-[20px] ">
                <img src="" alt="" />
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
