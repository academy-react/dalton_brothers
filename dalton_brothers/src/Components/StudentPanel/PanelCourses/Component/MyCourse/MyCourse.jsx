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
    <div className="bg-gray-100 rounded-[28px] w-full h-[65px] my-3 flex flex-row-reverse justify-evenly items-center text-gray-800 ">
      <div className="px-[65px] w-[80px] h-[65px] text-center text-xl  ">
        {" "}
        <img
          src={coursePic}
          alt=""
          className="bg-red-200 w-[80px] h-[65px]"
        ></img>{" "}
      </div>
      <div className="w-[130px] h-[25px] text-center "> {courseName} </div>
      <div className="w-[130px] h-[25px] text-center "> {courseMaster} </div>
      <div className="w-[130px] h-[25px] text-center "> {term} </div>
      <div className="w-[130px] h-[25px] text-center "> {date} </div>
      <div className="w-[130px] h-[25px] text-center "> {price} </div>
      <div className="w-[60px] h-[55px] flex justify-center items-center">
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
