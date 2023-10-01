import React, { Fragment } from "react";

import { HeaderNavbar } from "./HeaderSections/HeaderNavbar";
import { HeaderMenu } from "./HeaderSections/HeaderMenu";
import { HeaderText } from "./HeaderSections/HeaderText";
import { HeaderPicture } from "./HeaderSections/HeaderPicture";

const Header = () => {
  return (
    <Fragment>
      <HeaderNavbar />
      <HeaderMenu />
      <HeaderText />
      <HeaderPicture />
    </Fragment>
  );
};

export { Header };
