import React from "react";

import { IconUserFilled } from '@tabler/icons-react';

const AboutArticle = ({currentView,title,insertDate,addUserFullName,currentImageAddressTumb}) => {
  return (
    <div className=" 2xl:h-[350px] xl:h-[310px] lg:h-72 md:h-60 h-[690px] md:flex md:justify-between md:flex-row-reverse flex max-md:flex-col max-md:items-center max-md:gap-9 mx-auto mt-16">
      <div className="bg-green-900 md:h-full h-52 2xl:w-[500px] xl:w-[400px] lg:w-96 md:w-80 w-[300px] lg:rounded-[50px] rounded-[40px] xl:ml-5 ml-2">
        <img
          className="w-full h-full rounded-[50px]"
          src={currentImageAddressTumb}
        ></img>
      </div>
      <div className=" md:h-full h-60 2xl:w-80 xl:w-60 lg:w-52 md:w-36 w-60 flex flex-col justify-center items-center">
        <div className=" 2xl:w-52 2xl:h-52 xl:w-44 xl:h-44 lg:w-40 lg:h-40 md:w-32 md:h-32 h-24 w-24 rounded-full bg-gray-200 bg-opacity-60 flex items-center justify-center">
        <IconUserFilled  className='w-[70%] h-[70%] text-orange-300'/>
        </div>
        <div className=" flex justify-center h-9 text-gray-700 2xl:text-2xl text-xl font-irSans mt-6 text-center ">
          <div className="pr-2"> {addUserFullName} </div>
          <div className=""> : نویسنده </div>
        </div>
      </div>
      <div className="  md:h-full h-60 2xl:w-80 xl:w-60 lg:w-52 md:w-36 w-60  flex flex-col justify-center items-center">
        <div className=" 2xl:w-52 2xl:h-52 xl:w-44 xl:h-44 lg:w-40 lg:h-40 md:w-32 md:h-32 h-24 w-24 rounded-full bg-gray-200 bg-opacity-60 flex items-center justify-center">
          <p className="  text-orange-300 font-irSBold text-3xl whitespace-break-spaces">{insertDate}</p>
        </div>
        <p className="h-9 text-gray-700  2xl:text-2xl text-xl font-irSans mt-6 ">
          {" "}
          تاریخ انتشار{" "}
        </p>
      </div>
      <div className=" md:h-full h-60 2xl:w-80 xl:w-60 lg:w-52 md:w-36 w-60 flex flex-col justify-center items-center">
        <div className=" 2xl:w-52 2xl:h-52 xl:w-44 xl:h-44 lg:w-40 lg:h-40 md:w-32 md:h-32 h-24 w-24 rounded-full bg-gray-200 bg-opacity-60 flex items-center justify-center">
          <p className="  text-orange-300 font-irSBold text-3xl"> {currentView} </p>
        </div>
        <p className="h-9 text-gray-700  2xl:text-2xl text-xl font-irSans mt-6 ">
          {" "}
           تعداد بازدید{" "}
        </p>
      </div>
    </div>
  );
};

export { AboutArticle };
