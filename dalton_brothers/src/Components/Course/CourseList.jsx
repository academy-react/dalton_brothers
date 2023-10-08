import React from "react";

import { Link } from "react-router-dom";

import "../../index.css";
import { Course } from "./CourseSections/Course";
import { courseData } from "../../Core/Services/data";

const CourseList = () => {
  const data = courseData;
  return (
    <div className="w-100 flex flex-col gap-5 ">
      <div className="w-[90%] m-auto flex flex-row-reverse justify-between items-center">
        <div className="font-black text-2xl flex justify-start items-center font-sha">
          لیست دوره ها
        </div>
        <Link
          onClick={() => (Document.documentElement.scrollTop = 0)}
          to={"/"}
          className="w-[210px] h-[50px] bg-[#6c63ff] hover:cursor-pointer hover:bg-[#463fd3] flex justify-center items-center rounded-full font-sha text-[#fff] text-l"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
      <div className="w-100 flex flex-row flex-wrap justify-center gap-3">
        {data.map((course, index) => (
          <Course {...course} key={index} />
        ))}
      </div>
    </div>
  );
};

export { CourseList };
