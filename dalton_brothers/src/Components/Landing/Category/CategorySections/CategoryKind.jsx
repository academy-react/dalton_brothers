import React from "react";

import { OneServiceComponent } from "./OneCategoryComponent";

import { CatData } from "../../../../Core/Services/data";

const CategoryKind = () => {
  const data = CatData;

  return (
    <div className="m-auto flex justify-center flex-wrap gap-9 mt-4 mb-11">
      {data.map((service, index) => (
        <OneServiceComponent {...service} key={index} />
      ))}
    </div>
  );
};

export { CategoryKind };
