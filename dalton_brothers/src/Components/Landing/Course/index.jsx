import React from "react";

import "../../../index.css";
import { Course } from "../../Course/CourseSections/Course";
import { courseData } from "../../../Core/Services/data";

const CourseList = () => {
  const data = [courseData[0], courseData[1], courseData[2], courseData[3]];
  return (
    <div className="w-100 flex flex-col gap-5 ">
      <div className="w-full h-16  flex flex-row-reverse justify-between items-center  pr-[170px] pl-[170px]">
        <div className="mr-3 font-black text-4xl h-28 flex justify-start items-center font-sha">لیست دوره ها</div>
        <div className="w-[110px] h-10 bg-amber-400 flex justify-center items-center rounded-full text-sm">
          مشاهده بیشتر
        </div>
      </div>
      <div className="flex flex-row flex-wrap w-11/12 mx-auto justify-center gap-10">
        {data.map((course, index) => (
          <Course {...course} key={index} />
        ))}
      </div>
    </div>
  );
};

export { CourseList };
