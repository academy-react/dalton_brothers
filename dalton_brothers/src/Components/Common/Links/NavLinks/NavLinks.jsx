import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ className, Children, path }) => {
  return (
    <NavLink
      to={path}
      className={`px-[20px] py-[10px] transition-all duration-500 cursor-pointer flex justify-center items-center rounded-full font-irSBold text-l ${className}`}
    >
      {Children}
    </NavLink>
  );
};

export { NavLinks };
