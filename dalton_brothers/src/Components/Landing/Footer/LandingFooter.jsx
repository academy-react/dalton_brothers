import React from "react";

import style from "./LandingFooter.module.css";
import { FooterDesc } from "../../Common/LayOut/Footer/FooterSection/Footer-desc";

import logo from "../../../assets/Images/namad.png";
import rezi from "../../../assets/Images/rezi.png";
import kasbokar from "../../../assets/Images/kasbokar.png";

const LandingFooter = () => {
  return (
    <div className={style.landingFooter}>
    <div className="h-1/2     "></div>
    <div className="h-1/2  flex justify-start items-center flex-row-reverse pr-40 gap-28 pt-20">
      <FooterDesc />
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
