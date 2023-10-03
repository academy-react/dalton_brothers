import React from "react";
import { OneReportComponent } from "./OneReportComponent";

const ServiceRecord = () => {
  const data = [
    { title: "1k+", describe: "دوره های محبوب" ,border:false },
    { title: "2M", describe: "دانشجویان" ,border:true },
    { title: "30M", describe: "ثبت نام ها" ,border:true },
    { title: "4.5", describe: "برسی100000" ,border:true },
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
