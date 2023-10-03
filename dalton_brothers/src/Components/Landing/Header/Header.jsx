import React, { Fragment } from "react";

import { HeaderNavbar } from "./HeaderSections/HeaderNavbar";
import { HeaderContent } from "./HeaderSections/HeaderContent";

const Header = () => {
  return (
    <div style={{ direction: "rtl" }}>
      <HeaderNavbar />
      <HeaderContent />
    </div>
  );
};

export { Header };
