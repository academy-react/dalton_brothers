import React from "react";

const OneServiceComponent = ({ imgPath, title, desc }) => {
  return (
    <div className="basis-64 flex flex-col items-center px-3 py-6 gap-5 rounded-lg">
      <picture className="bg-[#f2f2f2] w-[220px] h-[220px] flex items-center rounded-3xl">
        <img src={imgPath} alt="" className="w-[100px] m-auto" />
      </picture>
      <h1 className="font-vaz text-[#3c3c3c] px-[20px] w-[180px] h-[50px] rounded-full flex justify-between items-center bg-ham bg-no-repeat bg-[10%] bg-15% bg-[#fcbf49]">{title}</h1>
    </div>
  );
};

export { OneServiceComponent };
