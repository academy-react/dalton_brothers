import React from "react";
import { NavLink } from "react-router-dom";

import shabnam from "../../../assets/Fonts/shabnam/Shabnam-Bold.ttf";

const NavLinks = ({ path }) => {
  return (
    <NavLink
      onClick={() => (Document.documentElement.scrollTop = 0)}
      to={`${path}`}
      style={({ isActive }) => ({
        width: "210px",
        height: "50px",
        background: "#6c63ff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: shabnam,
        fontSize: "18px",
        color: "#fff",
        borderRadius: "999px",
      })}
    >
      بازگشت به صفحه اصلی
    </NavLink>
  );
};

export { NavLinks };
