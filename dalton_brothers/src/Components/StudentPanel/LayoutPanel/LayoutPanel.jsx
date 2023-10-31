import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Profile } from "../Dashboard/Components/Profile/Profile";
import { PanelNavigation } from "../Dashboard/Components/PanelNavigation/PanelNavigation";
import { PanelSearch } from "../Dashboard/Components/PanelSearch/PanelSearch";
import { Notification } from "../Dashboard/Components/Notification/Notification";

import ProfileDetails from "../../../../src/assets/Images/panel/undraw_Profile_details_re_ch9r.png";
import undrawSocial from "../../../../src/assets/Images/panel/undraw_social_thinking_re_y8cc.png";

const LayoutPanel = () => {
  const location = useLocation();
  return (
    <div className='relative flex flex-wrap w-full max-w-[2000px] mx-auto h-[100vh] justify-around flex-row-reverse bg-[url("../../../../src/assets/Images/panel/17.png")] bg-no-repeat bg-cover pt-10 '>
      <div className="h-full 2xl:w-[310px] w-[220px] relative">
        <div className="w-full flex justify-center items-center">
          <Profile />
        </div>
        <div className=" w-full scale-[80%] ">
          <PanelNavigation />
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <div className="border border-gray-300 w-[70%] rounded-[30px]">
          <PanelSearch />
        </div>
        <div className=" w-full pt-[10px]">
          <Outlet />
        </div>
      </div>
      <div className="  flex flex-col 2xl:w-[300px] xl:w-[160px] lg:w-[110px] w-[100px]  justify-between ">
        <div className="absolute top-[30px] left-[30px]">
          <Notification />
        </div>
      </div>
    </div>
  );
};

export { LayoutPanel };
