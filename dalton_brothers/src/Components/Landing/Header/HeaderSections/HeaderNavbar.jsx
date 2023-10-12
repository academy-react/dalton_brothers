import React, { useState } from "react";

import logo from "../../../../assets/Images/logo.png";

const HeaderNavbar = () => {
  return (
    <div className="pt-[10px] flex items-end font-sha">
      <div className="w-[90%] max-w-[2000px] m-auto whitespace-nowrap flex flex-row flex-wrap justify-between items-center ">
        <div className="w-[70px] " >
          <img src={logo} alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-row flex-nowrap items-center justify-start gap-[80px] text-[#fdb501] text-base">
          <div>دوره ها</div>
          <div>پشتیبانی</div>
          <div>پشتیبانی</div>
        </div>
        <div className="flex flex-row flex-nowrap items-center justify-center gap-[80px] text-[#707070] text-base">
          <div>اخبار و مقالات</div>
          <div>ارتباط با ما</div>
          <div>ارتباط با ما</div>
        </div>
      
          <button className="hover:cursor-pointer hover:bg-[#cccccc] transition-all duration-500 w-[150px] h-[45px] bg-slate-100 rounded-full flex justify-center items-center text-[#707070]">ورود/ثبت نام</button>
        
      </div>
    </div>
  );
};

export { HeaderNavbar };


