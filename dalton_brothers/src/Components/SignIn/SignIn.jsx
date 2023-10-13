import React, { useState } from "react";

import { SignInForm } from "./SignInSection/SignInForm";

import style from "./SignIn.module.css";

const SignIn = () => {
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

export { SignIn };
