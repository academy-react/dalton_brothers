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
    <div className=' flex w-full h-[100vh] justify-between flex-row-reverse bg-[url("../../../../src/assets/Images/panel/17.png")] bg-cover bg-center '>
      <div className=" flex flex-col h-full w-[310px]  ">
        <div className="w-full h-[160px] flex justify-center items-center">
          <Profile />
        </div>
        <div className="bg-white w-full h-[410px] flex flex-col items-center justify-between ">
          <PanelNavigation />
        </div>
      </div>
      <div className=" flex flex-col items-center h-full w-[980px]  ">
        <div className="border border-gray-600 h-[60px] w-[500px] mt-[38px] mb-[30px] rounded-[30px]">
          <PanelSearch />
        </div>
        <div className=" w-full h-[800px]">
          <Outlet />
        </div>
      </div>
      <div className="  flex flex-col w-[310px] justify-between ">
        <div className="flex h-[90px] w-full justify-center items-center">
          <Notification />
        </div>
        <div className="h-[400px] w-[470px] mb-[20px] ml-2">
          {location.pathname === "/panel/EditProfile" && (
            <img src={ProfileDetails} alt="" className="w-full h-full"></img>
          )}
          {location.pathname === "/panel" && (
            <img src={undrawSocial} alt="" className="w-full h-full"></img>
          )}
        </div>
      </div>
    </div>
  );
};
// <div className=' w-full h-[55%] flex justify-between flex-row-reverse'>
//     <div className='w-[310px] flex flex-col'>
//         <div className='w-full h-[160px] flex justify-center items-center'>
//             <Profile/>
//         </div>
//         <div className='bg-white w-full h-[410px] flex flex-col items-center justify-between '>
//             <PanelNavigation/>
//         </div>
//     </div>
//     <div className=' w-[980px] flex flex-col items-center justify-between'>
//         <div className='border border-gray-600 h-[60px] w-[500px] mt-[38px] mb-[30px] rounded-[30px]'>
//             <PanelSearch />
//         </div>
// {/* //////////            top and main of dashboard of panel             /////////  */}
//         <div className=' w-full h-[340px] flex justify-between mt-[15px]'>
//             <div className=' w-[370px] h-[300px] mt-[10px] '>

//             </div>
//             <div className=' w-[580px] h-[300px] mt-[10px]'>

//             </div>
//         </div>
//     </div>
//     <div className=' w-[310px] h-[90px] flex justify-center items-center'>
//         <Notification/>
//     </div>
// </div>

export { LayoutPanel };
