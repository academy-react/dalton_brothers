import React from "react";

import style from "../../layOut.module.css";

const LaySort = () => {
  return (
    <div className="flex flex-row-reverse justify-center items-center gap-[10px]">
      <div className="border-2 border-[#eaeaea] flex flex-row-reverse justify-start items-center p-[10px] gap-[10px] rounded-r-[999px] rounded-l-[300px] font-est text-slate-500 text-lg">
        <input
          type="radio"
          name="sort"
          className={style.inp}
          id="input1"
          defaultChecked
        />
        <label htmlFor="input1" className={style.sort}>
          جدید ترین
        </label>
        <input type="radio" name="sort" className={style.inp} id="input2" />
        <label htmlFor="input2" className={style.sort}>
          پربازدید ترین
        </label>
        <input type="radio" name="sort" className={style.inp} id="input3" />
        <label htmlFor="input3" className={style.sort}>
          محبوب ترین
        </label>
        <input type="radio" name="sort" className={style.inp} id="input4" />
        <label htmlFor="input4" className={style.sort}>
          ارزان ترین
        </label>
      </div>
      <div className="flex justify-center items-center rounded-l-[999px] rounded-r-[300px] font-est text-slate-500 text-lg py-[28px] px-[70px] bg-[#fcbf49]">
        ترتیب ها
      </div>
    </div>
  );
};

export { LaySort };
