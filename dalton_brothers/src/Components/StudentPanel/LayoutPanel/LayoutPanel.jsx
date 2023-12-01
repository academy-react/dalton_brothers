import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import useColorMode from "../../CustomHooks/UseColorMode";
import { motion } from "framer-motion";
import { Profile } from "../Dashboard/Components/Profile/Profile";
import { PanelNavigation } from "../Dashboard/Components/PanelNavigation/PanelNavigation";
import { PanelSearch } from "../Dashboard/Components/PanelSearch/PanelSearch";
import { Notification } from "../Dashboard/Components/Notification/Notification";

import style from "../../Landing/Header/Header.module.css";


import ProfileDetails from "../../../../src/assets/Images/panel/undraw_Profile_details_re_ch9r.png";
import undrawSocial from "../../../../src/assets/Images/panel/undraw_social_thinking_re_y8cc.png";

const LayoutPanel = () => {
  const [colorMode, setColorMode] = useColorMode();

  const location = useLocation();
  return (
    <div className="relative flex flex-wrap w-full max-w-[2000px] mx-auto h-[100vh] justify-around flex-row-reverse    max-xl:bg-white">
      <div className="w-full  flex justify-between items-center flex-row-reverse px-10  py-4">
        <div className=" flex justify-center items-center ">
          <Profile />
        </div>
        <div className=" w-[600px] rounded-[30px]   flex justify-center items-center ">
          {location.pathname === "/panel/PanelCoursesList" && <PanelSearch />}
        </div>
        <div className="  flex    justify-between items-center ">
          <Notification />
        </div>
      </div>
      <div className="w-full h-[90%] flex justify-start flex-row-reverse  gap-10 pr-12 max-md:hidden">
        <div className="  scale-[80%] flex justify-start flex-col items-center relative -top-8 ">
          <PanelNavigation />

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


<PanelNavigation />


            </div>
          </div>
        </div>
        <div className="  flex flex-col items-center">
          <div className=" w-full pt-[10px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export { LayoutPanel };
