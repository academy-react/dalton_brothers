import React, { useState } from "react";

import style from "../../layOut.module.css";
import { courseData } from "../../../../../Core/Services/data";

const LaySort = () => {
  const [newest, setNewest] = useState();
  const [view, setView] = useState();
  const [favorite, setFavorite] = useState();
  const [cheap, setCheap] = useState();

  const data = courseData;
  console.log(data);
  console.log(newest);

  return (
    <div className="flex flex-row-reverse justify-center items-center gap-[10px]">
      <div className="border-2 border-[#eaeaea] flex flex-row-reverse justify-start items-center p-[10px] gap-[10px] rounded-r-[999px] rounded-l-[300px] font-est text-slate-500 text-lg">
        <input
          type="radio"
          name="sort"
          className={style.inp}
          id="newest"
          defaultChecked
          // onClick={()=> handleSort()}
        />
        <label htmlFor="input1" className={style.sort}>
          جدید ترین
        </label>
        <input type="radio" name="sort" className={style.inp} id="mostView" />
        <label htmlFor="input2" className={style.sort}>
          پربازدید ترین
        </label>
        <input
          type="radio"
          name="sort"
          className={style.inp}
          id="mostFavorite"
        />
        <label htmlFor="input3" className={style.sort}>
          محبوب ترین
        </label>
        <input type="radio" name="sort" className={style.inp} id="cheapest" />
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
