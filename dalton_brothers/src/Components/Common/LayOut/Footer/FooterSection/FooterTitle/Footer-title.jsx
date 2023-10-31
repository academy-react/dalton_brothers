import React from "react";
import FooterText from "../FooterText/Footer-text";

const FooterTitle = ({ title }) => {
  return (
    <>
      <h1 className="font-irSBold text-slate-800 text-lg whitespace-nowrap">
        {title}
      </h1>
    </>
  );
};

export default FooterTitle;
