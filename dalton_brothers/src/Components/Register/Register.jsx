import React, { useState } from "react";

import { SignInForm } from "./RegisterSection/RegisterForm";

import style from "./SignIn.module.css";

const Register = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={style.holder}>
      {toggle ? (
        <div className={style.SignInBgFull}>
          <SignInForm zIndex={"-z-10"} />
        </div>
      ) : (
        <div className={style.SignInBg}>
          <SignInForm zIndex={"z-10"} toggle={toggle} setToggle={setToggle} />
        </div>
      )}
    </div>
  );
};

export { Register };
