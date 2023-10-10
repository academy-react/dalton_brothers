import React from "react";

import userGold from "../../../../../src/assets/Images/user-gold-2.png";

const AboutCourse = () => {
  return (
    <div>
      <div className="bg-gray-200 opacity-60 w-[950px] h-[500px] rounded-2xl flex justify-center items-center mx-auto mt-[100px] relative">
        <div className="bg-indigo-400 w-[190px] h-[190px] absolute -top-[90px]"></div>
        <div className=" w-1/2 h-[300px] flex flex-col items-center">
          <div className="border border-gray-500 w-[200px] h-[200px] rounded-full flex justify-center items-center ">
            <img src={userGold} alt="" className="w-3/4 h-3/4"></img>
          </div>
          <div className=" w-full p-[15px] text-center mt-[10px] text-2xl text-gray-800">
            {" "}
            مدرس : استاد بحرالعلوم{" "}
          </div>
        </div>
        <div className=" w-1/2 h-[350px] flex flex-col justify-evenly gap-[15px]">
          <h3 className="text-4xl text-right pr-[60px] "> دوره پایتون </h3>
          <p className=" text-right pr-[60px] text-xl text-gray-800">
            {" "}
            تمرین های بسیار{" "}
          </p>
          <p className="text-right pr-[60px] text-xl text-gray-800">
            {" "}
            گواهی معتبر{" "}
          </p>
          <div className="flex justify-end text-right pr-[60px] text-xl text-gray-800">
            <p className="text-right"> نفر ثبت نام کرده اند </p>
            <p className="text-right text-[#fcbf49] "> 765 </p>
          </div>
        </div>
        <button className="px-14 py-4 bg-[#fcbf49] text-xl absolute -bottom-[27px] rounded-[40px]">
          {" "}
          ثبت نام{" "}
        </button>
      </div>
    </div>
  );
};

export { AboutCourse };
