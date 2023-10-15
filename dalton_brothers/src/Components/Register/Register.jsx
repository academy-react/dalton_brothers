import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { RegisterForm } from "./RegisterSection/RegisterForm";

import style from "./Register.module.css";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [toggle, setToggle] = useState(false);
  const [first, setFirst] = useState(true);
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
          <div className={style.SignInBgFullLeft}>
            <RegisterForm zIndex={"-z-10"} />
          </div>
        )}
      </div>
    );
  return (
    <div className={style.holder}>
      {toggle ? (
        <>
          <div className={style.SignInBgFullRight}>
            <RegisterForm zIndex={"-z-10"} />
            {setTimeout(() => {
              navigate("/signIn");
            }, 1200)}
          </div>
        </>
      ) : (
        <div className={style.SignInBg}>
          <RegisterForm zIndex={"z-10"} toggle={toggle} setToggle={setToggle} />
        </div>
      )}
    </div>
  );
};

export { Register };
