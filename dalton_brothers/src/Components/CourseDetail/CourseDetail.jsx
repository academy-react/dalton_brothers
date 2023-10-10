import React from "react";

import { AboutCourse } from "./components/AboutCourse/AboutCourse";
import { CourseIntroduction } from "./components/CourseIntroduction/CourseIntroduction";
import { Needs } from "./components/needs/Needs";
import { CourseTeacher } from "./components/CourseTeacher/CourseTeacher";

const CourseDetail = () => {
  return (
    <div className=" flex flex-col gap-[100px]">
        <AboutCourse/>
        <CourseIntroduction/>
        <Needs/>
        <CourseTeacher/>
    </div>
  );
};

export { CourseDetail };
