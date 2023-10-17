import React from "react";

import logo from "../../../../assets/Images/logo.png";
import { Button } from "../../../Common/buttons";
import  NavLinks  from "../../../Common/Links";


const HeaderNavbar = () => {
  return (
    <div className="pt-[10px] flex items-end font-sha">
      <div className="w-[95%] max-w-[2000px] m-auto whitespace-nowrap flex flex-row flex-wrap justify-between">
        <div>
          <img src={logo} alt="" className="w-[80px]" />
        </div>
        <div className="flex flex-row flex-nowrap items-center justify-start text-[#fdb501] text-xl">
          <NavLinks text={"دوره ها"} path={"/course"} />
          <NavLinks text={"پشتیبانی"} path={"/"} />
        </div>
        <div className="flex flex-row flex-nowrap items-center justify-center text-[#707070] text-xl">
          <NavLinks text={"  اخبار و مقالات"} path={"/news"} />
          <NavLinks text={"ارتباط با ما"} path={"/"} />
        </div>
        <div className="pt-[30px]">
          <Button
            type={"button"}
            text={"ورود/ثبت نام"}
            style={"bg-[#fff] text-[#707070] hover:bg-[#ffefc8]"}
            path={"/signIn"}
          />
        </div>
      </div>
    </div>
  );
};

export { HeaderNavbar };
