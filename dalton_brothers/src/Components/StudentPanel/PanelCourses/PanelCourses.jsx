import React from "react";
import { motion } from "framer-motion";
import { MyCourse } from "./Component/MyCourse/MyCourse";
import { myCourseData } from "../../../Core/Services/data";

const PanelCourses = () => {
  return (
    <div className=" w-full h-full flex flex-col pt-7 px-2 font-irSans">
      <div className=" w-full h-[100px] flex justify-evenly items-center flex-row-reverse xl:text-xl text-lg whitespace-nowrap">
        <div className="w-[130px] h-[50px] text-center text-gray-600">
          تصویر
        </div>
        <div className="w-[130px] h-[50px] text-center text-gray-600">
          نام دوره
        </div>
        <div className="w-[130px] h-[50px] text-center text-gray-600">مدرس</div>
        <div className="w-[130px] h-[50px] text-center text-gray-600">ترم</div>
        <div className="w-[130px] h-[50px] text-center text-gray-600 ">
          تاریخ شروع
        </div>
        <div className="w-[130px] h-[50px] text-center text-gray-600">قیمت</div>
        <div className="w-[60px] h-[50px] text-center text-gray-600"> </div>
      </div>
      <div className="w-full min-h-[200px] pt-3 flex flex-col gap-1">
        {myCourseData.map((item, index) => (
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
    </div>
  );
};

export { PanelCourses };
