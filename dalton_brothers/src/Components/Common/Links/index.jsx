import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ path, style, text }) => {
  return (
    <NavLink
      onClick={() => (Document.documentElement.scrollTop = 0)}
      to={`${path}`}
      className={`px-[50px] py-[10px] transition-all duration-500 cursor-pointer flex justify-center items-center rounded-full font-sha text-l ${style}`}
    >
      {text}
    </NavLink>
  );
};

export default NavLinks;
