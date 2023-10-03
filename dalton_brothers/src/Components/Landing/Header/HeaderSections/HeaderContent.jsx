import React from "react";

import { HeaderText } from "./HeaderText";
import { HeaderPicture } from "./HeaderPicture";

const HeaderContent = () => {
  return (
    <div className="mt-60 flex flex-row flex-wrap justify-start gap-16 w-4/5 m-auto">
      <HeaderText />
      <HeaderPicture />
    </div>
  );
};

export { HeaderContent };
