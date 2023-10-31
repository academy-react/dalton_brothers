import React, { Fragment } from "react";

import { FooterIcon } from "../FooterIcon/Footer-icon";
import FooterTitle from "../FooterTitle/Footer-title";
import FooterText from "../FooterText/Footer-text";

const FooterDesc = ({style}) => {
  return (
    
    <div className={ `h-full flex flex-row-reverse gap-28  max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-1  ${style}` }>
      <div className="py-[50px] px-9 flex flex-col gap-[30px]">
        <FooterTitle title={"بخش های سایت"} />
        <FooterText text={"قوانین و مقررات"} /> 
        <FooterText text={"مدرسان سایت"} />
        <FooterText text={"درباره ی سایت"} />
        <FooterText text={"ارتباط با ما"} />
      </div>
      
      <div className="py-[50px] px-9 flex flex-col items-center gap-[30px]">
        <FooterTitle title={"راه های ارتباطی"} />
        <FooterText text={"09034893230"} />
        <FooterText text={"dalton-brothers@gmail.com"} />
        <FooterText text={"t.me/daltonBrothers"} />
        <FooterIcon/>
      </div>
      
    </div>
    
  );
};

export { FooterDesc };
