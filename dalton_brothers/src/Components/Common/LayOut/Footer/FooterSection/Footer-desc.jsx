import React, { Fragment } from "react";

import FooterTitle from "./Footer-title";
import FooterText from "./Footer-text";

const FooterDesc = () => {
  return (
    <Fragment>
    <div className=" h-full flex flex-row-reverse gap-1 ">
      <div className="py-[50px] px-9 flex flex-col gap-[30px]">
        <FooterTitle title={"بخش های سایت"} />
        <FooterText text={"قوانین و مقررات"} /> 
        <FooterText text={"مدرسان سایت"} />
        <FooterText text={"درباره ی سایت"} />
        <FooterText text={"ارتباط با ما"} />
      </div>
      <div className="py-[50px] px-9 flex flex-col gap-[30px]">
        <FooterTitle title={"راه های ارتباطی"} />
        <FooterText text={"09034893230"} />
        <FooterText text={"dalton-brothers@gmail.com"} />
        <FooterText text={"t.me/daltonBrothers"} />
      </div>
    </div>
    </Fragment>
  );
};

export { FooterDesc };
