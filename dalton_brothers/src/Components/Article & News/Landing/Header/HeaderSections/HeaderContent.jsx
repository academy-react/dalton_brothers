import React from "react";

import { HeaderText } from "./HeaderText";
import { Button } from "../../../Common/buttons";

const HeaderContent = () => {
  return (
    <div className="h-[550px] mt-60 flex flex-col flex-wrap items-start gap-16 w-4/5 m-auto">
      <HeaderText />
      <Button
        type={"button"}
        text={"شروع سفر"}
        style={"bg-[#fcbf49] text-[#fff]"}
      />
    </div>
  );
};

export { HeaderContent };
