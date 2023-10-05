import React from "react";

import { OneServiceComponent } from "./OneCategoryComponent";

import security from "../../../../assets/Images/security.png";
import math from "../../../../assets/Images/math.png";
import web from "../../../../assets/Images/web.png";
import language from "../../../../assets/Images/language.png";
import it from "../../../../assets/Images/it.png";
import graphic from "../../../../assets/Images/graphic.png";
import computer from "../../../../assets/Images/computer.png";
import ai from "../../../../assets/Images/ai.png";

const CategoryKind = () => {
  const data = [
    {
      imgPath: web,
      title: "وب",
    },
    {
      imgPath: computer,
      title: "شبکه",
    },
    {
      imgPath: it,
      title: "ای تی",
    },
    {
      imgPath: security,
      title: "امنیت",
    },
    {
      imgPath: graphic,
      title: "گرافیک",
    },
    {
      imgPath: ai,
      title: "هوش مصنوعی",
    },
    {
      imgPath: language,
      title: "زبان انگلیسی",
    },
    {
      imgPath: math,
      title: "ریاضی",
    },
  ];
  return (
    <div className="m-auto flex justify-center flex-wrap gap-9 mt-4 mb-11">
      {data.map((service, index) => (
        <OneServiceComponent {...service} key={index} />
      ))}
    </div>
  );
};

export { CategoryKind };
