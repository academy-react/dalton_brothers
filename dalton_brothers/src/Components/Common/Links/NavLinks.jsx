import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ style, text, path }) => {
  return (
    <NavLink
      to={`${path}`}
      onClick={() => (Document.documentElement.scrollTop = 0)}
      className={`px-[20px] py-[10px] transition-all duration-500 cursor-pointer flex justify-center items-center rounded-full font-irSBold text-lg ${style}`}
    >
      {text}
    </NavLink>
  );
};

export { NavLinks };
