import React from "react";

import { Link } from "react-router-dom";

const LayOutHeaders = ({ topic }) => {
  return (
    <div className="w-[90%] m-auto flex flex-row-reverse justify-between items-center">
      <div className=" font-black text-2xl h-20flex justify-start items-center text-[#6b7280] font-sha">
        {topic}
      </div>
      <Link
        onClick={() => (Document.documentElement.scrollTop = 0)}
        to={"/"}
        className="w-[210px] h-[50px] bg-[#6c63ff] hover:cursor-pointer hover:bg-[#463fd3] flex justify-center items-center rounded-full font-sha text-[#fff] text-l"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
};

export { LayOutHeaders };
