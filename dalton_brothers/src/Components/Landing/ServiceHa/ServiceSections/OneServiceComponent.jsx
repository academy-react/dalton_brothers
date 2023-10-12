import React from "react";

const OneServiceComponent = ({imgPath ,title }) => {
  return (
    <div className="basis-64 flex flex-col items-center px-3 py-6 gap-5 rounded-lg text-[#333333] opacity-70">
      <picture>
        <img src={imgPath} alt="" />
      </picture>
      <h1 className="text-2xl">{title}</h1>
    </div>
  );
};

export { OneServiceComponent };
