import React from "react";

import { AboutCourse } from "./components/AboutCourse/AboutCourse";
import { CourseIntroduction } from "./components/CourseIntroduction/CourseIntroduction";
import { Needs } from "./components/needs/Needs";
import { CourseTeacher } from "./components/CourseTeacher/CourseTeacher";
import { RelatedCourses } from "./components/RelatedCourses/RelatedCourses";
import { CourseComments } from "./components/CourseComment/CourseComment";
import { GoToCorse } from "./components/GoToCorse/GoToCorse";
// import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation";

const CourseDetail = () => {
  return (
    <div className="">
      <div className="mt-5">
        {/* <ScrollAnimation/> */}
        <GoToCorse />
      </div>
      <div className=" flex flex-col gap-[100px] ">
        <AboutCourse />
        <CourseIntroduction />
        <Needs />
        <CourseTeacher />
        <CourseComments />
        <RelatedCourses />
      </div>
    </div>
  );
};

export { CourseDetail };
