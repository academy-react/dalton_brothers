import React from "react";

import wallet from "../../../../../assets/Images/panel/1.png";

const YourStock = () => {
  return (
    <div className=" w-full h-full border border-gray-500 rounded-[30px] flex flex-row-reverse">
      <div className=" w-1/2 h-full flex flex-col justify-between  ">
        <span className=" bg-white text-center  text-xl relative right-5 -top-4">
          {" "}
          موجودی شما{" "}
        </span>
        <div className=" w-[150px] flex h-[60px] gap-1 text-xl justify-center items-center ">
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
        <div className=" w-full h-[80px] mt-[20px] text-right rounded-bl-[30px]">
          <button className="bg-[#fcbf49]  w-[90%] h-[80px] rounded-tl-[30px] rounded-br-[30px] text-xl ">
            {" "}
            ویرایش اطلاعات{" "}
          </button>
        </div>
      </div>
      <div className="w-1/2 h-full  ">
        <img
          src={wallet}
          alt=""
          className="w-full h-[350px]  relative bottom-[49px] right-[6px]"
        ></img>
      </div>
    </div>
  );
};

export { YourStock };
