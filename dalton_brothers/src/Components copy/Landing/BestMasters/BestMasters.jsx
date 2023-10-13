import { masterData } from "../../../Core/Services/data";

import Master from "./BestMasterSection/Master";

const BestMasters = () => {
  const data = masterData;

  return (
    <div className="mx-auto mt-[100px]  ">
      <div className="mr-3 text-2xl h-28 text-center font-sha text-[#fcbf49]">
        اساتید برتر
      </div>
      <div className=" mx-auto flex  flex-row-reverse flex-wrap justify-center gap-[50px] items-center">
        {data.map((master) => (
          <Master {...master} key={master.id} />
        ))}
      </div>
    </div>
  );
};

export { BestMasters };
