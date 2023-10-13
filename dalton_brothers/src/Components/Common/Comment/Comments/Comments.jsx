import React, { useState } from "react";

import user from "../../../../Assets/Images/user-gold-2.png";
import { IconHeart } from '@tabler/icons-react';
import { IconMessageCircle2 } from '@tabler/icons-react';


const Comments = ({text,userName,userLogo,date}) => {

  return (
    <>
      <div className="xl:w-[1200px] lg:h-[170px] lg:w-[1000px] md:w-[700px] md:h-[220px] w-[500px] h-[170px] my-[20px] flex flex-row-reverse px-[50px]">
        <div className=" xl:w-[900px] lg:w-[800px] md:w-[600px] md:h-[190px] lg:h-[150px] w-[450px] h-[170px] border border-gray-600 rounded-[40px] md:py-8 md:px-16 py-3 px-6">
          <div className="border border-gray-700 lg:w-[130px] lg:h-[130px] md:w-[90px] md:h-[90px] w-[65px] h-[65px] rounded-full relative lg:bottom-[95px] xl:left-[755px] lg:left-[580px] md:left-[415px] md:bottom-[75px] bottom-[40px] left-[285px]  text-gray-700 bg-white ">
            <img src={userLogo} alt={user} className="w-full h-full rounded-full text-center"></img>
          </div>

          <span className="bg-white relative lg:bottom-[184px] md:bottom-[146px] xl:left-[510px] lg:left-[330px] md:left-[200px] left-[90px] bottom-[95px] lg:text-2xl md:text-xl text-lg text-center font-bold "> {userName} </span>
          <span className=" bg-white relative lg:bottom-[34px] -bottom-[77px] md:left-[60px]  md:text-xl text-lg text-gray-500"> {date} </span>
          <p className="text-gray-600 md:text-xl text-md relative lg:bottom-[150px] md:bottom-[120px] bottom-[80px] text-right md:pr-4 pr-3">
           {text}
          </p>
        </div>
        <div className=" lg:w-[200px] lg:h-[80px] md:w-[70px] md:h-[160px] w-[40px] h-[90px] m-auto lg:flex lg:flex-row lg:justify-evenly flex-col justify-center">
          <div className="lg:w-[80px] lg:h-full md:w-[60px] md:h-[60px] w-[40px] h-[40px]">
            <IconHeart strokeWidth="1" className="w-full h-full text-gray-500"/> 
          </div>
          <div className="lg:w-[80px] lg:h-full md:w-[60px] md:h-[60px] w-[40px] h-[40px]">
            <IconMessageCircle2  strokeWidth="1" className="w-full h-full text-gray-500"/>
          </div>
        </div>
      </div>
    </>
  );
};

export { Comments };
