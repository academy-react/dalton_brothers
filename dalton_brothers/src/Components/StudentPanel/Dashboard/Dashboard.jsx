import React from "react";
import { motion } from "framer-motion";
import { Profile } from "./Components/Profile/Profile";
import { PanelNavigation } from "./Components/PanelNavigation/PanelNavigation";
import { PanelSearch } from "./Components/PanelSearch/PanelSearch";
import { Specification } from "./Components/Specification/Specification";
import { YourStock } from "./Components/YourStock/YourStock";
import { Notification } from "./Components/Notification/Notification";

// import undrawSocial from "../../../../src/assets/Images/panel/undraw_social_thinking_re_y8cc.png";

import { CustomSlider } from "../../Common/CustomSlider/CustomSlider";

const Dashboard = () => {
  return (
    <div className=" w-full h-full flex-col mt-10 ">
      <div className="flex justify-evenly max-2xl:flex-col-reverse max-2xl:justify-center max-2xl:items-center max-2xl:gap-[100px] max-2xl:mt-[50px] max-2xl:mb-[150px] w-full max-lg:items-center lg:h-[40%] h-[600px] gap-8 ">
        <div className=" 2xl:w-[370px] xl:w-[350px] lg:w-[300px] w-[400px] xl:h-[250px] lg:h-[250px] h-[200px]">
          <YourStock />
        </div>
        <div className=" 2xl:w-[800px] xl:w-[430px] lg:w-[350px]  xl:h-[250px] lg:h-[250px] ">
          <Specification />
        </div>
      </div>
      <div className=" flex flex-row-reverse  w-full    ">
        {/* h-[430px] */}
        <h4 className="w-full whitespace-nowrap text-right text-xl font-irSans pr-5 dark:text-mode-50">
          علاقه مندی ها
        </h4>
        <div className="     flex ">
          <div className="scale-75 ">
            <CustomSlider component="Article" />
          </div>
          <div className="scale-75 ">
            <CustomSlider component="Course" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
