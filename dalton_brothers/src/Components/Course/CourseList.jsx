import React from "react";
import { motion } from "framer-motion";
import "../../index.css";
import { Course } from "./CourseSections/Course";
import { LayOutHeaders } from "../Common/LayOutHeaders";
import { useAppContext } from "../LayOut";
import { Filter } from "./CourseSections/Filter/Filter";
import { ScrollToTop } from "../ScrollAnimation/ScrolToTop/ScrollToTop";

const CourseList = () => {
  const { filteredData } = useAppContext();
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
        {filteredData.map((course, index) => (
          <Course {...course} key={index} />
        ))}
      </div>
      <ScrollToTop />
    </motion.div>
  );
};

export { CourseList };
