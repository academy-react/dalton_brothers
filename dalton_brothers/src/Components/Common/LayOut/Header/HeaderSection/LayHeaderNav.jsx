import React from "react";

import {NavLinks} from '../../'

import logo from "../../../../../assets/Images/layOut-logo.png";
import sun from "../../../../../assets/Images/sun.png";

import style from "../../layOut.module.css";

const LayHeaderNav = () => {
  return (
    <div className={style.headerBox1}>
      {/* logo */}
      <div className="">
        <img src={logo} alt="" />
      </div>
      <div className=" flex flex-row-reverse flex-wrap justify-center gap-[75px] items-center font-est text-xl text-gray-500">
        {/* items */}
        
        <NavLinks/>     خانه
        <NavLinks/>     خدمات
        <NavLinks/>     دوره ها
        <NavLinks/>     اخبار و مقالات
        <NavLinks/>     ارتباط با ما
      </div>
      {/* dark mode bliad */}
      <div className="">
        <img src={sun} alt="" className=" w-[40px]" />
      </div>
      {/* button for sign in or enter */}
      <div className="bg-gray-200  w-[300px] p-2 flex flex-row-reverse  rounded-full relative font-est p- text-slate-600">
        <button
          type="button"
          className="bg-[#fff] w-[150px] h-11 text-center py-[12px] shadow-ri shadow-slate-400 rounded-full absolute left-[12px] top-[10px]"
        >
          ثبت نام
        </button>
        <button
          type="button"
          className="bg-[#fcbf49] w-[150px] h-12 text-center py-[12px]  rounded-full"
        >
          ورود
        </button>
      </div>
    </div>
  );
};

export { LayHeaderNav };
