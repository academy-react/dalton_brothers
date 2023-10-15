import React from "react";

import userGold from "../../../../../src/assets/Images/user-gold-2.png";
import AboutCourseImg from "../../../../../src/assets/Images/icons8-python-144.png";


const AboutCourse = () => {
  return (
    <div>
      <div className="bg-gray-200 bg-opacity-60 w-[500px] h-[350px] rounded-2xl flex justify-center items-center mx-auto mt-[100px] relative lg:w-[950px] md:w-[700px]">
        <div className=" md:w-[190px] md:h-[190px] absolute -top-[90px] w-[150px] h-[150px]">
          <img src={AboutCourseImg} alt="" className="w-full h-full"></img>
        </div>
        <div className=" w-1/2 h-[300px] flex flex-col items-center justify-center">
          <div className="border border-gray-500 md:w-[200px] md:h-[200px] h-[150px] w-[150px] rounded-full flex justify-center items-center ">
            <img src={userGold} alt="" className="w-3/4 h-3/4"></img>
          </div>
          <div className=" w-full p-[15px] text-center mt-[10px] lg:text-2xl  md:text-xl  text-lg text-gray-800">
            {" "}
            مدرس : استاد بحرالعلوم{" "}
          </div>
        </div>
        <div className=" w-1/2 h-[350px] flex flex-col justify-evenly gap-[5px] md:gap-[15px]">
          <h3 className=" lg:text-4xl  md:text-3xl  text-2xl text-right pr-[60px] "> دوره پایتون </h3>
          <p className=" text-right pr-[60px] lg:text-2xl  md:text-xl  text-lg text-gray-800">
            {" "}
            تمرین های بسیار{" "}
          </p>
          <p className="text-right pr-[60px]  lg:text-2xl  md:text-xl  text-lg text-gray-800">
            {" "}
            گواهی معتبر{" "}
          </p>
          <div className="flex justify-end text-right pr-[60px]  lg:text-2xl  md:text-xl  text-lgtext-xl text-gray-800">
            <p className="text-right"> نفر ثبت نام کرده اند </p>
            <p className="text-right text-[#fcbf49] "> 765 </p>
          </div>
        </div>
        <button className="md:px-14 md:py-4 bg-[#fcbf49] md:text-xl text-md px-11 py-3 absolute -bottom-[27px] rounded-[40px]">
          {" "}
          ثبت نام{" "}
        </button>
      </div>
    </div>
  );
};

export { AboutCourse };
