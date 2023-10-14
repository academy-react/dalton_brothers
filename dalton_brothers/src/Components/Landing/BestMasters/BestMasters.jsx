import { masterData } from "../../../Core/Services/data";

import Master from "./BestMasterSection/Master";
import { Title } from "../../Common/Title/Title";

const BestMasters = () => {
  const data = masterData;

  return (
    <div className="mx-auto mt-[100px]  ">
      <Title
        topic={"اساتید برتر"}
        style={"text-center text-[#fcbf49] text-[30px] mb-[50px]"}
      />
      <div className=" mx-auto flex  flex-row-reverse flex-wrap justify-center gap-[50px] items-center">
        {data.map((master) => (
          <Master {...master} key={master.id} />
        ))}
      </div>
    </div>
  );
};

export { BestMasters };
