import React from "react";

const Button = ({ type, style, text }) => {
  return (
    <button
      type={`${type}`}
      className={`px-[50px] py-[10px] rounded-full font-sha text-lg cursor-pointer  transition-all duration-500 ${style}`}
    >
      {text}
    </button>
  );
};

export { Button };
