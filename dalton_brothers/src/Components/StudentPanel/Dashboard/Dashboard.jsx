import React from "react";

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
    <div className=" w-full h-full flex-col pt-7 ">
      <div className="flex justify-evenly max-lg:flex-col w-full max-lg:items-center lg:h-[40%] h-[600px] gap-1 ">
        <div className=" 2xl:w-[370px] xl:w-[350px] lg:w-[300px] w-[300px] xl:h-[300px] lg:h-[250px] h-[200px]">
          <YourStock />
        </div>
        <div className=" 2xl:w-[580px] xl:w-[430px] lg:w-[350px] w-[410px] xl:h-[300px] lg:h-[250px] h-[220px]">
          <Specification />
        </div>
      </div>
      <div className="s flex flex-col w-full 2xl:h-[430px] 2xl:mt-5 xl:mt-0 mt-0 justify-center">
        <h4 className="w-full 2xl:h-[50px] xl:h-[10px] lg:h-[50px] text-right xl:text-2xl lg:text-xl text-lg xl:mt-2">
          {" "}
          مهم ترین دوره ها{" "}
        </h4>
        <div className=" xl:w-[700px] lg:w-[680px] 2xl:pt-7 lg:mt-0 pt-2 xl:mr-2 flex lg:justify-end justify-center">
          <div>
            <CustomSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
