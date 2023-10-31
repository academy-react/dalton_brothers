import React, { useState } from "react";

import style from "../BestMaster.module.css";

const Master = ({ master, topic }) => {
  return (
    <div className="lg:h-[380px] lg:gap-0 flex flex-col gap-[20px] items-center">
      <div className={`lg:w-[250px] ${style.master}`}>
        <input type="checkBox" name="master" className={style.masterInput} />
        <label htmlFor={``} className={` ${style.masterLabel}`}></label>
      </div>
      <h1 className="lg:mt-[0px] font-irSBold text-neutral-700 text-xl mt-[30px]">
        {master}
      </h1>
      <h1 className="font-irSans text-[#909090] text-l mt-4">{topic}</h1>
    </div>
  );
};

export default Master;
