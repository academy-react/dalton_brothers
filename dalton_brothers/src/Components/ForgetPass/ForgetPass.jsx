import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ForgetForm } from "./ForgetSection/ForgetForm";

import style from "./ForgetPass.module.css";

const ForgetPass = () => {
  const [first, setFirst] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [back, setBack] = useState(false);

  const navigate = useNavigate();

  const animate = () => {
    setTimeout(() => {
      setFirst(!first);
    }, 1500);
  };
  useEffect(() => {
    animate();
  }, []);

  if (first)
    return (
      <div className="w-100% max-w-[2000px] h-[700px] m-auto flex border-2 relative overflow-hidden">
        <div className={style.topMoveDown}></div>
        <div className="w-[100%] flex justify-center items-center">
          <ForgetForm zIndex={"-z-10"} />
        </div>
        <div className={style.botMoveDown}></div>
      </div>
    );
  if (back)
    return (
      <div className="w-100% max-w-[2000px] h-[700px] m-auto flex border-2 relative overflow-hidden">
        <div className={style.topMoveUp}></div>
        <div className="w-[100%] flex justify-center items-center">
          <ForgetForm zIndex={"-z-10"} />
          {setTimeout(() => {
            navigate("/signIn");
          }, 1000)}
        </div>
        <div className={style.botMoveUp}></div>
      </div>
    );

  return (
    <div className="w-100% max-w-[2000px] h-[700px] m-auto flex border-2 relative overflow-hidden">
      {toggle ? (
        <>
          <div className={style.topMoveUp}></div>
          <div className="w-[100%] flex justify-center items-center">
            <ForgetForm zIndex={"-z-10"} />
          </div>
          <div className={style.botMoveUp}></div>
        </>
      ) : (
        <>
          <div className={style.top}></div>
          <div className="w-[100%] flex justify-center items-center">
            <ForgetForm
              zIndex={"z-10"}
              toggle={toggle}
              setToggle={setToggle}
              back={back}
              setBack={setBack}
            />
          </div>
          <div className={style.bot}></div>
        </>
      )}
    </div>
  );
};

export { ForgetPass };
