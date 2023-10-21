import React from "react";

import { Title } from "../../../Common/Title/Title";
import { FilterMasters } from "./FilterMaster";
import { masterData } from "../../../../Core/Services/data";

import style from "./Filter.module.css";
const Filter = () => {
  const data = masterData;

  return (
    <div className="w-[90%] m-auto ">
      <input
        type="checkbox"
        name="Filter"
        id="Filter"
        className={style.filterInput}
        defaultChecked
      />
      <label
        htmlFor="Filter"
        className={` w-fit px-[85px] py-[5px] border-2 bg-[#334155] text-white rounded-full font-irSBold text-lg cursor-pointer ${style.filterLabel}`}
      >
        فیلتر
      </label>
      <div
        className={`h-0 overflow-hidden px-[50px] py-[20px] m-auto transition-all duration-500 rounded-[30px] bg-[#ebefff] ${style.content}`}
      >
        <div className="border-2 flex flex-col items-start">
          <Title
            topic={"استاد دوره"}
            style={"font-sha text-3xl text-[#545454]"}
          />
          <div className="w-full flex flex-row justify-around">
            {data.map((el) => (
              <FilterMasters {...el} key={el.id} />
            ))}
          </div>
        </div>
        <div className="border-2 h-[20%]">salam2</div>
        <div className="border-2 h-[20%]">salam3</div>
        <div className="border-2 h-[20%]">salam4</div>
        <div className="border-2 h-[20%]">salam5</div>
      </div>
    </div>
  );
};

export { Filter };
