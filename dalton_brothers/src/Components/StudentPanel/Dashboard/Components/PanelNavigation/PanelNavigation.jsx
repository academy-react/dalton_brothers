import React from "react";

import { IconArrowNarrowLeft } from "@tabler/icons-react";

import homeSelect from "../../../../../assets/Images/panel/icons8-home-128(1).png";
import edit from "../../../../../assets/Images/panel/icons8-edit-128.png";
import note from "../../../../../assets/Images/panel/icons8-note-64.png";
import list from "../../../../../assets/Images/panel/icons8-list-64.png";
import select from "../../../../../assets/Images/panel/icons8-play-96 (1).png";



const PanelNavigation = () => {
  return (
    <>
      <div className=" w-[270px] h-[300px] border border-gray-400 rounded-[20px] mt-3">
        <ul className=" w-full h-full rounded-[20px] flex flex-col justify-evenly ">
          <li className=" w-full h-[50px] mt-6 flex flex-row-reverse">
            <div className=" h-full w-12 ml-2">
              <img src={select} alt="" className="w-[40px] h-[60px] relative bottom-2 "></img>
            </div>
            <div className=" h-full w-20">
              <img src={homeSelect} className="w-[80%] h-[80%]"></img>
            </div>
            <div className=" h-full w-full text-right text-xl pt-1 pr-[6px] text-[#fcbf49]"> داشبورد </div>
          </li>
          <li className=" w-full h-[50px] flex flex-row-reverse">
            <div className=" h-full w-12 ml-2"></div>
            <div className=" h-full w-20">
              <img src={edit} className="w-[80%] h-[80%]"></img>
            </div>
            <div className=" h-full w-full text-right text-xl pt-1 pr-[6px]"> ویرایش پروفایل </div>
          </li>
          <li className=" w-full h-[50px] flex flex-row-reverse">
            <div className=" h-full w-12 ml-2"></div>
            <div className=" h-full w-20">
              <img src={note} className="w-[80%] h-[80%]"></img>
            </div>
            <div className=" h-full w-full text-right text-xl items-center pt-1 pr-[6px]"> دوره های من </div>
          </li>
          <li className=" w-full h-[50px] flex flex-row-reverse">
            <div className=" h-full w-12 ml-2"></div>
            <div className=" h-full w-20">
              <img src={list} className="w-[80%] h-[80%]"></img>
            </div>
            <div className=" h-full w-full text-right text-xl pt-1 pr-[6px]"> لیست دوره ها </div>
          </li>
        </ul>
      </div>
      <button className="  w-[270px] h-[50px] border border-gray-400 rounded-[20px] text-center text-xl text-gray-800 ">
        {" "}
        خروج
        <IconArrowNarrowLeft
          strokeWidth="1"
          className="w-[80px] h-[50px] relative -top-[31px] ml-[20px]"
        />
      </button>
    </>
  );
};

export { PanelNavigation };
