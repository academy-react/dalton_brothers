import React, { useEz } from "react";

import security from "../../../../../assets/Images/categoy/security.png";
import DarkModeSecurity from "../../../../../assets/Images/categoy/modeSecurity.png";
import web from "../../../../../assets/Images/categoy/web.png";
import DarkModeWeb from "../../../../../assets/Images/categoy/modeWeb.png";
import it from "../../../../../assets/Images/categoy/it.png";
import DarkModeIt from "../../../../../assets/Images/categoy/modeIt.png";
import graphic from "../../../../../assets/Images/categoy/graphic.png";
import DarkModegraphic from "../../../../../assets/Images/categoy/modeGraphic.png";
import computer from "../../../../../assets/Images/categoy/computer.png";
import DarkModecomputer from "../../../../../assets/Images/categoy/modeComputer.png";
import ai from "../../../../../assets/Images/categoy/ai.png";
import DarkModeai from "../../../../../assets/Images/categoy/modeAi.png";
import { OneCategoryComponent } from "../OneCategoryComponent/OneCategoryComponent";
import { useSelector } from "react-redux";

const CategoryKind = () => {

  const colorMode = useSelector((state) => state.theme.theme);



  const data = [
    {
      imgPath:colorMode === "dark" ? DarkModeWeb :  web,
      title: "وب",
    },
    {
      imgPath:colorMode === "dark" ? DarkModecomputer : computer,
      title: "شبکه",
    },
    {
      imgPath:colorMode === "dark" ? DarkModeIt : it,
      title: "ای تی",
    },
    {
      imgPath:colorMode === "dark" ? DarkModeSecurity : security,
      title: "امنیت",
    },
    {
      imgPath:colorMode === "dark" ? DarkModegraphic : graphic,
      title: "گرافیک",
    },
    {
      imgPath:colorMode === "dark" ? DarkModeai : ai,
      title: "هوش مصنوعی",
    },
  ];
  return (
    <div className="m-auto flex justify-center flex-wrap gap-9 mt-10 mb-16  ">
      {data.map((service, index) => (
        <OneCategoryComponent {...service} key={index} />
      ))}
    </div>
  );
};

export { CategoryKind };
