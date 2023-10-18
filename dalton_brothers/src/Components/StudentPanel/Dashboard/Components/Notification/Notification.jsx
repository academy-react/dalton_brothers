import React from "react";

import message from "../../../../../assets/Images/panel/icons8-message-64.png";
import notif from "../../../../../assets/Images/panel/icons8-notification-64.png";

const Notification = () => {
  return (
    <div className=" md:w-[120px] md:h-[50px] w-[70px] h-[30px] flex justify-between ">
      <div className=" h-full lg:w-[50px] w-[40px] lg:h-full">
        <div className="border border-gray-500 w-[25px] h-[25px] rounded-full relative top-6 right-1 bg-red-400 text-center"> 2 </div>
        <img src={notif} alt="" className="w-full h-full"></img>
      </div>
      <div className=" h-full lg:w-[50px] w-[40px] lg:h-full">
      <div className="border border-gray-500 w-[25px] h-[25px] rounded-full relative top-6 right-1 bg-green-400 text-center"> 1 </div>
        <img src={message} alt="" className="w-full h-full"></img>
      </div>
    </div>
  );
};

export { Notification };
