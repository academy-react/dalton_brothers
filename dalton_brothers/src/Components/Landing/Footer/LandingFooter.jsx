import React from "react";

import { FooterDesc } from "../../LayOut/Footer/FooterSection/Footer-desc";

import logo from "../../../assets/Images/namad.png";
import rezi from "../../../assets/Images/rezi.png";
import kasbokar from "../../../assets/Images/kasbokar.png";

const LandingFooter = () => {
  return (
    <div
      className={`2xl:h-[800px] xl:bg-[url('../../../../src/assets/Images/landing-footer.svg')] dark:xl:bg-[url('../../../../src/assets/Images/landing-footer-mode.svg')] xl:bg-no-repeat  xl:h-[600px] xl:bg-[length:100vw] xl:bg-bottom xl:bg-transparent xl:items-end xl:justify-end md:items-center flex flex-col flex-nowrap items-start w-[100%] h-fit dark:bg-DarkPallete-100 bg-[#fcbf49] max-md:items-center `}
    >
      <div className=" flex justify-center items-center flex-row-reverse gap-8 mt-[30px] px-[20px] max-xl:items-center max-xl:flex max-xl:flex-col">
        <FooterDesc className={"gap-8"} />
        <div className="xl:flex-col xl:w-[100px] sm:w-[440px] w-[300px] flex-row flex h-[300px] mb-[30px]">
          <div className="w-[full]">
            <img src={logo} alt="" />
          </div>
          <div className="w-[full]">
            <img src={rezi} alt="" />
          </div>
          <div className="w-[full]">
            <img src={kasbokar} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { LandingFooter };
