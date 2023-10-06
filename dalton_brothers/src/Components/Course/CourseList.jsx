import React from "react";

import "../../index.css";
import { Course } from "./CourseSections/Course";
import { courseData } from "../../Core/Services/data";

const CourseList = () => {
  const data = courseData;
  return (
    <div className="w-100 flex flex-col gap-5 ">
      <div className="w-full flex flex-row-reverse justify-start items-center  pr-[105px]">
        <div className="font-black text-2xl h-20flex justify-start items-center font-sha">
          لیست دوره ها
        </div>
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
