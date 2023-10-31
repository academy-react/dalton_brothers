import React from "react";
import { motion } from "framer-motion";
import { MyCourse } from "../PanelCourses/Component/MyCourse/MyCourse";
import { allCourseData } from "../../../Core/Services/data";
import { Pagination } from "./Pagination/Pagination";

const PanelCoursesList = () => {
  return (
    <div className=" w-full h-full flex flex-col pt-7 px-2 font-irSans">
      <div className=" w-full xl:h-[100px] h-[60px] flex justify-evenly items-center flex-row-reverse xl:text-xl text-lg whitespace-nowrap">
        <div className="w-[130px] xl:h-[50px] h-[40px] text-center text-gray-600 ">
          تصویر
        </div>
        <div className="w-[130px] xl:h-[50px] h-[40px] text-center text-gray-600">
          نام دوره
        </div>
        <div className="w-[130px] xl:h-[50px] h-[40px] text-center text-gray-600">
          مدرس
        </div>
        <div className="w-[130px] xl:h-[50px] h-[40px] text-center text-gray-600">
          ترم
        </div>
        <div className="w-[130px] xl:h-[50px] h-[40px] text-center text-gray-600">
          تاریخ شروع
        </div>
        <div className="w-[130px] xl:h-[50px] h-[40px] text-center text-gray-600">
          قیمت
        </div>
        <div className="w-[60px] xl:h-[50px] h-[40px] text-center text-gray-600"></div>
      </div>
      <div className="w-full h-[500px] pt-3 flex flex-col gap-1">
        {allCourseData.map((item, index) => (
          <MyCourse
            coursePic={item.coursePic}
            courseName={item.courseName}
            courseMaster={item.courseMaster}
            term={item.term}
            date={item.date}
            price={item.price}
            key={index}
          />
        ))}
      </div>
      <div className="bg-red-200 w-full h-[90px] ">
        <Pagination />
      </div>
    </div>
  );
};

export { PanelCoursesList };
