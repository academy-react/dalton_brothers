import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ type, style, text, path }) => {
  const navigate = useNavigate();
  const transfer = (e) => {
    if (e === undefined) return;
    navigate(e);
  };
  return (
    <button
      onClick={() => {
        transfer(path);
      }}
      type={type}
      className={`px-[50px] py-[10px] rounded-full font-irSBold text-lg cursor-pointer  transition-all duration-500 ${style}`}
    >
      {text}
    </button>
  );
};

export { Button };
