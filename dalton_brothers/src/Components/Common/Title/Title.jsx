import React from "react";

const Title = ({ topic, style }) => {
  return (
    <div
      className={`font-black text-2xl h-20flex justify-start items-center font-sha ${style}`}
    >
      {topic}
    </div>
  );
};

export { Title };
