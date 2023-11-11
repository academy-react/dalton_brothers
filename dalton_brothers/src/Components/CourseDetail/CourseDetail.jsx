import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { AboutCourse } from "./components/AboutCourse/AboutCourse";
import { CourseIntroduction } from "./components/CourseIntroduction/CourseIntroduction";
import { Needs } from "./components/needs/Needs";
import { CourseTeacher } from "./components/CourseTeacher/CourseTeacher";
import { RelatedCourses } from "./components/RelatedCourses/RelatedCourses";
import { CourseComments } from "./components/CourseComment/CourseComment";
import { GoToCorse } from "./components/GoToCorse/GoToCorse";
import { ScrollToTop } from "../ScrollAnimation/ScrolToTop/ScrollToTop";
import { basicGet } from "../../Core/Services/api/course/courseList";

const CourseDetail = () => {
  const [CourseDetail, setCourseDetail] = useState([]);
  const params = useParams();

  const getCourseDetail = async () => {
    const result = await basicGet("/Home/GetCoursesTop?count=400");
    setCourseDetail(result);
    console.log(result);
  };
  useEffect(() => {
    getCourseDetail();
  }, [params.courseId]);

  const item = CourseDetail.filter((item) => item.courseId === params.courseId).map(
    (item, index) => (
      <div className=" flex flex-col gap-[100px]" key={index}>
        <AboutCourse {...item}/>
        <CourseIntroduction {...item}/>
        <Needs />
        <CourseTeacher />
        <CourseComments />
        <RelatedCourses />
      </div>
    )
  );

  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mt-5">
        {/* <ScrollAnimation/> */}
        <GoToCorse />
        <ScrollToTop />
      </div>
      {item}
      {/* <div className=" flex flex-col gap-[100px] ">
        <AboutCourse />
        <CourseIntroduction />
        <Needs />
        <CourseTeacher />
        <CourseComments />
        <RelatedCourses />
      </div> */}
    </motion.div>
  );
};

export { CourseDetail };
