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
      className={`min-[500px]:text-xl min-[500px]:px-[20px] text-xs px-2 py-[10px]  rounded-full font-irSBold cursor-pointer  transition-all duration-500 ${style}`}
    >
      {text}
    </button>
  );
};

export { Button };
