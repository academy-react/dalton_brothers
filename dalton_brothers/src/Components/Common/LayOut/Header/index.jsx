import React from "react";

import { LaySort } from "./HeaderSection/Sort/Sort";
import { useLocation } from "react-router-dom";
import { LayHeaderNav } from "./HeaderSection/LayHeaderNav/LayHeaderNav";

const LayHeader = ({ course, news, detailCourse }) => {
  const location = useLocation();
  return (
    <>
      <LayHeaderNav />
      {/* search input */}
      <div>
        <div className=" font-irSans text-xl text-gray-500 bg-white m-auto text-center relative top-[15px] w-[170px] rounded-full">
          جستوجو در سایت
        </div>
        <input
          type="text"
          placeholder="...جستوجو کن"
          className=" border-[#eaeaea] border-2 w-[600px] h-[60px] rounded-full text-right pr-5 outline-none font-irSans max-sm:w-[400px]"
        />
      </div>
      {/* pageName */}
      <div>
        <h1 className=" font-irSans text-3xl  text-gray-500">
          {location.pathname === "/course" && <div>{course}</div>}
          {location.pathname === "/courseDetail" && <div>{detailCourse}</div>}
          {location.pathname === "/news" && <div>{news}</div>}
        </h1>
      </div>
      {location.pathname === "/course" && <LaySort />}
    </>
  );
};

export { LayHeader };
