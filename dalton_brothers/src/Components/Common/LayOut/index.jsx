import React from "react";
import { Outlet } from "react-router-dom";

import logo from "../../../assets/Images/layOut-logo.png";
import sun from "../../../assets/Images/sun.png";
import illustration from "../../../assets/Images/footer-img.png";

import CommentPlace from "../../Common/Comment/Index";

import style from "./layOut.module.css";
import { FooterDesc } from "./Footer/Footer-desc";

const Layout = () => {
  return (
    <div className={style.container}>
      <header className="flex flex-col gap-[40px] items-center mb-[80px]">
        <div className={style.headerBox1}>
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div className=" flex flex-row-reverse flex-wrap justify-center gap-[75px] items-center font-est text-xl text-gray-500">
            <div>خانه</div>
            <div>خدمات</div>
            <div>دوره ها</div>
            <div>اخبار و مقالات</div>
            <div>ارتباط با ما</div>
          </div>
          <div className="">
            <img src={sun} alt="" className=" w-[40px]" />
          </div>
          <div className="bg-gray-200  w-[300px] p-2 flex flex-row-reverse  rounded-full relative font-est text-slate-600">
            <button
              type="button"
              className="bg-[#fff] w-[150px] h-11 text-center py-[12px] shadow-ri shadow-slate-400 rounded-full absolute left-[12px] top-[10px]"
            >
              ثبت نام
            </button>
            <button
              type="button"
              className="bg-[#fcbf49] w-[150px] h-12 text-center py-[12px]  rounded-full"
            >
              ورود
            </button>
          </div>
        </div>
        <div>
          <div className=" font-est text-xl text-gray-500 bg-white m-auto text-center relative top-[15px] w-[200px] rounded-full">
            جستوجو در سایت
          </div>
          <input
            type="text"
            placeholder="...جستوجو کن"
            className=" border-[#eaeaea] border-2 w-[600px] h-[60px] rounded-full text-right pr-5 outline-none"
          />
        </div>
        <div>
          <h1 className=" font-sha text-3xl font-semibold text-gray-500">
            دوره ها
          </h1>
        </div>
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
      </header>
      <Outlet />
      <footer className={style.footer}>
        <div className=" max-w-[1500px] m-auto flex flex-row-reverse flex-nowrap justify-end items-center">
          <FooterDesc />
          <div className={style.illustration}>
            <img src={illustration} alt="" />
          </div>
          <div className=" w-1/3 h-full">
            <CommentPlace />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
