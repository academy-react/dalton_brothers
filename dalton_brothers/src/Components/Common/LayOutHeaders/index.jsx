import React from "react";

import { Link } from "react-router-dom";
import {NavLinks} from "../Links/NavLinks";
import { Title } from "../Title/Title";

const LayOutHeaders = ({ topic }) => {
  return (
    <div className="w-[90%] m-auto flex flex-row-reverse justify-between items-center mb-10">
      <Title topic={topic} style={"text-[#6b7280]"} />
      <NavLinks path={"/"} text={"بازگشت به صفحه ی اصلی"}  style={'bg-[#334155] text-[#fff]'}/>
    </div>
  );
};

export { LayOutHeaders };
