import React from "react";

import Master from "../../../Landing/BestMasters/BestMasterSection/Master";
import { masterData } from "../../../../Core/Services/data";

const CourseTeacher = () => {
  const data = masterData;

  return (
    <div className=" w-full flex flex-col gap-5 ">
      <p className="text-center py-8 font-bold text-2xl dark:text-mode-50 "> اساتید دوره </p>
      <div>
        <div className=" mx-auto flex  flex-row-reverse flex-wrap justify-center gap-[50px] items-center">
          {data.map((master) => (
            <Master {...master} key={master.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { CourseTeacher };
