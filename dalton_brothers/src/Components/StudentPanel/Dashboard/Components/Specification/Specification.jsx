import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../Common/buttons";

const Specification = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full h-full border border-gray-200 rounded-[30px] flex flex-row-reverse xl:text-xl lg:text-lg whitespace-nowrap font-irSans">
      <div className=" w-1/2 h-full flex flex-col items-end justify-evenly relative pr-3 pt-1">
        <span className="bg-white flex justify-end w-[110px] pr-4  text-xl absolute right-8 -top-4">
          {" "}
          مشخصات{" "}
        </span>
        <div className=" w-full h-[60px] text-right flex justify-end items-center text-lg ">
          <p className="  pr-5 text-gray-600"> : نام </p>
          <p className=""></p>
        </div>
        <div className=" w-full h-[60px] text-right flex justify-end items-center text-lg ">
          <p className="  pr-5 text-gray-600"> : نام کاربری </p>
          <p className=""></p>
        </div>
        <div className=" w-full h-[60px] text-right flex justify-end items-center text-lg">
          <p className="  pr-5 text-gray-600"> : شماره همراه </p>
          <p className=""></p>
        </div>
        <div className=" w-full h-[60px] text-right flex justify-end items-center text-lg">
          <p className="  pr-5 text-gray-600"> : شماره ملی </p>
          <p className=""></p>
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col items-end justify-evenly">
        <div className=" w-full h-[60px] text-right flex justify-end items-center text-lg">
          <p className="  pr-5 text-gray-600"> : استان </p>
          <p className=""></p>
        </div>
        <div className=" w-full h-[60px] text-right flex justify-end items-center text-lg">
          <p className="  pr-5 text-gray-600"> : شهر </p>
          <p className=""></p>
        </div>
        <div className=" w-full h-[60px] text-right flex justify-end items-center text-lg">
          <p className="  pr-5 text-gray-600"> : ایمیل </p>
          <p className=""></p>
        </div>
        <div className=" w-full h-[63px] mt-[20px] rounded-bl-[30px]">
          {/* <button ></button> */}
          <Button className="bg-[#fcbf49] text-white font-irSBold text-[16px]  w-[75%] h-full rounded-tr-[30px] rounded-bl-[30px]  rounded-br-none rounded-tl-none " value={" ویرایش اطلاعات "} onClick={() => navigate("/panel/EditProfile")}/>
        </div>
      </div>
    </div>
  );
};

export { Specification };
