import React from "react";

import logo from "../../../../../../assets/Images/layOut-logo.png";
import sun from "../../../../../../assets/Images/sun.png";

import style from "../../../layOut.module.css";
import { NavLinks } from "../../../../Links/NavLinks/NavLinks";


const LayHeaderNav = () => {
  return (
    <div className={style.headerBox1}>
      {/* logo */}
      <div className="w-16 h-18">
        <img className="w-full h-full" src={logo} alt="" />
      </div>
      <div className=" flex flex-row-reverse flex-wrap justify-center gap-[75px] items-center font-irSans text-xl text-gray-500">
        {/* items */}
        <NavLinks text={"خانه"} path={"/"}/>
        <NavLinks text={"دوره ها"} path={"/course"} />
        <NavLinks text={"اخبار و مقالات"} path={"/news"} />
        <NavLinks text={"ارتباط با ما"} path={"/"}  />
      </div>
      {/* dark mode */}
      <div className="">
        <img src={sun} alt="" className=" w-[40px]" />
      </div>
      {/* button for sign in or enter */}
      <div className="bg-zinc-100  w-[300px] p-2 flex flex-row-reverse  rounded-full relative font-irSBold text-slate-600 mr-9 xl: mr-0">
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
