import React from "react";

import searchIcon from "../../../../../assets/Images/searchIcon.png";

const HeaderSearch = () => {
  return (
    <label
      htmlFor="searchInput"
      className="xl:mt-[300px] xl:w-[600px] lg:w-[50vw] lg:mt-[150px] relative flex flex-row flex-nowrap h-[65px] w-[70vw] mx-auto mt-[100px] border-2 rounded-full py-1 justify-start items-center px-5 gap-3"
    >
      <span className="absolute right-[32%] top-[-25%] whitespace-nowrap bg-white px-2 w-fit  text-mode-700  font-irSans text-xl dark:bg-mode-900 dark:text-mode-50">
        جستوجو در سایت
      </span>
      <picture className="w-[30px]">
        <img src={searchIcon} alt="" />
      </picture>
      <input
        type="text"
        name=""
        id="searchInput"
        placeholder="جستوجو..."
        className="w-96 text-right text-black outline-none font-irSans dark:bg-mode-900 dark:text-mode-50 "
      />
    </label>
  );
};

export default HeaderSearch;
