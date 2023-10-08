import React from "react";

import { LayHeaderNav } from "./HeaderSection/LayHeaderNav";
import { LaySort } from "./HeaderSection/Sort";

const LayHeader = ({ pageName }) => {
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
          {pageName}
        </h1>
      </div>
      <LaySort />
    </>
  );
};

export { LayHeader };
