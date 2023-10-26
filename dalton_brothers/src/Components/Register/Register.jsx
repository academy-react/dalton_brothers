import React from "react";

import { RegisterForm } from "./RegisterSection/RegisterForm";

const Register = () => {
  return (
    <div
      dir="ltr"
      className={`xl:bg-[url("../../../src/assets/Images/register-bg.svg")] xl:justify-end md:px-[50px] justify-center bg-no-repeat bg-cover bg-center w-[100%] h-[100vh] pt-[100px]  flex flex-nowrap items-start `}
    >
      <RegisterForm />
    </div>
  );
};

export { Register };
