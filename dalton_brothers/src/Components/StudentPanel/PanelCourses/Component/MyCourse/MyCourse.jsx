import React from "react";

import { IconTrash, IconPlus } from "@tabler/icons-react";
import { useLocation } from "react-router-dom";

const MyCourse = ({
  coursePic,
  courseName,
  courseMaster,
  term,
  date,
  price,
}) => {
  const location = useLocation();
  return (
    <div className="bg-gray-100 rounded-[28px] w-full lg:h-[65px] h-[55px] xl:my-3 my-1 flex flex-row-reverse justify-evenly items-center text-gray-800  whitespace-nowrap ">
      <div className="lg:px-[65px] px-[30px] lg:w-[80px] w-[50px] h-[65px] text-center text-xl">
        {" "}
        <img
          src={coursePic}
          alt=""
          className="bg-red-200 w-[40px] h-[40px]"
        ></img>{" "}
      </div>
      <div className="lg:w-[130px] w-[205px]  h-[25px] text-center "> {courseName} </div>
      <div className="lg:w-[130px] w-[205px]  h-[25px] text-center "> {courseMaster} </div>
      <div className="lg:w-[130px] w-[205px]  h-[25px] text-center "> {term} </div>
      <div className="lg:w-[130px] w-[205px]  h-[25px] text-center "> {date} </div>
      <div className="lg:w-[130px] w-[205px]  h-[25px] text-center "> {price} </div>
      <div className="lg:w-[48px]  xl:w-[60px] w-[100px] xl:h-[55px] h-[40px] flex justify-center items-center">
        {location.pathname === "/panel/PanelCourses" ? (
          <IconTrash
            strokeWidth="1"
            className="w-[80%] h-[80%] rounded-full bg-orange-300"
          />
        ) : (
          <IconPlus
            strokeWidth="1"
            className="w-[80%] h-[80%] rounded-full bg-orange-300"
          />
        )}
      </div>
    </div>
  );
};

export { MyCourse };
