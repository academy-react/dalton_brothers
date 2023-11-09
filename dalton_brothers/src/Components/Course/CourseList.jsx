import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../index.css";
import { Course } from "./CourseSections/Course";
import { LayOutHeaders } from "../Common/LayOutHeaders";
import { useAppContext } from "../LayOut";
import { Filter } from "./CourseSections/Filter/Filter";
import { ScrollToTop } from "../ScrollAnimation/ScrolToTop/ScrollToTop";
import { courseListApi } from "../../Core/Services/api/course/courseList";

const CourseList = () => {
  const { filteredData } = useAppContext();

  const [courseList, setCourseList] = useState([]);

  const getCourses = async () => {
    const result = await courseListApi();

    console.log(result);
    setCourseList(result);
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <motion.div
      className="w-100 flex flex-col gap-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LayOutHeaders topic={"لیست دوره ها"} />
      <Filter />
      <div className="w-100 flex flex-row flex-wrap justify-center gap-10 mb-24 ">
        {courseList && courseList.length > 0 ? (
          courseList.map((course, index) => (
            <Course {...course} key={index} />
          ))
        ) : (
          <div></div>
        )}
      </div>
      <ScrollToTop />
    </motion.div>
  );
};

export { CourseList };
