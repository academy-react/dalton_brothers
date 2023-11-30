import React, { useEffect, useState } from "react";

import security from "../../../../../assets/Images/security.png";
import math from "../../../../../assets/Images/math.png";
import web from "../../../../../assets/Images/web.png";
import language from "../../../../../assets/Images/language.png";
import it from "../../../../../assets/Images/it.png";
import graphic from "../../../../../assets/Images/graphic.png";
import computer from "../../../../../assets/Images/computer.png";
import ai from "../../../../../assets/Images/ai.png";
import { OneCategoryComponent } from "../OneCategoryComponent/OneCategoryComponent";
import { basicGet } from "../../../../../Core/Services/api/course/courseList/courseList";

const CategoryKind = () => {
  const [category, setCategory] = useState();
  const data = category && [
    {
      imgPath: web,
      title: category[0].techName,
    },
    {
      imgPath: computer,
      title: category[1].techName,
    },
    {
      imgPath: it,
      title: category[2].techName,
    },
    {
      imgPath: security,
      title: category[3].techName,
    },
    {
      imgPath: graphic,
      title: category[4].techName,
    },
    {
      imgPath: ai,
      title: category[5].techName,
    },
    {
      imgPath: graphic,
      title: category[6].techName,
    },
  ];
  const getCategory = async () => {
    const result = await basicGet("/Home/GetTechnologies");
    setCategory(result);
  };
  category && console.log(category[0]);

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className="m-auto flex justify-center flex-wrap gap-9 mt-10 mb-16">
      {data &&
        data.map((service, index) => (
          <OneCategoryComponent {...service} key={index} />
        ))}
    </div>
  );
};

export { CategoryKind };
