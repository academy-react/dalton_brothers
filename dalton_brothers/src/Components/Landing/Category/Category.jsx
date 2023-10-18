import React from "react";
import { CategoryTitle } from "./CategorySections/CategoryTitle";
import { CategoryKind } from "./CategorySections/CategoryKind";

const Category = () => {
  return (
    <div
      style={{ direction: "rtl" }}
      className="w-4/5 m-auto my-5 font-irSans border border-transparent"
    >
      <CategoryTitle />
      <CategoryKind />
    </div>
  );
};

export { Category };
