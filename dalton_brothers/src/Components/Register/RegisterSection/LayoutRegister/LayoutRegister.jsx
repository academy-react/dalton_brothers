import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const LayoutRegister = () => {


  return (
    <div
      className={`2xl:w-[40%] xl:w-[50%] lg:w-[60%] md:w-[80%] w-[100%] relative flex flex-row justify-center items-center font-irSans`}
    >
        <Outlet/>
    </div>
  );
};

export { LayoutRegister };