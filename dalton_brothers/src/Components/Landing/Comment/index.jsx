import React from "react";
import { CommentPlace } from "../../Common/Comment/Index";
import { Title } from "../../Common/Title/Title";

import illustration from "../../../assets/Images/landingFooter-illustration.png";
const LandingComment = () => {
  return (
    <div className="w-[85%] h-[500px] m-auto mt-[100px]">
      <Title
        topic={"پیشنهادات و انتقادات"}
        style={"text-center text-[#fcbf49] text-[30px] mb-[50px]"}
      />
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
