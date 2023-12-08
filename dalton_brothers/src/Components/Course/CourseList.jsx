import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";

import "../../index.css";
import { Course } from "./CourseSections/Course";
import { LayOutHeaders } from "../Common/LayOutHeaders";
import { useAppContext } from "../LayOut";
import { Filter } from "./CourseSections/Filter/Filter";
import { ScrollToTop } from "../ScrollAnimation/ScrolToTop/ScrollToTop";
import { basicGet } from "../../Core/Services/api/course/courseList/courseList";
import { onTriggerChange } from "../../Redux/Filter/trigger";
import Loading from "../Loading/Loading";

const CourseList = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.sort.sort);
  const search = useSelector((state) => state.search.search);
  const minPrice = useSelector((state) => state.priceFilter.minPrice);
  const maxPrice = useSelector((state) => state.priceFilter.maxPrice);
  const trigger = useSelector((state) => state.trigger.trigger);
  const [totalCount, setTotalCount] = useState();
  const [courseList, setCourseList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const handlePageClick = (data) => {
    const numberOfCurrentPage = data.selected + 1;
    setCurrentPage(numberOfCurrentPage);
  };

  const getCount = async () => {
    const Count = await basicGet("/Home/GetCoursesWithPagination");
    setTotalCount(Count.totalCount);
  };

  const getSearch = search ? `Query=${search}` : "";

  const getCourses = async () => {
    const result = await basicGet(
      `/Home/GetCoursesWithPagination?CostDown=${minPrice}&CostUp=${maxPrice}&${getSearch}&PageNumber=${currentPage}&RowsOfPage=${postsPerPage}&SortingCol=${sort}&SortType=DESC&TechCount=0`
    );
    setCourseList(result.courseFilterDtos);
  };
  const numberOfPage = Math.ceil(totalCount / postsPerPage);

  useEffect(() => {
    getCourses();
    getCount();
  }, []);
  useEffect(() => {
    getCourses();
  }, [currentPage, sort, search, trigger]);
  useEffect(() => {
    const handleTrigger = () => {
      dispatch(onTriggerChange(false));
    };
    handleTrigger();
  }, [maxPrice, minPrice]);
  return (
    <motion.div
      className="w-100 flex flex-col gap-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <LayOutHeaders topic={"لیست دوره ها"} /> */}
      <Filter />
    <Loading/>

      <div className="w-100 flex flex-row flex-wrap justify-center gap-10 mb-24 ">
        {courseList && courseList.length > 0 ? (
          courseList.map((course, index) => (
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
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={numberOfPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={
          "flex justify-center mx-auto text-xl items-center p-1"
        }
        pageClassName="mx-1"
        nextClassName="mx-1 p-2 "
        previousClassName="mx-1 p-2 "
        nextLinkClassName="p-2 scale-120"
        previousLinkClassName="p-2 scale-120"
        pageLinkClassName="bg-gray-200  mx-1 px-[14px] py-2 rounded-md"
        breakLinkClassName="mx-1 p-2"
        activeLinkClassName="bg-pallete-100 dark:bg-DarkPallete-100 text-white"
      ></ReactPaginate>
      <ScrollToTop />
    </motion.div>
  );
};

export { CourseList };
