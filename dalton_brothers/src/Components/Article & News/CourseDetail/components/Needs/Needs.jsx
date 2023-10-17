import React from "react";

const Needs = () => {
  return (
    <div className=" w-full flex flex-col px-[40px]">
      <div className=" w-full h-[100px] text-center font-bold text-2xl py-[25px]">
        {" "}
        پیش نیاز ها{" "}
      </div>
      <div className="w-full flex justify-between items-center ">
        <div className=" flex flex-col gap-5 text-gray-900 text-lg text-right w-1/2 py-5 ">
          <h5> لازم نیست </h5>
          <p> پیش زمینه برنامه نویسی داشته باشید  </p>
          <p> پیش زمینه برنامه نویسی داشته باشید  </p>
          <p> پیش زمینه برنامه نویسی داشته باشید  </p>

        </div>{" "}
        <div className="flex flex-col gap-5 text-gray-900 text-lg text-right w-1/2  py-5">
          <h5> لازم است </h5>
          <p> علاقه و پشت کار داشته باشید </p>
          <p> علاقه و پشت کار داشته باشید </p>
          <p> علاقه و پشت کار داشته باشید </p>
        </div>
      </div>
    </div>
  );
};

export { Needs };
