import React from "react";

const OneServiceComponent = ({ imgPath, title, desc }) => {
  return (
    <div className="basis-64 flex flex-col items-center justify-center px-3 py-6 gap-8 rounded-lg text-[#333333] opacity-70 w-[100%]">
      <picture className="w-32 h-32 ">
        <img src={imgPath} alt="" />
      </picture>
      <h1 className="text-xl">{title}</h1>
    </div>
  );
};

export { OneServiceComponent };
