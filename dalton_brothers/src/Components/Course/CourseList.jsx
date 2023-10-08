import React from "react";

import "../../index.css";
import { Course } from "./CourseSections/Course";
import { courseData } from "../../Core/Services/data";
import { LayOutHeaders } from "../Common/TopTitles/LayOutHeaders";

const CourseList = () => {
  const data = courseData;
  return (
    <div className="w-100 flex flex-col gap-5 ">
      <LayOutHeaders topic={"لیست دوره ها"} />
      <div className="w-100 flex flex-row flex-wrap justify-center gap-3">
        {data.map((course, index) => (
          <Course {...course} key={index} />
        ))}
      </div>
    </div>
  );
};

export { CourseList };
