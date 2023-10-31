import React from "react";
import { NavLinks } from "../../../Common/Links/NavLinks/NavLinks";

const Identify = () => {
  return (
    <div className={`font-irSBold text-center text-2xl relative`}>
      waiting for api ...
      <NavLinks
        style={" font-irSans text-[#ccc]"}
        text={"click here to return"}
        path={"/forget"}
      />
    </div>
  );
};

export { Identify };
