import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

import "../../index.css";
import { Course } from "./CourseSections/Course";
import { LayOutHeaders } from "../Common/LayOutHeaders";
import { useAppContext } from "../LayOut";
import { Filter } from "./CourseSections/Filter/Filter";
import { ScrollToTop } from "../ScrollAnimation/ScrolToTop/ScrollToTop";
import { basicGet } from "../../Core/Services/api/course/courseList/courseList";

// import { Pagination } from "../StudentPanel/PanelCoursesList/Pagination/Pagination";

const CourseList = () => {
  const { filteredData } = useAppContext();

  const [courseList, setCourseList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(1);
  const token = useSelector((state) => state.token.token);

  const handlePageClick = (data) => {
    const numberOfCurrentPage = data.selected + 1;
    setCurrentPage(numberOfCurrentPage);
  };

  const getCourses = async () => {

      const result = await basicGet("/Home/GetCoursesWithPagination");

      const response = result.courseFilterDtos
      setCourseList(response);
      // console.log(response);

  };

  useEffect(() => {
    getCourses();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = courseList.slice(firstPostIndex, lastPostIndex);
  const numberOfPage = Math.ceil(courseList.length / postsPerPage);
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
        { currentPosts && currentPosts.length > 0 ? (
          currentPosts.map((course, index) => (
            <Course
              {...course}
              key={index}
              setCourseList={setCourseList}
              courseList={courseList}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <ReactPaginate
        previousLabel={">"}
        nextLabel={"<"}
        breakLabel={"..."}
        pageCount={numberOfPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={
          "flex justify-content mx-auto text-xl items-center p-1 flex-row-reverse"
        }
        pageClassName="mx-1"
        nextClassName="mx-1 p-2 "
        previousClassName="mx-1 p-2 "
        nextLinkClassName="p-2 scale-120"
        previousLinkClassName="p-2 scale-120"
        pageLinkClassName="bg-gray-200 mx-1 px-[14px] py-2 rounded-md"
        breakLinkClassName="mx-1 p-2"
        activeLinkClassName="bg-orange-300 text-white"
      ></ReactPaginate>
      <ScrollToTop />
    </motion.div>
  );
};

export { CourseList };
