import React from "react";

import { FooterDesc } from "../../Common/LayOut/Footer/FooterSection/FooterDesc/Footer-desc";

import logo from "../../../assets/Images/namad.png";
import rezi from "../../../assets/Images/rezi.png";
import kasbokar from "../../../assets/Images/kasbokar.png";

const LandingFooter = () => {
  return (
    <div
      className={`2xl:h-[800px] xl:bg-[url('../../../../src/assets/Images/landing-footer.svg')] xl:bg-no-repeat xl:w-[100vw] xl:h-[600px] xl:bg-[length:100vw] xl:bg-bottom xl:bg-transparent xl:items-end xl:justify-end md:items-center flex flex-col flex-nowrap items-start w-[100%] h-fit bg-[#fcbf49]`}
    >
      <div className=" flex justify-center items-center flex-row-reverse mt-[30px] px-[20px]">
        <FooterDesc style={"gap-[10px]"} />
        <div className="flex flex-col w-[80px] h-[300px] mb-[30px]">
          <div className="w-full h-full">
            <img src={logo} alt="" />
          </div>
          <div className="w-full h-full">
            <img src={rezi} alt="" />
          </div>
          <div className="w-full h-full">
            <img src={kasbokar} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { LandingFooter };
