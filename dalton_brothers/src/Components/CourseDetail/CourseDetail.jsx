import React from "react";

import { AboutCourse } from "./components/AboutCourse/AboutCourse";
import { CourseIntroduction } from "./components/CourseIntroduction/CourseIntroduction";
import { Needs } from "./components/needs/Needs";
import { CourseTeacher } from "./components/CourseTeacher/CourseTeacher";
import { RelatedCourses } from "./components/RelatedCourses/RelatedCourses";
import { CourseComments } from "./components/CourseComment/CourseComment";

const CourseDetail = () => {
  return (
    <div className=" flex flex-col gap-[100px]">
        <AboutCourse/>
        <CourseIntroduction/>
        <Needs/>
        <CourseTeacher/>
        <CourseComments/>
        <RelatedCourses/>
    </div>
  );
};

export { CourseDetail };
