import React from "react";

import NavLinks from "../Links/NavLinks";
import { Title } from "../Title/Title";

const LayOutHeaders = ({ topic }) => {
  return (
    <div className="w-[90%] m-auto flex flex-row-reverse justify-between items-center">
      <Title topic={topic} style={"text-[#6b7280]"} />
      <NavLinks
        path={"/"}
        style={" bg-[#6c63ff] hover:bg-[#463fd3] text-[#fff]"}
        text={"بازگشت به صفحه ی اصلی"}
      />
    </div>
  );
};

export { LayOutHeaders };
