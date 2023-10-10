import React, { Fragment } from "react";

import { HeaderNavbar } from "./HeaderSections/HeaderNavbar";
import { HeaderContent } from "./HeaderSections/HeaderContent";

import styled from "./Header.module.css";

import HeaderSearch from "./HeaderSections/HeaderSearch";
import { Container } from "../../Container/Container";

const Header = () => {
  return (
    <Container>
      <div className={styled.header}>
        <HeaderNavbar />
        <HeaderContent />
        <HeaderSearch />
      </div>
    </Container>
  );
};

export { Header };
