import React from "react";

import "../../index.css";
import { Course } from "./CourseSections/Course";
import { courseData } from "../../Core/Services/data";

const CourseList = () => {
  const data = courseData;
  return (
    <div className="w-100   flex flex-col gap-5 ">
      <div className="w-full h-16  flex flex-row-reverse justify-between items-center  pr-[170px] pl-[170px]">
        <div className="">لیست دوره ها</div>
      </div>
      <div className="w-100 h-[400px] flex flex-row flex-wrap justify-center gap-3">
        {data.map((course, index) => (
          <Course {...course} key={index} />
        ))}
      </div>
    </div>
  );
};

export { CourseList };
