import React, { useEffect, useState } from "react";
import userImage from "../../../../../assets/Images/panel/user.png";
import { basicGet } from "../../../../../Core/Services/api/course/courseList/courseList";

const Profile = () => {
  const [imgPath, setImgPath] = useState(null);
  const [imgCount, setImgCount] = useState(null);
  const getProfile = async () => {
    const user = await basicGet("/SharePanel/GetProfileInfo");
    setImgPath(user.currentPictureAddress);
    setImgCount(user.userImage);
  };
  console.log(imgPath);
  console.log(imgCount);
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className=" w-[270px] h-[70px] flex justify-center items-center gap-3 font-irSBold">
      <h3 className=" text-lg text-gray-500 "> امین قادری </h3>
      <div className="w-[60px] h-[60px] rounded-full bg-[#F1F5F9] flex justify-center items-center overflow-hidden ">
        {/* {imgCount ? imgCount.map((el,index)=>)} */}
        <img
          className="w-[40px] h-[40px]"
          src={imgPath ? imgPath : userImage}
          alt=""
        />
      </div>
    </div>
  );
};

export { Profile };
