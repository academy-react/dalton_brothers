import React from "react";

// import { courseData } from "../../../../Core/Services/data";

import userGold from "../../../../../src/assets/Images/user-gold-2.png";
import AboutCourseImg from "../../../../../src/assets/Images/icons8-python-144.png";

const AboutCourse = ({
  title,
  teacherName,
  cost,
  startTime,
  courseStatusName,
  courseLevelName,
  endTime,
  imageAddress,
  capacity,
  currentRate,
}) => {
  return (
    <div>
      <div className="bg-[#F1F5F9] w-[500px] h-[390px] rounded-[25px] flex justify-center items-center mx-auto mt-[100px] relative lg:w-[950px] md:w-[700px] ">
        {/* <div className=" md:w-[190px] md:h-[190px] absolute -top-[99px] w-[150px] h-[150px]">
          <img src={AboutCourseImg } alt="" className="w-full h-full"></img>
        </div> */}
        <div className=" w-1/2 h-[300px] flex flex-col items-center justify-center">
          <div className=" md:w-[200px] md:h-[200px] h-[150px] w-[150px] flex justify-center items-center ">
            <img src={imageAddress }  alt="" className="w-3/4 h-3/4"></img>
          </div>
          <div className="flex justify-center w-full p-[15px] text-center mt-[10px] lg:text-2xl  md:text-xl  text-lg text-gray-800 font-irSans">
            {" "}
            <div className=" pr-2">{teacherName}</div>
            <div className="text-gray-500">: مدرس </div>
          </div>
          <div className="flex justify-end text-right lg:text-2xl  md:text-xl  text-lg text-gray-800 font-irSans">
            <p className="text-right  pt-[2px] pr-3">
              {" "}
              {currentRate}{" "}
            </p>
            <p className="text-right text-gray-500"> : امتیاز دوره </p>
          </div>
        </div>
        <div className=" w-1/2 h-[350px] flex flex-col justify-evenly gap-[5px] md:gap-[15px]">
          <h3 className=" lg:text-3xl  md:text-2xl  text-xl text-right pr-[40px] mt-4 font-irSBold">
            {" "}
            {title}{" "}
          </h3>
          <div className="flex justify-end text-right pr-[60px] mt-4 lg:text-2xl  md:text-xl  text-lg text-gray-800 font-irSans">
            <p className="text-right  pt-[2px] pr-3  font-irSans">
              {" "}
              {courseLevelName}{" "}
            </p>
            <p className="text-right text-gray-500 font-irSans"> : سطح دوره </p>
          </div>
          <div className="flex justify-end text-right pr-[60px]  lg:text-2xl  md:text-xl  text-lg text-gray-800  font-irSans">
            <p className="text-right  pt-[2px] pr-3">
              {" "}
              {courseStatusName}{" "}
            </p>
            <p className="text-right text-gray-500"> : وضعیت برگزاری </p>
          </div>
          <div className="flex justify-end text-right pr-[60px]  lg:text-2xl  md:text-xl  text-lg text-gray-800 font-irSans">
            <p className="text-right  pt-[2px] pr-3">
              {" "}
              {startTime}{" "}
            </p>
            <p className="text-right text-gray-500"> : تاریخ شروع دوره  </p>
          </div>
          <div className="flex justify-end text-right pr-[60px]  lg:text-2xl  md:text-xl  text-lg text-gray-800 font-irSans">
            <p className="text-right pt-[2px] pr-3">
              {" "}
              {endTime}{" "}
            </p>
            <p className="text-right text-gray-500"> : پایان دوره  </p>
          </div>
          <div className="flex justify-end text-right pr-[60px]  lg:text-2xl  md:text-xl  text-lg text-gray-800 font-irSans">
            <p className="text-right pt-[2px] pr-3">
              {" "}
              {cost}{" "}
            </p>
            <p className="text-right text-gray-500"> : هزینه دوره </p>
          </div>
          <div className="flex justify-end text-right pr-[60px]  lg:text-2xl  md:text-xl  text-lg text-gray-800 font-irSans">
            <p className="text-right pt-[2px] pr-3 pb-4">
              {" "}
              {capacity}{" "}
            </p>
            <p className="text-right text-gray-500"> : ظرفیت دوره </p>
          </div>
        </div>
        <button className="md:px-14 md:py-4 bg-[#fcbf49] md:text-xl text-md px-11 py-3 absolute -bottom-[27px] rounded-[40px] text-white font-irSans">
          {" "}
          ثبت نام{" "}
        </button>
      </div>
    </div>
  );
};

export { AboutCourse };
