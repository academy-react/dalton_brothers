import React, { useEffect } from "react";

import { IconTrash, IconPlus } from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";
import delIcon from "../../../../../assets/Images/panel/panelDel.png";
import addlIcon from "../../../../../assets/Images/panel/PanelAdd.png";
import { deleteReserve } from "../../../../../Core/Services/api/course/reserve/deleteReserve";

const MyCourse = ({
  coursePic,
  courseName,
  courseMaster,
  term,
  price,
  reserveId,
  courseId,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const deleteReservation = async () => {
    const obj = {
      id: reserveId,
    };
    const result = await deleteReserve(obj);
  };
  const handleClick = async () => {
    if (courseId) navigate(`/courseDetail/${courseId}`);
    // console.log(courseId);
  };

  return (
    <div className="bg-[#f1f5f9] rounded-[28px] w-full lg:h-[65px] h-[55px] xl:my-3 my-1 flex flex-row-reverse justify-between items-center text-gray-800 whitespace-nowrap">
      <div className=" w-[50px] h-[65px] text-center rounded-full flex justify-center items-center mr-2">
        <img
          src={coursePic}
          alt=""
          className="bg-red-200 w-[40px] h-[40px] rounded-full"
        ></img>
      </div>
      <div className="lg:w-[130px] w-[205px]  h-[25px] text-center ">
        {courseName}
      </div>
      <div className="lg:w-[130px] w-[205px]  h-[25px] text-center ">
        {courseMaster}
      </div>
      <div className="lg:w-[130px] w-[205px]  h-[25px] text-center ">
        {term}
      </div>

      <div className="lg:w-[130px] w-[205px]  h-[25px] text-center ">
        {price}
      </div>
      <div className="lg:w-[48px]  xl:w-[60px] w-[100px] xl:h-[55px] h-[40px] flex justify-center items-center">
        {location.pathname === "/panel/PanelCourses" ? (
          <div
            className="w-[40px] h-[40px] rounded-full bg-orange-300 flex justify-center items-center cursor-pointer"
            onClick={deleteReservation}
          >
            <img src={delIcon} className="w-[25px] h-[25px]" />
          </div>
        ) : (
          location.pathname === "/panel/PanelCoursesList" && (
            <div
              className="w-[40px] h-[40px] rounded-full bg-orange-300 flex justify-center items-center cursor-pointer"
              onClick={handleClick}
            >
              <img src={addlIcon} className="w-[25px] h-[25px]" />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export { MyCourse };
