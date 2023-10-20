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
      <div className="flex justify-between w-full h-[40%] gap-1 ">
        <div className=" w-[370px] h-[300px] ">
          <YourStock />
        </div>
        <div className=" w-[580px] h-[300px] ">
          <Specification />
        </div>
      </div>
      <div className="s flex flex-col  w-full  h-[430px] mt-5 justify-center">
        <h4 className="w-full h-[50px] text-right text-2xl">
          دوره های مورد علاقه
        </h4>
        <div className=" w-[760px] pt-7">
          <div>
            <CustomSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
