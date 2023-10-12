import React from "react";

import { Course } from "./CourseSections/Course";
import { courseData } from "../../Core/Services/data";
import { LayOutHeaders } from "../Common/LayOutHeaders";

import "../../index.css";

const CourseList = () => {
  const data = courseData;
  return (
    <div className="w-100 flex flex-col gap-5 ">
      <LayOutHeaders
        topic={"لیست دوره ها"}
        btnText={"بازگشت به صفحه ی اصلی"}
        path={"/"}
        style={"text-[#fff] bg-[#6c63ff] hover:bg-[#574eff]"}
      />
      <div className="w-100 flex flex-row flex-wrap justify-center gap-3">
        {data.map((course, index) => (
          <Course {...course} key={index} />
        ))}
      </div>
    </div>
  );
};

export { CourseList };
