import React from "react";

import "../../index.css";
import { Course } from "./CourseSections/Course";
import { LayOutHeaders } from "../Common/LayOutHeaders";
import { useAppContext } from "../Common/LayOut";
import { Filter } from "./CourseSections/Filter/Filter";

const CourseList = () => {
  const { filteredData } = useAppContext();
  return (
    <div className="w-100 flex flex-col gap-5">
      <LayOutHeaders topic={"لیست دوره ها"} />
      <Filter />
      <div className="w-100 flex flex-row flex-wrap justify-center gap-10 mb-24">
        {filteredData.map((course, index) => (
          <Course {...course} key={index} />
        ))}
      </div>
    </div>
  );
};

export { CourseList };
