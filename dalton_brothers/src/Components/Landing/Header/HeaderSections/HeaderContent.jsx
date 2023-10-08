import React from "react";

import { HeaderText } from "./HeaderText";
import { HeaderBtn } from "./HeaderBtn";

const HeaderContent = () => {
  return (
    <div className="h-[550px] mt-60 flex flex-col flex-wrap items-start gap-16 w-4/5 m-auto">
      <HeaderText />
      <HeaderBtn />
    </div>
  );
};

export { HeaderContent };
