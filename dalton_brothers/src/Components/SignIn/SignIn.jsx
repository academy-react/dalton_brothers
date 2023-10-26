import React from "react";

import { SignInForm } from "./SignInSection/SignInForm";

const SignIn = () => {
  return (
    <div
      dir="ltr"
      className={`xl:bg-[url('../../../src/assets/Images/signIn-bg.svg')] xl:justify-start md:px-[50px] justify-center bg-no-repeat bg-cover bg-center w-[100%] h-[100vh] pt-[100px]  flex flex-nowrap items-start `}
    >
      <SignInForm />
    </div>
  );
};

export { SignIn };
