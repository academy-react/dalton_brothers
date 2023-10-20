import React from "react";

import { LayHeaderNav } from "./HeaderSection/LayHeaderNav";
import { LaySort } from "./HeaderSection/Sort";
import { useLocation } from "react-router-dom";

const LayHeader = ({ course, news, detailCourse }) => {
  const location = useLocation();
  return (
    <>
      <LayHeaderNav />
      {/* search input */}
      <div>
        <div className=" font-est text-xl text-gray-500 bg-white m-auto text-center relative top-[15px] w-[200px] rounded-full">
          جستوجو در سایت
        </div>
        <input
          type="text"
          placeholder="...جستوجو کن"
          className=" border-[#eaeaea] border-2 w-[600px] h-[60px] rounded-full text-right pr-5 outline-none"
        />
      </div>
      {/* pageName */}
      <div>
        <h1 className=" font-sha text-3xl font-semibold text-gray-500">
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
