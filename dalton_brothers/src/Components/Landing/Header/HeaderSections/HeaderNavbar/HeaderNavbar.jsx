import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../../../Common/buttons";
import { NavLinks } from "../../../../Common/Links/NavLinks/NavLinks";
import logo from "../../../../../assets/Images/logo.png";

import style from "../../header.module.css";

const HeaderNavbar = () => {

  const navigate = useNavigate()

  return (
    <div className=" lg:items-center md:justify-around md:flex-row-reverse md:gap-[30px] md:items-end pt-[10px] px-[20px] flex flex-wrap justify-around font-irSBold">
      <div className="lg:order-3 lg:mx-0 mx-[20px] w-[70px]  order-2">
        <img src={logo} alt="" className="w-full h-full" />
      </div>
      <div className="lg:w-fit lg:order-1 md:justify-center md:w-[100%] md:m-[5px] md:px-0 w-fit max-w-[2000px] whitespace-nowrap flex flex-row-reverse flex-wrap justify-between items-center p-0 m-0  order-3">
        <Button
          type={"button"}
          value={"ورود/ثبت نام"}
          className={
            " text-[#707070] hover:bg-[#ffefc8] hover:cursor-pointer transition-all duration-500 w-[150px] h-[40px] bg-slate-100 rounded-full flex justify-center items-center text-[12px] "
          }
          onClick={()=> navigate("/signIn")}
        />
      </div>
      <div className="xl:w-[70vw] lg:w-fit lg:gap-[30px] lg:order-2 md:justify-center md:mt-[30px] md:w-[100%] md:flex flex-row hidden">
        <div className="2xl:justify-around xl:w-[50%] xl:text-xl xl:gap-[20px] flex flex-row flex-nowrap items-center justify-center gap-[10px] text-[#fdb501] text-base">
          <NavLinks text={"دوره ها"} path={"/course"} />
          <NavLinks text={"پشتیبانی"} path={"/"} />
          <NavLinks text={"پشتیبانی"} path={"/"} />
        </div>
        <div className="2xl:justify-around xl:w-[50%] xl:text-xl xl:gap-[20px] lg:text-[#707070] md:text-[#fdb501] flex flex-row flex-nowrap items-center justify-start gap-[10px] text-[#707070]">
          <NavLinks text={"  اخبار و مقالات"} path={"/news"} />
          <NavLinks text={"ارتباط با ما"} path={"/"} />
          <NavLinks text={"ارتباط با ما"} path={"/"} />
        </div>
      </div>
      {/* md responsive navbar */}
      <div className="w-[100px] bg-cover bg-center md:hidden order-1 flex">
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
  );
};

export { HeaderNavbar };
