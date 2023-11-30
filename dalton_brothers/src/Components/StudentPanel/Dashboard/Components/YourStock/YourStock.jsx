import React, { useState } from "react";

import wallet from "../../../../../assets/Images/panel/1.png";
import { useDispatch, useSelector } from "react-redux";
import { onMoneyChange } from "../../../../../Redux/money";
import {
  getItem,
  setItem,
} from "../../../../../Core/Services/common/storage.services";

const YourStock = () => {
  const dispatch = useDispatch();
  const currentAmount = JSON.parse(getItem("newAmount"));
  dispatch(onMoneyChange(currentAmount));
  const money = useSelector((state) => state.money.money);
  const handleIncrease = () => {
    const newAmount = currentAmount + 100000;
    console.log(currentAmount);
    setItem("newAmount", newAmount);
    dispatch(onMoneyChange(newAmount));
    if (newAmount === 1000000) alert("بسه دیگه  برو خونتون");
    if (newAmount === 1500000) alert("چه خبرته بانک نیومدی که");
    if (newAmount === 2000000) alert("خیلی خری");
  };
  return (
    <div className=" w-full h-full border border-gray-200 rounded-[30px] flex flex-row-reverse  whitespace-nowrap font-irSans relative bg-white">
      <div className=" lg:w-1/2 w-full h-full flex flex-col justify-between   ">
        <span className=" bg-white w-[120px]  flex justify-end items-center pr-4  text-lg absolute right-6 -top-4 ">
          موجودی شما
        </span>
        <div className=" w-[150px] flex h-[60px] gap-1 xl:text-xl lg:text-lg justify-center items-center pt-8">
          <p className="text-gray-600"> تومان </p>
          <p className="text-gray-600">{money ? money : 0}</p>
        </div>
        <div className=" w-full h-[70px] flex-col items-center ">
          <p className=" w-full text-center text-sm text-gray-500 ">نوع شارژ</p>
          <div className="w-[90%] h-[35px] flex justify-between items-center  mt-5 text-center  ">
            <div className="bg-[#e6e6e6] h-full w-[45%] rounded-r-md rounded-l-[30px] flex justify-center items-center text-sm ">
              دلار
            </div>
            <div className="bg-[#fcbf49] h-full w-[45%] rounded-l-md rounded-r-[30px] flex justify-center items-center text-sm">
              تومان
            </div>
          </div>
        </div>
        <div className=" w-full  h-[60px] mt-[20px] lg:text-right text-center rounded-bl-[30px] flex justify-end">
          <button
            className="bg-[#fcbf49]  lg:w-full w-[100%] h-full rounded-tl-[30px] rounded-br-[30px] max-lg:rounded-tr-[30px] max-lg:rounded-b-md   flex justify-center items-center text-[16px] text-white font-irSBold"
            onClick={() => handleIncrease()}
          >
            شارژ حساب
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 h-full lg:flex hidden ">
        <img
          src={wallet}
          alt=""
          className="w-[120px] h-[280px] absolute bottom-[-2px] left-0"
        ></img>
      </div>
    </div>
  );
};

export { YourStock };
