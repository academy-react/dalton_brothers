import React, { useState } from "react";

import style from "../BestMaster.module.css";

const Master = ({ id, master, topic }) => {
  return (
    <div className="flex flex-col gap-[10px] items-center">
      <div className={style.master}>
        <input
          type="checkBox"
          name="master"
          id={`master${id}`}
          className={style.masterInput}
        />
        <label htmlFor={`master${id}`} className={style.masterLabel}></label>
      </div>
      <h1 className="font-sha text-[#414141] text-xl mt-[30px]">{master}</h1>
      <h1 className="font-sha text-[#909090] text-l">{topic}</h1>
    </div>
  );
};

export default Master;
