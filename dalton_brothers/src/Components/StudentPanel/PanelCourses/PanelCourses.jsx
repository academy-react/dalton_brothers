import React, { useState, useEffect } from "react";
import { MyCourse } from "./Component/MyCourse/MyCourse";
import { basicGet } from "../../../Core/Services/api/course/courseList/courseList";

const PanelCourses = () => {
  const [courseListCount, setCourseListCount] = useState(null);
  const [courseList, setCourseList] = useState(null);
  const [reservedCourses, setReservedCourses] = useState([]);

  const getCount = async () => {
    const count = await basicGet("/SharePanel/GetMyCoursesReserve");
    setCourseListCount(count);
    const result = await basicGet("/Home/GetCoursesWithPagination");
    setCourseList(result.courseFilterDtos);
  };

  const getCourseDetail = async () => {
    if (courseList) {
      const reservedCoursesArray = courseListCount.map((el) =>
        courseList.filter((ele) => ele.courseId === el.courseId)
      );
      const reservedCourses = reservedCoursesArray.map((el) => el[0]);
      setReservedCourses(reservedCourses);
    }
  };

  useEffect(() => {
    getCount();
  }, []);
  useEffect(() => {
    getCourseDetail();
  }, [courseList]);
  return (
    <div className=" w-full h-full flex flex-col pt-7 px-2 font-irSans">
      <div className=" w-full h-[100px] flex xl:justify-evenly justify-start items-center flex-row-reverse xl:text-xl text-lg whitespace-nowrap">
        <div className="w-[80px] h-[50px] text-center text-gray-600">تصویر</div>
        <div className="w-[210px] h-[50px] text-center text-gray-600">
          نام دوره
        </div>
        <div className="w-[170px] h-[50px] text-center text-gray-600">مدرس</div>
        <div className="w-[130px] h-[50px] text-center text-gray-600">
          وضعیت
        </div>
        <div className="w-[130px] h-[50px] text-center text-gray-600">قیمت</div>
        <div className="w-[60px] h-[50px] text-center text-gray-600"> </div>
      </div>
      <div className="w-full min-h-[200px] pt-3 flex flex-col gap-1">
        {reservedCourses &&
          reservedCourses.map((item, index) => (
            <MyCourse
              coursePic={item.tumbImageAddress}
              courseName={item.title}
              courseMaster={item.teacherName}
              term={item.statusName}
              state={item.levelName}
              price={item.cost}
              key={index}
              reserveId={courseListCount[index].reserveId}
            />
          ))}
      </div>
    </div>
  );
};

export { PanelCourses };
