import React from "react";

import { AboutCourse } from "./components/AboutCourse/AboutCourse";
import { CourseIntroduction } from "./components/CourseIntroduction/CourseIntroduction";
import { Needs } from "./components/needs/Needs";
import { CourseTeacher } from "./components/CourseTeacher/CourseTeacher";
import { RelatedCourses } from "./components/RelatedCourses/RelatedCourses";
import { CourseComments } from "./components/CourseComment/CourseComment";
import { GoToCorse } from "./components/GoToCorse/GoToCorse";
import { ScrollToTop } from "../ScrollAnimation/ScrolToTop/ScrollToTop";

const CourseDetail = () => {
  return (
    <div className="">
      <div className="mt-5">
        {/* <ScrollAnimation/> */}
        <GoToCorse />
        <ScrollToTop />
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
