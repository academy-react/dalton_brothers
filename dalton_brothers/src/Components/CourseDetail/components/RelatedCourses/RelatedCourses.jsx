import React, { useEffect, useState } from "react";

import { Course } from "../../../../../src/Components/Course/CourseSections/Course";
import { relatedData } from "../../../../Core/Services/data/";
import { basicGet } from "../../../../Core/Services/api/course/courseList/courseList";

const RelatedCourses = ({ teacherName,courseId}) => {
  const [OtherCourse, setOtherCourse] = useState([]);

  const getAllCourse = async () => {
    const result = await basicGet(`/Home/GetCoursesWithPagination`);
    const response = result.courseFilterDtos;
    setOtherCourse(response);
  };
  const filterAllTeacherCourses = OtherCourse.filter(
    (item) => item.teacherName == teacherName
  );
  const filterOtherTeacherCourses = filterAllTeacherCourses.filter(
    (item) => item.courseId != courseId
  );
  // console.log(teacherName,id ,filterOtherTeacherCourses);
  console.log(filterAllTeacherCourses);
  const items = filterOtherTeacherCourses.map((course, index) => (
    <Course {...course} key={index} />
  ));
  useEffect(() => {
    getAllCourse();
  }, []);

  return (
    <>
      {items.length == 0 ? (
        <></>
      ) : (
        <div className=" w-full">
          <p className="text-center h-[80px] w-full font-bold text-2xl mb-[50px] p-[30px]">
            {" "}
            دیگر دوره های این استاد{" "}
          </p>
          <div className="w-full flex justify-evenly flex-wrap gap-9">
            {items}
          </div>
        </div>
      )}
    </>
  );
};

export { RelatedCourses };
