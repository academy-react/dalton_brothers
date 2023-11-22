import React, { useState } from "react";

import style from "../BestMaster.module.css";

const Master = ({ fullName,pictureAddress }) => {
  return (
    <div className="lg:h-[380px] lg:gap-0 flex flex-col gap-[20px] items-center">
      <div className={`lg:w-[250px] ${style.master}`}>
        <input type="checkBox" name="master" className={style.masterInput} />
        <label  className={` ${style.masterLabel}`}>
          <img src={pictureAddress} alt="" className="w-[90%] rounded-full absolute top-[-20px] left-[5%]"/>
        </label>
      </div>
      <h1 className="lg:mt-[0px] font-irSBold text-neutral-700 text-xl mt-[30px]">
        {fullName}
      </h1>
      <h1 className="font-irSans text-[#909090] text-l mt-4">مدرس</h1>
    </div>
  );
};

export default Master;
