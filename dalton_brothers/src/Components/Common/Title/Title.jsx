import React from "react";

const Title = ({ topic, style }) => {
  return (
    <h1
      className={`font-black text-2xl h-20flex justify-start items-center font-sha ${style}`}
    >
      {topic}
    </h1>
  );
};

export { Title };
