import React from "react";

import { Link } from "react-router-dom";

import "../../../index.css";
import { Course } from "../../Course/CourseSections/Course";
import { courseData } from "../../../Core/Services/data";
import NavLinks from "../../Common/Links/NavLinks";

const CourseList = () => {
  const data = [courseData[0], courseData[1], courseData[2]];
  return (
    <div className="w-100 flex flex-col gap-5 ">
      <div className="w-[75%] h-16  flex flex-row-reverse justify-between items-center m-auto">
        <div className="mr-3 text-2xl h-28 flex justify-start items-center font-sha text-[#fcbf49]">
          دوره ها
        </div>
        <NavLinks
          text={"مشاهده ی تمام دوره ها"}
          style={"bg-[#6c63ff] hover:bg-[#463fd3] text-[#fff]"}
          path={"/course"}
        />
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
