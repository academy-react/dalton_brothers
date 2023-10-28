import React from "react";

import message from "../../../../../assets/Images/panel/icons8-message-64.png";
import notif from "../../../../../assets/Images/panel/icons8-notification-64.png";

const Notification = () => {
  return (
    <div className="  flex justify-between gap-5 font-irSans   ">
      <div className=" w-1/2 h-full relative ">
        <div className=" w-[20px] h-[20px] rounded-full absolute left-0 top-0   bg-red-400 text-white flex justify-center items-center text-[10px] z-20"> 2 </div>
        <img src={notif} alt="" className="w-[40px] h-[40px] opacity-70"></img>
      </div>
      <div className="w-1/2 h-full relative  ">
      <div className=" w-[20px] h-[20px] rounded-full absolute left-[-5px] top-0  bg-green-400 text-white flex justify-center items-center text-[10px] z-20"> 1 </div>
        <img src={message} alt="" className="w-[40px] h-[40px] opacity-70"></img>
      </div>
    </div>
  );
};

export { Notification };
