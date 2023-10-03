import React from "react";

const OneReportComponent = ({ title, describe }) => {
  return (
    <div className=" border-r-8 w-1/4">
      <h1 className="  text-center h-1/2 flex items-center justify-center font-black text-4xl">
        {title}
      </h1>
      <span className=" h-1/2 flex items-center justify-center">{describe}</span>
    </div>
  );
};

export { OneReportComponent };
