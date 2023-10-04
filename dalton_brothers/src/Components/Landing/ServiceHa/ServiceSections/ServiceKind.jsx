import React from "react";

import { OneServiceComponent } from "./OneServiceComponent";
import WarrantyIcon from "../../../../assets/Images/WarrantyIcon.png";
import SupportIcon from "../../../../assets/Images/SupportIcon.png";
import communication from "../../../../assets/Images/communication.png";
import JobChances from "../../../../assets/Images/JobChances.png";

const ServiceKind = () => {
  const data = [
    {
      imgPath: WarrantyIcon,
      title: "مدرک معتبر",
      desc: "تیم ما مشاوره های لازم را به شما می دهد",
    },
    {
      imgPath: SupportIcon,
      title: "فرصت های شغلی",
      desc: "تیم ما مشاوره های لازم را به شما می دهد",
    },
    {
      imgPath: communication,
      title: "پشتیبانی 24 ساعته",
      desc: "تیم ما مشاوره های لازم را به شما می دهد",
    },
    {
      imgPath: JobChances,
      title: "مشاوره",
      desc: "تیم ما مشاوره های لازم را به شما می دهد",
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

export { ServiceKind };
