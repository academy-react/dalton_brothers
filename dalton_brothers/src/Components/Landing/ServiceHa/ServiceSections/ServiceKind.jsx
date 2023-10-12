import React from "react";

import { OneServiceComponent } from "./OneServiceComponent";
import { ServiceData } from "../../../../Core/Services/data";

const ServiceKind = () => {
  const data = ServiceData;

  return (
    <div className="m-auto flex justify-center flex-wrap gap-9 mt-4 mb-11">
      {data.map((service, index) => (
        <OneServiceComponent {...service} key={index} />
      ))}
    </div>
  );
};

export { ServiceKind };
