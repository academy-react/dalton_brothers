import React from "react";

import { CommentPlace } from "../../../Common/Comment/Index";
import { FooterDesc } from "../Footer/FooterSection/Footer-desc";

import illustration from "../../../../assets/Images/footer-img.png";

import style from "../layOut.module.css";

const LayFooter = () => {
  return (
    <>
      <FooterDesc style ={"pt-[120px]" } />
      <picture className={style.illustration}>
        <img src={illustration} alt="" />
      </picture>
      <div className=" w-1/3 h-full">
        <CommentPlace />
      </div>
    </>
  );
};

export default LayFooter;
