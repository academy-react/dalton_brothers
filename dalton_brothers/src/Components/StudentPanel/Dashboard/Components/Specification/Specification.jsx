import React from "react";

const Specification = () => {
  return (
    <div className="w-full h-full border border-gray-500 rounded-[30px] flex flex-row-reverse xl:text-xl lg:text-lg whitespace-nowrap">
      <div className=" w-1/2 h-full flex flex-col items-end justify-evenly">
        <span className="bg-white text-2xl px-2 mr-8 relative -top-[25px]">
          {" "}
          مشخصات{" "}
        </span>
        <div className=" w-full h-[60px] text-right flex justify-end items-center ">
          <p className="  pr-5"> : نام </p>
          <p className=""></p>
        </div>
        <div className=" w-full h-[60px] text-right flex justify-end items-center ">
          <p className="  pr-5"> : نام کاربری </p>
          <p className=""></p>
        </div>
        <div className=" w-full h-[60px] text-right flex justify-end items-center ">
          <p className="  pr-5"> : شماره همراه </p>
          <p className=""></p>
        </div>
        <div className=" w-full h-[60px] text-right flex justify-end items-center ">
          <p className="  pr-5"> : شماره ملی </p>
          <p className=""></p>
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col items-end justify-evenly">
        <div className=" w-full h-[60px] text-right flex justify-end items-center ">
          <p className="  pr-5"> : استان </p>
          <p className=""></p>
        </div>
        <div className=" w-full h-[60px] text-right flex justify-end items-center ">
          <p className="  pr-5"> : شهر </p>
          <p className=""></p>
        </div>
        <div className=" w-full h-[60px] text-right flex justify-end items-center ">
          <p className="  pr-5"> : ایمیل </p>
          <p className=""></p>
        </div>
        <div className=" w-full xl:h-[80px] h-[70px] mt-[20px] rounded-bl-[30px]">
          <button className="bg-[#fcbf49]  lg:w-[90%] w-[70%] h-full rounded-tr-[30px] rounded-bl-[30px] xl:text-xl lg:text-lg"> ویرایش اطلاعات </button>
        </div>
      </div>
    </div>
  );
};

export { Specification };
