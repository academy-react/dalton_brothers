import React from "react";
import { ServiceTitle } from "./ServiceSections/ServiceTitle";
import { ServiceKind } from "./ServiceSections/ServiceKind";

const Services = () => {
  return (
    <div style={{ direction: "rtl" }} className="w-4/5 mx-auto font-est">
      <ServiceTitle />
      <ServiceKind />
    </div>
  );
};

export { Services };
