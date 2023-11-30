import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Profile } from "../Dashboard/Components/Profile/Profile";
import { PanelNavigation } from "../Dashboard/Components/PanelNavigation/PanelNavigation";
import { PanelSearch } from "../Dashboard/Components/PanelSearch/PanelSearch";
import { Notification } from "../Dashboard/Components/Notification/Notification";

import ProfileDetails from "../../../../src/assets/Images/panel/undraw_Profile_details_re_ch9r.png";
import undrawSocial from "../../../../src/assets/Images/panel/undraw_social_thinking_re_y8cc.png";

const LayoutPanel = () => {
  const location = useLocation();
  return (
    <div className='relative flex flex-wrap w-full max-w-[2000px] mx-auto h-[100vh] justify-around flex-row-reverse bg-[url("../../../../src/assets/Images/panel/17.png")] bg-no-repeat bg-cover pt-2  max-xl:bg-white'>
      <div className="w-full h-20 flex justify-between items-center flex-row-reverse px-10">
        <div className=" flex justify-center items-center ">
          <Profile />
        </div>
        <div className=" w-[600px] rounded-[30px]">
          {location.pathname === "/panel/PanelCoursesList" && <PanelSearch />}
        </div>
        <div className="  flex flex-col  w-[200px]  justify-between items-center ">
          <Notification />
        </div>
      </div>
      <div className="w-full h-[90%] flex justify-start flex-row-reverse  gap-10 pr-12">
        <div className="  scale-[80%] flex justify-start flex-col items-center relative -top-8 ">
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
