import React from "react";
import { ServiceKind } from "./ServiceSections/ServiceKind";
import { Title } from "../../Common/Title/Title";

const Services = () => {
  return (
    <div style={{ direction: "rtl" }} className="w-4/5 mx-auto font-est">
      <Title topic={"خدمات"} style={"text-center text-[#fcbf49] text-[30px]"} />
      <ServiceKind />
    </div>
  );
};

export { Services };
