import React from "react";

import wallet from "../../../../../assets/Images/panel/1.png";

const YourStock = () => {
  return (
    <div className=" w-full h-full border border-gray-500 rounded-[30px] flex flex-row-reverse  whitespace-nowrap">
      <div className=" lg:w-1/2 w-full h-full flex flex-col justify-between  ">
        <span className=" bg-white text-center  text-xl relative right-5 -top-4 ">
          {" "}
          موجودی شما{" "}
        </span>
        <div className=" w-[150px] flex h-[60px] gap-1 xl:text-xl lg:text-lg justify-center items-center ">
          <p className=""> تومان </p>
          <p className=""> 250000 </p>
        </div>
        <div className=" w-full h-[70px] flex-col items-center ">
          <p className=" w-full text-center text-gray-700 "> نوع شارژ </p>
          <div className="w-[90%] h-[35px] flex justify-between m-auto mt-2 text-center ">
            <div className="bg-[#e6e6e6] h-full w-[45%] rounded-r-md rounded-l-[30px]">
              {" "}
              دلار{" "}
            </div>
            <div className="bg-[#fcbf49] h-full w-[45%] rounded-l-md rounded-r-[30px]">
              {" "}
              تومان{" "}
            </div>
          </div>
        </div>
        <div className=" w-full xl:h-[80px] h-[70px] mt-[20px] lg:text-right text-center rounded-bl-[30px]">
          <button className="bg-[#fcbf49]  lg:w-[90%] w-[50%] h-full rounded-tl-[30px] rounded-br-[30px] max-lg:rounded-tr-[30px] max-lg:rounded-b-md xl:text-xl lg:text-lg  ">
            {" "}
            ویرایش اطلاعات{" "}
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 h-full lg:flex hidden ">
        <img
          src={wallet}
          alt=""
          className="w-full xl:h-[350px] h-[270px] relative xl:bottom-[49px] xl:right-[6px] bottom-[20px] right-[6px]"
        ></img>
      </div>
    </div>
  );
};

export { YourStock };
