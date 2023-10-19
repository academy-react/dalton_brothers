import React from "react";

import style from "./LandingFooter.module.css";
import { FooterDesc } from "../../Common/LayOut/Footer/FooterSection/Footer-desc";

import logo from "../../../assets/Images/namad.png";
import rezi from "../../../assets/Images/rezi.png";
import kasbokar from "../../../assets/Images/kasbokar.png";

const LandingFooter = () => {
  return (
    <div className={style.landingFooter}>
    <div className="h-[500px]  bg-green-600 "></div>
    <div className="flex justify-center items-center flex-row-reverse">
      <FooterDesc />
      <div className="flex flex-col w-[100px] h-[300px] mb-[30px]">
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
