import React, { Fragment } from "react";

import { HeaderNavbar } from "./HeaderSections/HeaderNavbar";
import { HeaderMenu } from "./HeaderSections/HeaderMenu";
import { HeaderText } from "./HeaderSections/HeaderText";
import { HeaderPicture } from "./HeaderSections/HeaderPicture";
import { BestMasters } from "../BestMasters/BestMasters";

const Header = () => {
  return (
    <Fragment>
      <HeaderNavbar />
      <HeaderMenu />
      <HeaderText />
      <HeaderPicture />
      <BestMasters/>
    </Fragment>
  );
};

export { Header };
