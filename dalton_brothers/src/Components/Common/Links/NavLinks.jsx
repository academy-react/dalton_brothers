import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ style, text, path }) => {
  return (
    <NavLink
      to={`${path}`}
      onClick={() => (Document.documentElement.scrollTop = 0)}
      className={`min-[500px]:text-xl min-[500px]:px-[20px] text-xs px-2 py-[10px] transition-all duration-500 cursor-pointer flex justify-center items-center rounded-full font-irSBold ${style}`}
    >
      {text}
    </NavLink>
  );
};

export { NavLinks };
