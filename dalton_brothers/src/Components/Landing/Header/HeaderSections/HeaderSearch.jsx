import React from "react";

import searchIcon from "../../../../assets/Images/searchIcon.png";

const HeaderSearch = () => {
  return (
    <label
      htmlFor="searchInput"
      className="relative flex flex-row flex-nowrap h-[65px] w-[70vw] m-auto border-2 rounded-full  py-1  justify-start items-center px-5 gap-3"
    >
      <span className="absolute right-[32%] top-[-25%] whitespace-nowrap bg-white px-2 w-fit  text-[#707070]  font-irSans text-xl">
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
        className="w-96 text-right text-black outline-none font-irSans "
      />
    </label>
  );
};

export default HeaderSearch;
