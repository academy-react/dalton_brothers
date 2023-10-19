import React from "react";
import { SignLinks } from "../../Common/Links/SignLinks";

const Identify = ({ zIndex,Identify , setIdentify }) => {
  return (
    <div className={`font-irSBold text-center text-2xl relative ${zIndex}`}>
      waiting for api ...
      <SignLinks style={" font-irSans text-[#ccc]"} text={"click here to return"} state={Identify} setState={Identify} />
    </div>
  );
};

export { Identify };
