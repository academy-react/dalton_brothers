import React from "react";

import { Link } from "react-router-dom";

import "../../../index.css";
import { Course } from "../../Course/CourseSections/Course";
import { courseData } from "../../../Core/Services/data";
import NavLinks from "../../Common/Links";
import { LayOutHeaders } from "../../Common/LayOutHeaders";

const CourseList = () => {
  const data = [courseData[0], courseData[1], courseData[2]];
  return (
    <div className="w-100 flex flex-col gap-5">
      <div className="w-[83%] m-auto">
        <LayOutHeaders
          topic={"دوره ها"}
          btnText={"مشاهده ی تمام دوره ها"}
          path={"/course"}
          style={
            "bg-[#ffe6b5] text-[#8c792c] hover:bg-[#fcbf49] hover:text-[#fff]"
          }
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
