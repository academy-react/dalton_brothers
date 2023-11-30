import React, { Fragment } from "react";

import { HeaderNavbar } from "./HeaderSections/HeaderNavbar/HeaderNavbar";
import { HeaderContent } from "./HeaderSections/HeaderContent/HeaderContent";
import HeaderSearch from "./HeaderSections/HeaderSearch/HeaderSearch";

import styled from "./Header.module.css";

const Header = () => {
  return (
    <div
      dir="rtl"
      className={` relative 2xl:h-[1100px] lg:bg-[url('../../../../src/assets/Images/landing-header.svg')] lg:bg-[length:100%] bg-no-repeat bg-[length:100%] bg-[100% 0%] w-[100%] h-fit gap-[50px] flex flex-col justify-between`}
    >
      <HeaderNavbar />
      <HeaderContent />
      <HeaderSearch />
    </div>
  );
};

export { Header };
