import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { AboutCourse } from "./components/AboutCourse/AboutCourse";
import { CourseIntroduction } from "./components/CourseIntroduction/CourseIntroduction";
import { Needs } from "./components/needs/Needs";
import { CourseTeacher } from "./components/CourseTeacher/CourseTeacher";
import { RelatedCourses } from "./components/RelatedCourses/RelatedCourses";
import { CourseComments } from "../Common/Comment/CourseComment/CourseComment";
import { GoToCorse } from "./components/GoToCorse/GoToCorse";
import { ScrollToTop } from "../ScrollAnimation/ScrolToTop/ScrollToTop";
import { getDetail } from "../../Core/Services/api/course/courseDetail/courseDetail";

const CourseDetail = () => {
  const [CourseDetail, setCourseDetail] = useState([]);
  const params = useParams();

  const getCourseDetail = async () => {
    const result = await getDetail(
      `/Home/GetCourseDetails?CourseId=${params.id}`
    );
    setCourseDetail([result]);
  };
  useEffect(() => {
    getCourseDetail();
  }, []);
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mt-5">
        <GoToCorse />
        <ScrollToTop />
      </div>
      {CourseDetail.map((item, index) => (
        <div className=" flex flex-col gap-[100px]" key={index}>
          <AboutCourse
            {...item}
            startTime={item.startTime.split("T")[0].replaceAll("-", " / ")}
            endTime={item.endTime.split("T")[0].replaceAll("-", " / ")}
          />
          <CourseIntroduction {...item} />
          <Needs />
          <CourseTeacher />
          <CourseComments id={item.courseId} />
          <RelatedCourses
            teacherName={item.teacherName}
            courseId={item.courseId}
          />
        </div>
      ))}
    </motion.div>
  );
};

export { CourseDetail };
