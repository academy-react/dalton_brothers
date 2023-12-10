import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
import toast from "react-hot-toast";

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
  const teacherId = useSelector((state) => state.teacherId.teacherId);
  // const order = useSelector((state) => state.order.order);
  const listTech = useSelector((state) => state.listTech.listTech);
  const minPrice = useSelector((state) => state.priceFilter.minPrice);
  const maxPrice = useSelector((state) => state.priceFilter.maxPrice);
  const trigger = useSelector((state) => state.trigger.trigger);
  const [totalCount, setTotalCount] = useState();
  const [listTech1, setlistTech1] = useState();
  const [TeacherId1, setTeacherId1] = useState();
  const [courseList, setCourseList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  console.log(teacherId,listTech);
  const handlePageClick = (data) => {
    const numberOfCurrentPage = data.selected + 1;
    setCurrentPage(numberOfCurrentPage);
  };

  // const newOrder = JSON.parse(order);

  // const getCount = async () => {
  //   const Count = await basicGet("/Home/GetCoursesWithPagination");
  //   setTotalCount(Count.totalCount);
  // };

  const getSearch = search ? `Query=${search}` : "";
  const getlistTech = listTech ? `&TechCount=1&ListTech=${listTech}` : "";
  const getTeacherId = teacherId ? `TeacherId=${teacherId}` : "";
  // const getOrder = `SortType=${newOrder}`;



  const getCourses = async () => {
         const result = await basicGet(
           `/Home/GetCoursesWithPagination?CostDown=${minPrice}&CostUp=${maxPrice}&${getSearch}&PageNumber=${currentPage}&RowsOfPage=${postsPerPage}&SortingCol=${sort}&${getlistTech}&${getTeacherId}`
         );
         // setPostsPerPage(result.courseFilterDtos.length)
         setCourseList(result.courseFilterDtos);
         setTotalCount(result.totalCount);
         console.log(result);    
    // if (TeacherId == undefined) {
    //   if (listTech == undefined) {
    //     const result = await basicGet(
    //       `/Home/GetCoursesWithPagination`
    //     );
    //     // setPostsPerPage(result.courseFilterDtos.length)
    //     setCourseList(result.courseFilterDtos);
    //     setTotalCount(result.totalCount);
    //     console.log(result);
    //   } else {
    //     const result = await basicGet(
    //       `/Home/GetCoursesWithPagination?CostDown=${minPrice}&CostUp=${maxPrice}&${getSearch}&PageNumber=${currentPage}&RowsOfPage=${postsPerPage}&SortingCol=${sort}&SortType=DESC&TechCount=1&ListTech=${listTech}`
    //     );
    //     setCourseList(result.courseFilterDtos);
    //     console.log(result);
    //     setTotalCount(result.totalCount);
    //   toast.success("فیلتر اعمال شد");
    //   }
    // } else {
    //   if(listTech == undefined){
    //     const result = await basicGet(
    //       `/Home/GetCoursesWithPagination?CostDown=${minPrice}&CostUp=${maxPrice}&${getSearch}&PageNumber=${currentPage}&RowsOfPage=${postsPerPage}&SortingCol=${sort}&SortType=DESC&TeacherId=${TeacherId}`
    //     );
    //     setCourseList(result.courseFilterDtos);
    //     console.log(result);
    //     setTotalCount(result.totalCount);  
    //   }
    //   else{
    //     const result = await basicGet(
    //       `/Home/GetCoursesWithPagination?CostDown=${minPrice}&CostUp=${maxPrice}&${getSearch}&PageNumber=${currentPage}&RowsOfPage=${postsPerPage}&SortingCol=${sort}&SortType=DESC&TeacherId=${TeacherId}&TechCount=1&ListTech=${listTech}`
    //     );
    //     setCourseList(result.courseFilterDtos);
    //     console.log(result);
    //     setTotalCount(result.totalCount);  
    //   }
    //   toast.success("فیلتر اعمال شد");
    // }
    // if(listTech == undefined){
    //   const result = await basicGet(`/Home/GetCoursesWithPagination?CostDown=${minPrice}&CostUp=${maxPrice}&${getSearch}&PageNumber=${currentPage}&RowsOfPage=${postsPerPage}&SortingCol=${sort}&SortType=DESC`);
    //   setCourseList(result.courseFilterDtos);
    //   console.log(result);
    // }
    // else{
    // const result = await basicGet(`/Home/GetCoursesWithPagination?CostDown=${minPrice}&CostUp=${maxPrice}&${getSearch}&PageNumber=${currentPage}&RowsOfPage=${postsPerPage}&SortingCol=${sort}&SortType=DESC&TechCount=1&ListTech=${listTech}`);
    // setCourseList(result.courseFilterDtos);
    // console.log(result);
    // }
  };
  const numberOfPage = Math.ceil(totalCount / postsPerPage);

  useEffect(() => {
    getCourses();
  }, []);
  useEffect(() => {
    getCourses();
  }, [currentPage, sort, search, trigger,teacherId,listTech]);
  useEffect(() => {
    const handleTrigger = () => {
      dispatch(onTriggerChange(false));
    };
    handleTrigger();
  }, [maxPrice, minPrice]);
  // useEffect(() => {
  //   const newOrder = JSON.parse(order)
  // }, [])
  
  return (
    <motion.div
      className="w-100 flex flex-col gap-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LayOutHeaders topic={"لیست دوره ها"} />
      <Filter setlistTech={setlistTech1} setTeacherId={setTeacherId1} />
      <Loading />

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
