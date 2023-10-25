import React, { Fragment } from "react";

import { HeaderNavbar } from "./HeaderSections/HeaderNavbar";
import { HeaderContent } from "./HeaderSections/HeaderContent";
import HeaderSearch from "./HeaderSections/HeaderSearch";

import styled from "./Header.module.css";

const Header = () => {
  return (
    <div className={styled.header}>
      <HeaderNavbar />
      <HeaderContent />
      <HeaderSearch />
    </div>
  );
};

export { Header };
