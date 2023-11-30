import React from "react";

import { HeaderText } from "../HeaderText/HeaderText";
import { Button } from "../../../../Common/buttons";

const HeaderContent = () => {
  return (
    <div className="lg:items-start lg:mt-[150px] md:mt-[50px] h-auto mt-[200px] flex flex-col flex-wrap items-center gap-16 w-4/5 mx-auto">
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
