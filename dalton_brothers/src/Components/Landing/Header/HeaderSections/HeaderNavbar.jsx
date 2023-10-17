import React from "react";

import logo from "../../../../assets/Images/logo.png";
import { Button } from "../../../Common/buttons";
import { NavLinks } from "../../../Common/Links/NavLinks";

const HeaderNavbar = () => {
  return (
    <div className="pt-[10px] flex items-end font-irSBold">
      <div className="w-[90%] max-w-[2000px] m-auto whitespace-nowrap flex flex-row flex-wrap justify-between items-center">
        <div className="w-[70px] " >
          <img src={logo} alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-row flex-nowrap items-center justify-start gap-[80px] text-[#fdb501] text-base">
          <NavLinks text={"دوره ها"} path={"/course"}  />
          <NavLinks text={"پشتیبانی"} path={"/"}  />
          <NavLinks text={"پشتیبانی"} path={"/"}  />
        </div>
        <div className="flex flex-row flex-nowrap items-center justify-center gap-[80px] text-[#707070] text-base">
        <NavLinks text={"  اخبار و مقالات"} path={"/news"} />
          <NavLinks text={"ارتباط با ما"} path={"/"}  />
          <NavLinks text={"ارتباط با ما"} path={"/"}  />
        </div>
        
          <Button
            type={"button"}
            text={"ورود/ثبت نام"}
            style={"bg-[#fff] text-[#707070] hover:bg-[#ffefc8]  hover:cursor-pointer hover:bg-[#cccccc] transition-all duration-500 w-[150px] h-[45px] bg-slate-100 rounded-full flex justify-center items-center text-[15px]"}
            path={"/signIn"}
          />
          
        
      </div>
    </div>
  );
};

export { HeaderNavbar };
