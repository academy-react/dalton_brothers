import React from "react";

import mag from "../../../../assets/Images/mag.png";

const HeaderSearch = () => {
  return (
    <label
      htmlFor="searchInput"
      className="relative flex flex-row flex-nowrap h-[65px] w-[500px] m-auto border-2 rounded-full  py-1  justify-start items-center px-4 gap-2"
    >
      <span className="absolute right-[32%] top-[-25%] whitespace-nowrap bg-white px-2 w-fit  text-[#707070]  font-sha text-xl">
        جستوجو در سایت
      </span>
      <picture className="w-4">
        <img src={mag} alt="" />
      </picture>
      <input
        type="text"
        name=""
        id="searchInput"
        placeholder="جستوجو..."
        className="w-96 text-right text-gray-950 outline-none"
      />
    </label>
  );
};

export default HeaderSearch;
