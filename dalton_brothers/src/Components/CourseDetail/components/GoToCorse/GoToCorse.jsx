import React from 'react'

import style from "../../../LayOut/layOut.module.css";


const GoToCorse = () => {
  return (
    <div className="flex flex-row-reverse justify-center items-center gap-[10px] max-lg:flex-col-reverse ">
      <div className="border-2 border-[#eaeaea] flex flex-row-reverse justify-start items-center    p-[10px] gap-[10px] rounded-full font-irSans text-slate-500 text-lg  max-lg:flex-col max-lg:rounded-t-md max-lg:rounded-b-3xl  ">
        <input
          type="radio"
          name="GoTO"
          className={style.inp}
          id="intro"
          onClick={()=> document.documentElement.scrollTop = "1200"}
        //   onChange={(e) => e.target.checked && setSort("addTime")}
        />
        <label htmlFor="intro" className={style.sort}>
           معرفی
        </label>
        <input
          type="radio"
          name="GoTO"
          className={style.inp}
          id="need"
          onClick={()=> document.documentElement.scrollTop = "1600"}
        //   onChange={(e) => e.target.checked && setSort("view")}
        />
        <label htmlFor="need" className={style.sort}>
           پیش نیاز ها
        </label>
        <input
          type="radio"
          name="GoTO"
          className={style.inp}
          id="teachers"
          onClick={()=> document.documentElement.scrollTop = "2100"}
        //   onChange={(e) => e.target.checked && setSort("like")}
        />
        <label htmlFor="teachers" className={style.sort}>
           اساتید
        </label>
        <input
          type="radio"
          name="GoTO"
          className={style.inp}
          id="comment"
          onClick={()=> document.documentElement.scrollTop = "2900"}
        //   onChange={(e) => e.target.checked && setSort("price")}
        />
        <label htmlFor="comment" className={style.sort}>
           نظرات
        </label>
        <input
          type="radio"
          name="GoTO"
          className={style.inp}
          id="relatedCorse"
          onClick={()=> document.documentElement.scrollTop = "4100"}
        //   onChange={(e) => e.target.checked && setSort("price")}
        />
        <label htmlFor="relatedCorse" className={style.sort}>
           دوره های مرتبط
        </label>
      </div>
    </div>
  )
}

export  {GoToCorse}