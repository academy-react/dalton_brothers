import React, { useState } from "react";

import logo from "../../../../assets/Images/logo.png";

const HeaderNavbar = () => {
  return (
    <div className="pt-[10px] flex items-end font-sha">
      <div className="w-[95%] max-w-[2000px] m-auto whitespace-nowrap flex flex-row flex-wrap justify-between">
        <div>
          <img src={logo} alt="" className="w-[80px]" />
        </div>
        <div className="flex flex-row flex-nowrap items-center justify-start gap-[50px] text-[#fdb501] text-xl">
          <div>دوره ها</div>
          <div>پشتیبانی</div>
        </div>
        <div className="flex flex-row flex-nowrap items-center justify-center gap-[50px] text-[#707070] text-xl">
          <div>اخبار و مقالات</div>
          <div>ارتباط با ما</div>
        </div>
        <div className="pt-[30px]">
          <button className="hover:cursor-pointer hover:bg-[#cccccc] transition-all duration-500 w-[200px] h-[50px] bg-slate-100 rounded-full flex justify-center items-center text-[#707070]">ورود/ثبت نام</button>
        </div>
      </div>
    </div>
  );
};

export { HeaderNavbar };


