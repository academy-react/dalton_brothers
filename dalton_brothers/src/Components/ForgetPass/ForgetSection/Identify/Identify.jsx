import React from "react";
import { NavLinks } from "../../../Common/Links/NavLinks/NavLinks";

const Identify = () => {
  return (
    <div className={`font-irSBold text-center text-2xl relative`}>
      waiting for api ...
      <NavLinks
        className={" font-irSans text-[#ccc]"}
        Children={"click here to return"}
        path={"/forget"}
      />
    </div>
  );
};

export { Identify };
