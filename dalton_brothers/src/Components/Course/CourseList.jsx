import React from "react";

import "../../index.css";
import { Course } from "./CourseSections/Course";
import { courseData } from "../../Core/Services/data";
import { LayOutHeaders } from "../Common/LayOutHeaders";
import { useAppContext } from "../Common/LayOut";

const CourseList = () => {
  const { sortedData } = useAppContext();
  return (
    <div className="w-100 flex flex-col gap-5 ">
      <LayOutHeaders topic={"لیست دوره ها"} />
      <div className="w-100 flex flex-row flex-wrap justify-center gap-10 mb-24">
        {sortedData.map((course, index) => (
          <Course {...course} key={index} />
        ))}
      </div>
    </div>
  );
};

export { CourseList };
