import React from "react";

import { Button } from "../../../Common/buttons";

const OneServiceComponent = ({ imgPath, title }) => {
  return (
    <div className="basis-64 flex flex-col items-center px-3 py-6 gap-5 rounded-lg">
      <picture className="bg-[#f2f2f2] w-[220px] h-[220px] flex items-center rounded-full">
        <img src={imgPath} alt="" className="w-[150px] m-auto" />
      </picture>
      <Button
        style={
          "font-vaz text-[#3c3c3c] bg-ham bg-no-repeat bg-[10%] bg-15% bg-[#fcbf49]"
        }
        text={title}
      />
    </div>
  );
};

export { OneServiceComponent };
