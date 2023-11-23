import React from "react";

import { IconTrash, IconPlus } from "@tabler/icons-react";
import { useLocation } from "react-router-dom";

import delIcon from "../../../../../assets/Images/panel/panelDel.png";
import addlIcon from "../../../../../assets/Images/panel/PanelAdd.png";

const MyCourse = ({
  coursePic,
  courseName,
  courseMaster,
  term,
  state,
  price,
}) => {
  const location = useLocation();
  return (
    <div className="bg-[#f1f5f9] rounded-[28px] w-full lg:h-[65px] h-[55px] xl:my-3 my-1 flex flex-row-reverse justify-evenly items-center text-gray-800  whitespace-nowrap">
      <div className=" w-[50px] h-[65px] text-center rounded-full flex justify-center items-center mr-2">
        {" "}
        <img
          src={coursePic}
          alt=""
          className="bg-red-200 w-[40px] h-[40px] rounded-full"
        ></img>{" "}
      </div>
      <div className="lg:w-[220px] w-[205px]  h-[25px] text-center bg-gray-200"> {courseName} </div>
      <div className="lg:w-[180px] w-[205px]  h-[25px] text-center bg-green-300"> {courseMaster} </div>
      {/* <div className="lg:w-[130px] w-[205px]  h-[25px] text-center "> {term} </div> */}
      <div className="lg:w-[130px] w-[205px]  h-[25px] text-center bg-green-700 max-xl:hidden"> {state} </div>
      <div className="lg:w-[130px] w-[205px]  h-[25px] text-center bg-orange-300 lg"> {price} </div>
      <div className="lg:w-[48px]  xl:w-[60px] w-[100px] xl:h-[55px] h-[40px] flex justify-center items-center">
        {location.pathname === "/panel/PanelCourses" ? (
          <div className="w-[40px] h-[40px] rounded-full bg-orange-300 flex justify-center items-center cursor-pointer">
          <img
            src={delIcon}
            className="w-[25px] h-[25px]"
          /></div>
        ) : (
          <div className="w-[40px] h-[40px] rounded-full bg-orange-300 flex justify-center items-center cursor-pointer">
          
          <img
          src={addlIcon}
            className="w-[25px] h-[25px]"
          />
          </div>
        )}


      </div>
    </div>
  );
};

export { MyCourse };
