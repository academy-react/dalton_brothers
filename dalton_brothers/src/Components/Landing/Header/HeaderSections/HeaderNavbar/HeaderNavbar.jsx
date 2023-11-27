import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { NavLinks } from "../../../../Common/Links/NavLinks/NavLinks";
import logo from "../../../../../assets/Images/logo.png";
import DarkModeLogo from "../../../../../assets/Images/mode-logo.png";

import style from "../../header.module.css";
import useColorMode from "../../../../CustomHooks/UseColorMode";

import darkModeImg from "../../../../../assets/Images/darkMode.png";
import lightModeImg from "../../../../../assets/Images/darkMode.png";

import NightModeBtn from "../../../../../assets/Images/darkMode.png";
import LightModeBtn from "../../../../../assets/Images/lightMode.png";
import { getItem } from "../../../../../Core/Services/common/storage.services";
import { useNavigate } from "react-router";

const HeaderNavbar = () => {
  const [roleName, setRoleName] = useState("");
  const token = useSelector((state) => state.token.token);
const [colorMode, setColorMode] = useColorMode();


  const role = getItem("userRole") ? getItem("userRole") : "Student";
  const getRole = () => {
    if (role.indexOf("Student") !== -1) {
      setRoleName("panel");
      if (role.indexOf("Teacher") !== -1) {
        setRoleName("masterPanel");
      }
    }
    if (role.indexOf("Teacher") !== -1) {
      setRoleName("masterPanel");
    } else if (role.indexOf("Administrator") !== -1) {
      setRoleName("Administrator");
    }
    console.log(role);
  };
  useEffect(() => {
    getRole();
  }, []);
  return (
    <div className="2xl:flex-nowrap 2xl:justify-around xl:justify-start lg:items-center md:justify-around md:flex-row-reverse 2xl:gap-[30px] md:items-end pt-[10px] px-[20px] flex flex-wrap justify-between font-irSBold">
      <div className="lg:order-3 lg:mx-0 !mx-[20px] w-[70px]  order-2">
        {/* <img   alt="" className={colorMode==="dark" ? src={logo} : src={DarkModeLogo}}/> */}
        <img   alt="" src={colorMode==="dark" ? DarkModeLogo : logo}/>
      </div>
      <div className=" flex justify-center items-center ">
        <button
          onClick={() => {
            setColorMode(colorMode === "light" ? "dark" : "light");
          }}
          className="w-16 h-10 flex justify-center items-center   mt-[2px]  "
        >
        <img   alt="" src={colorMode==="dark" ? NightModeBtn : LightModeBtn} className=""/>
          
        </button>
        

      <div className="lg:w-[200px] lg:order-1 md:justify-center md:w-[100%] md:m-[5px] md:px-0 w-fit max-w-[2000px] whitespace-nowrap flex flex-row-reverse flex-wrap justify-between items-center p-0 m-0  order-3">
        {token ? (
          <NavLinks
            Children={"ورود به پنل"}
            className=" text-[#707070] 2xl:w-[165px] hover:bg-[#ffefc8] hover:cursor-pointer transition-all duration-500 max-[500px]:w-[150px] w-[100px] h-[40px] bg-slate-100 rounded-full flex justify-center items-center text-[15px] "
            path={roleName}
          />
        ) : (
          <NavLinks
            Children={"ورود/ثبت نام"}
            className=" text-[#707070] 2xl:w-[165px] hover:bg-[#ffefc8] hover:cursor-pointer transition-all duration-500 max-[500px]:w-[150px] w-[100px] h-[40px] bg-slate-100 rounded-full flex justify-center items-center text-[15px] "
            path={"/signIn"}
          />
        )}
      </div></div>

      <div className="xl:w-[70vw] lg:gap-[30px] lg:order-2 md:justify-center md:mt-[10px] md:w-[100%] md:flex flex-row hidden  ">
        <div className="2xl:justify-around xl:w-[70%] xl:text-xl xl:gap-[40px] flex flex-row flex-nowrap items-center justify-center gap-[10px] dark:text-mode-50  text-[#fdb501] text-base ">
          <NavLinks Children={"دوره ها"} path={"/course"} />
          <NavLinks Children={"پشتیبانی"} path={"/"} />
          <NavLinks Children={"اساتید"} path={"/"} />
          <NavLinks Children={"دسته بندی"} path={"/"} />
        </div>
        <div className="2xl:justify-center xl:w-[50%] xl:text-xl xl:gap-[60px] lg:text-mode-100 md:text-[#fdb501] flex flex-row flex-nowrap items-center justify-center gap-[10px] text-mode-700">
          <NavLinks Children={"ارتباط با ما"} path={"/"} />
          <NavLinks Children={"  اخبار و مقالات"} path={"/news"} />
        </div>
      </div>
      {/* md responsive navbar */}
      <div className="w-[40px] bg-cover bg-center md:hidden order-1 flex">
        <input
          className={`hidden ${style.hamInp}`}
          type="checkbox"
          name=""
          id="hamMenuLayout"
        />
        <label
          className={`w-[40px] h-[40px] absolute top-[30px] right-[10px] cursor-pointer transition-all duration-500 bg-[url('../../../../../src/assets/Images/hamMenu.png')] bg-no-repeat bg-[length:50%] bg-center  ${style.hamLabel}`}
          htmlFor="hamMenuLayout"
        ></label>
        <div
          className={` absolute top-0 right-[-200px] rounded-l-[10px] transition-all duration-500 overflow-hidden flex flex-col gap-[10px] text-base text-[#fdb501] text-[12px] ${style.hamContent}`}
        >
          <NavLinks Children={"دوره ها"} path={"/course"} />
          <NavLinks  Children={"دسته بندی"} path={"/"} />
          <NavLinks Children={"پشتیبانی"} path={"/"} />
          <NavLinks Children={"  اخبار و مقالات"} path={"/news"} />
          <NavLinks Children={"اساتید"} path={"/"} />
          <NavLinks Children={"ارتباط با ما"} path={"/"} />
        </div>
      </div>
    </div>
    
  )
};

export { HeaderNavbar };
