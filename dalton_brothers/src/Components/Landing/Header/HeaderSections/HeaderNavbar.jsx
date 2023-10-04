import React, { useState } from "react";

import img from "../../../../assets/Images/mag.png";

const HeaderNavbar = () => {
  return (
    <div className="font-est w-11/12 m-auto">
      <div className="flex flex-row flex-wrap px-8 justify-between text-emerald-500 mb-3">
        <div className="flex flex-row gap-12 mt-5">
          <div className=" ml-24">logo</div>
          <div className="">دسته بندی ها</div>
          <div className="">مورد علاقه ها</div>
          <div className="">ورود/ثبت نام</div>
        </div>
        <div className="flex flex-row gap-12 mt-5">
          <div className="flex flex-row flex-wrap bg-green-200 rounded-3xl  py-1  justify-start items-center px-4 gap-2">
            <picture className="w-4">
              <img src={img} alt="" />
            </picture>
            <input
              type="text"
              name=""
              id=""
              placeholder="جستوجو..."
              className="w-96 text-right bg-green-200 text-gray-950 outline-none focus:border-b-2 border-b-green-700"
            />
          </div>
          <div className="text-slate-200">پشتیبانی/مشاور خرید</div>
        </div>
      </div>
    </div>
  );
};

export { HeaderNavbar };
