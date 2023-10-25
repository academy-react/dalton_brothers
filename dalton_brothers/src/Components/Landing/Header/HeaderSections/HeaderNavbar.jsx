import React from "react";

import { Button } from "../../../Common/buttons";
import { NavLinks } from "../../../Common/Links/NavLinks";

import logo from "../../../../assets/Images/logo.png";

import style from "../header.module.css";

const HeaderNavbar = () => {
  return (
    <div className="pt-[10px] flex items-end font-irSBold">
      <div className="w-[90%] max-w-[2000px] m-auto whitespace-nowrap flex flex-row-reverse flex-wrap justify-between items-center">
        <Button
          type={"button"}
          text={"ورود/ثبت نام"}
          style={
            "bg-[#fff] text-[#707070] hover:bg-[#ffefc8] hover:cursor-pointer hover:bg-[#cccccc] transition-all duration-500 w-[150px] h-[40px] bg-slate-100 rounded-full flex justify-center items-center text-[12px] "
          }
          path={"/signIn"}
        />
        <div className="w-[70px] ">
          <img src={logo} alt="" className="w-full h-full" />
        </div>






{/* md responsive navbar */}
        <div className="w-[100px] bg-cover bg-center md:hidden">
          <input
            className={`hidden ${style.hamInp}`}
            type="checkbox"
            name=""
            id="hamMenu"
          />
          <label
            className={`w-[40px] h-[40px] absolute top-[30px] right-[10px] cursor-pointer transition-all duration-500 bg-[url('../../../../../src/assets/Images/hamMenu.png')] bg-no-repeat bg-[length:50%] bg-center  ${style.hamLabel}`}
            htmlFor="hamMenu"
          ></label>
          <div
            className={` absolute top-0 right-[-200px] rounded-l-[10px] transition-all duration-500 overflow-hidden flex flex-col gap-[10px] text-base text-[#fdb501] text-[12px] ${style.hamContent}`}
          >
            <NavLinks text={"دوره ها"} path={"/course"} />
            <NavLinks text={"پشتیبانی"} path={"/"} />
            <NavLinks text={"پشتیبانی"} path={"/"} />
            <NavLinks text={"  اخبار و مقالات"} path={"/news"} />
            <NavLinks text={"ارتباط با ما"} path={"/"} />
            <NavLinks text={"ارتباط با ما"} path={"/"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeaderNavbar };
