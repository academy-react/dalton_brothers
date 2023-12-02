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
    <div className="relative flex flex-wrap w-full max-w-[2000px] mx-auto h-[100vh] max-2xl:h-[130vh] max-lg:h-[150vh] justify-around flex-row-reverse    ">
      <div className="w-full  flex justify-between items-center flex-row-reverse px-10  py-4">
        <div className=" flex justify-center items-center ">
          <Profile />
        </div>
        <div className=" w-[600px] rounded-[30px]   flex justify-center items-center ">
          {location.pathname === "/panel/PanelCoursesList" && <PanelSearch />}
        </div>
        <div className="  flex    justify-between items-center ml-8 ">
          <Notification />
        </div>
      </div>
      <div className="w-full h-[85%] flex justify-start flex-row-reverse  gap-10 pr-12 max-lg:pr-0 max-lg:flex-col  ">
        <div className="  lg:scale-[80%] flex justify-start flex-col items-center relative -top-8 ">
          <PanelNavigation />

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
