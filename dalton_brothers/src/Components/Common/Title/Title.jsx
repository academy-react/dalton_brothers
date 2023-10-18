import React from "react";

const Title = ({ topic, style }) => {
  return (
    <div
      className={` text-2xl h-20 flex justify-start items-center font-irS text-[#808080] ${style}`}
    >
      {topic}
    </div>
  );
};

export { Title };
