import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ForgetForm } from "./ForgetSection/ForgetForm";
import { Identify } from "./ForgetSection/Identify";

const ForgetPass = () => {
  return (
    <div
      className={`w-100% max-w-[2000px] h-[950px] m-auto flex border-2 relative overflow-hidden`}
    >
      <div
        dir="ltr"
        className={`xl:bg-[url('../../../src/assets/Images/registerB.svg')] md:px-[50px] justify-center bg-no-repeat bg-cover bg-center w-[100%] h-[100vh] pt-[100px]  flex flex-nowrap items-start`}
      >
        <ForgetForm />
      </div>
    </div>
  );
};

export { ForgetPass };
