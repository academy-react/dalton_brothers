import React from "react";
import { OneReportComponent } from "./OneReportComponent";

const ServiceRecord = () => {
  const data = [
    { title: "1k+", describe: "دوره های محبوب" },
    { title: "2M", describe: "دانشجویان" },
    { title: "30M", describe: "ثبت نام ها" },
    { title: "4.5", describe: "برسی100000" },
  ];
  return (
    <div className="m-auto  h-20 flex flex-row justify-center mb-80">
      {data.map((el, index) => (
        <OneReportComponent {...el} key={index} />
      ))}
    </div>
  );
};

export { ServiceRecord };
