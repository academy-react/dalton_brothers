import React, { useState } from "react";

import user from "../../../../Assets/Images/user-gold-2.png";
import { IconHeart } from '@tabler/icons-react';
import { IconMessageCircle2 } from '@tabler/icons-react';


const Comments = ({text,userName,userLogo,date}) => {
  const [like, setLike] = useState(false)

  return (
    <>
      <div className="xl:w-[1290px] lg:h-[170px] lg:w-[1020px] md:w-[780px] md:h-[170px] w-[410px] h-[130px] my-[20px] flex flex-row-reverse pr-[50px]">
        <div className=" xl:w-[1000px] lg:w-[900px] md:w-[670px] md:h-[140px] lg:h-[150px] w-[400px] h-[130px] border border-gray-400 rounded-[40px] md:py-8 md:px-16 py-3 px-6">
          <div className="border border-gray-700 lg:w-[130px] lg:h-[130px] md:w-[90px] md:h-[90px] w-[65px] h-[65px] rounded-full relative lg:bottom-[95px] xl:left-[850px] lg:left-[640px] md:left-[530px] md:bottom-[75px] bottom-[40px] left-[255px]  text-gray-700 bg-white ">
            <img src={userLogo} alt={user} className="w-full h-full rounded-full text-center"></img>
          </div>
          <span className="bg-white relative lg:bottom-[184px] md:bottom-[146px] xl:left-[510px] lg:left-[330px] md:left-[300px] left-[10px] bottom-[95px] lg:text-2xl md:text-xl text-lg text-center font-irSBold p-3"> {userName} </span>
          <div className=" bg-white relative lg:bottom-[64px] md:bottom-[30px] -bottom-[0px] md:left-[60px] md:text-xl text-lg text-gray-500 w-32 text-center whitespace-nowrap"> {date} </div>
          <p className="text-gray-600 lg:text-xl text-md relative lg:bottom-[190px] md:bottom-[145px] bottom-[115px] text-right md:pr-4 pr-3 font-irSans">
           {text}
          </p>
        </div>
        <div className=" lg:w-[200px] lg:h-[50px] md:w-[90px] md:h-[160px] w-[40px] h-[90px] m-auto lg:flex lg:flex-row lg:justify-evenly flex-col justify-evenly">
          <div className="lg:w-[50px] lg:h-full md:w-[50px] md:h-[50px] w-[40px] h-[40px]">
            {
              like ? 
              <IconHeart strokeWidth="1" fill="red" className="w-full h-full text-red-500 cursor-pointer" onClick={()=> setLike(!like) }/> 
              :
              <IconHeart strokeWidth="1" className="w-full h-full text-gray-800  cursor-pointer" onClick={()=> setLike(!like)}/> 
            }
          </div>
          <div className="lg:w-[50px] lg:h-full md:w-[50px] md:h-[50px] w-[40px] h-[40px]">
            <IconMessageCircle2  strokeWidth="1" className="w-full h-full text-gray-800 cursor-pointer"/>
          </div>
        </div>
      </div>
    </>
  );
};

export { Comments };
