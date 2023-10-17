import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { SignInForm } from "./SignInSection/SignInForm";

import style from "./SignIn.module.css";

const SignIn = () => {
  const [first, setFirst] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [reg, setReg] = useState(false);
  const [forget, setForget] = useState(false);

  const navigate = useNavigate();

  const animate = () => {
    setTimeout(() => {
      setFirst(!first);
    }, 1000);
  };
  useEffect(() => {
    animate();
  }, []);

  if (first)
    return (
      <div className={style.holder}>
        {first && (
          <div className={style.SignInBgFullRight}>
            <SignInForm zIndex={"-z-10"} />
          </div>
        )}
      </div>
    );
  if (reg)
    return (
      <div className={style.holder}>
        {reg && (
          <div className={style.SignInBgFullLeft}>
            <SignInForm zIndex={"-z-10"} />
            {setTimeout(() => {
              navigate("/register");
            }, 1200)}
          </div>
        )}
      </div>
    );
  if (forget)
    return (
      <div className={style.holder}>
        {forget && (
          <div className={style.SignInBgFullLeft}>
            <SignInForm zIndex={"-z-10"} />
            {setTimeout(() => {
              navigate("/forget");
            }, 1200)}
          </div>
        )}
      </div>
    );
  return (
    <div className={style.holder}>
      {toggle ? (
        <div className={style.SignInBgFullLeft}>
          <SignInForm zIndex={"-z-10"} />
          {setTimeout(() => {
            navigate("/");
          }, 1200)}
        </div>
      ) : (
        <div className={style.SignInBg}>
          <SignInForm
            zIndex={"z-10"}
            toggle={toggle}
            setToggle={setToggle}
            reg={reg}
            setReg={setReg}
            forget={forget}
            setForget={setForget}
          />
        </div>
      )}
    </div>
  );
};

export { SignIn };
