import React from "react";
import { CommentPlace } from "../../Common/Comment/Index";

import illustration from "../../../assets/Images/landingFooter-illustration.png";
const LandingComment = () => {
  return (
    <div className="w-[85%] h-[500px] m-auto">
      <div className="mr-3 text-2xl mt-[100px] mb-[20px] text-center font-sha text-[#fcbf49]">
        پیشنهادات و انتقادات
      </div>
      <div className="flex flex-row-reverse justify-center items-center">
        <div className="w-[500px] h-full">
          <CommentPlace />
        </div>
        <picture className="w-[40%]">
          <img src={illustration} alt="" className="w-[100%]" />
        </picture>
      </div>
    </div>
  );
};

export default LandingComment;
