import React, { useState } from "react";

import logo from "../../../../assets/Images/logo.png";
import { Button } from "../../../Common/buttons";

const HeaderNavbar = () => {
  return (
    <div className="pt-[10px] flex items-end font-sha">
      <div className="w-[90%] max-w-[2000px] m-auto whitespace-nowrap flex flex-row flex-wrap justify-between items-center ">
        <div className="w-[70px] ">
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
        <div className="pt-[30px]">
          <Button
            type={"button"}
            text={"ورود/ثبت نام"}
            style={"bg-[#fff] text-[#707070] hover:bg-[#ffefc8]"}
          />
        </div>
      </div>
    </div>
  );
};

export { HeaderNavbar };
