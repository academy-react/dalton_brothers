import React from "react";

import NavLinks from "../Links";
import { Title } from "../Title/Title";

const LayOutHeaders = ({ topic, btnText, path, style}) => {
  return (
    <div className="w-[90%] m-auto flex flex-row-reverse justify-between items-center">
      <Title topic={topic} style={"text-[#6b7280]"} />
      <NavLinks path={path} style={`${style}`} text={btnText} />
    </div>
  );
};

export { LayOutHeaders };
