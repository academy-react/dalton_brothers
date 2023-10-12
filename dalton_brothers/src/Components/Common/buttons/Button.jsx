import React from "react";

const Button = ({ type, style, text }) => {
  return (
    <button
      type={`${type}`}
      className={`w-[130px] h-[40px] flex justify-center items-center rounded-full font-sha text-lg text-[#5d5d5d] ${style}`}
    >
      {text}
    </button>
  );
};

export default Button;
