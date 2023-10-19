import React from "react";

import { SignInForm } from "../SignIn/SignInSection/SignInForm";

import style from "./ForgetPass.module.css";

const ForgetPass = () => {
  return (
    <div className="w-100% max-w-[2000px] h-[700px] m-auto flex border-2 relative overflow-hidden">
      <div className={style.top}></div>
      <div className="w-[100%] flex justify-center items-center relative z-10">
        <SignInForm />
      </div>
      <div className={style.bot}></div>
    </div>
  );
};

export { ForgetPass };
