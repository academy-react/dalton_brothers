import React from "react";

const OneServiceComponent = ({imgPath ,title, desc }) => {
  return (
    <div className="basis-64 border-2 flex flex-col items-center px-3 py-6 gap-5 rounded-lg">
      <picture>
        <img src={imgPath} alt="" />
      </picture>
      <h1 className="text-2xl">{title}</h1>
      <p className="text-slate-500 text-base">{desc}</p>
    </div>
  );
};

export { OneServiceComponent };
