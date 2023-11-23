import React, { useState } from "react";

import user from "../../../../assets/Images/panel/user.png";
import { IconHeart } from "@tabler/icons-react";
import { IconMessageCircle2 } from "@tabler/icons-react";

const Comments = ({ author, describe, title, likeCount, disslikeCount }) => {
  const [like, setLike] = useState(false);

  return (
    <>
      <div className="xl:w-[1290px]  lg:w-[1020px] md:w-[780px]  w-[410px] my-[20px] flex flex-row-reverse pr-[50px]">
        <div className="relative xl:w-[1000px] lg:w-[900px] md:w-[670px] w-[400px]  border border-gray-400 rounded-[40px] md:py-8 md:px-16 py-3">
          {/*--------------------------------------------------------------- user img --------------------------------------------------------------- */}
          <div className="absolute top-[-40%] right-[-5%] border-2 border-[#9ca3af] lg:w-[130px] lg:h-[130px] md:w-[90px] md:h-[90px] w-[65px] h-[65px] rounded-full bg-white">
            <img
              src={user}
              className="w-[80%] m-auto rounded-full text-center"
            ></img>
          </div>
          {/*--------------------------------------------------------------- author --------------------------------------------------------------- */}
          <span className="absolute top-[-10%] right-[10%]  text-gray-600 bg-white lg:text-[19px] md:text-xl text-lg text-center font-irSBold px-3">
            {author}
          </span>
          {/*--------------------------------------------------------------- title --------------------------------------------------------------- */}
          <div className=" w-full text-right bg-white lg:text-[17px] text-lg text-gray-500 whitespace-nowrap font-irSBold pr-[20px] ">
            {title}
          </div>
          {/*--------------------------------------------------------------- describe --------------------------------------------------------------- */}
          <p className="text-gray-500 lg:text-xl text-md text-right md:pr-8 pr-3 font-BNa">
            {describe}
          </p>
        </div>
        <div className="lg:w-[200px] md:w-[90px] w-[40px] m-auto lg:flex lg:flex-row lg:justify-evenly flex-col justify-evenly font-irSBold text-[#4b5563]">
          {/*--------------------------------------------------------------- like --------------------------------------------------------------- */}
          <div className="lg:w-[50px] md:w-[50px] w-[40px]">
            {like ? (
              <IconHeart
                strokeWidth="1"
                fill="red"
                className="w-full h-[70%] text-error-100 cursor-pointer"
                onClick={() => setLike(!like)}
              />
            ) : (
              <IconHeart
                strokeWidth="1"
                className="w-full h-[70%] text-gray-800  cursor-pointer"
                onClick={() => setLike(!like)}
              />
            )}
            <span className="ml-[19px]">{likeCount}</span>
          </div>
          {/*--------------------------------------------------------------- disLike --------------------------------------------------------------- */}
          <div className="lg:w-[50px] lg:h-full md:w-[50px] md:h-[50px] w-[40px] h-[40px]">
            <IconMessageCircle2
              strokeWidth="1"
              className="w-full h-[70%] text-gray-800 cursor-pointer"
            />
            <span className="ml-[17px]">{disslikeCount}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export { Comments };
