import React from "react";

import { CategoryKind } from "./CategorySections/CategoryKind";
import { Title } from "../../Common/Title/Title";

const Category = () => {
  return (
    <div style={{ direction: "rtl" }} className="w-4/5 m-auto my-5 font-est">
      <Title
        topic={"دسته بندی ها"}
        style={"text-center text-[#fcbf49] text-[30px]"}
      />
      <CategoryKind />
    </div>
  );
};

export { Category };
