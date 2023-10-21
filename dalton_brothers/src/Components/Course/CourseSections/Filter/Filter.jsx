import React, { useState } from "react";

import { Title } from "../../../Common/Title/Title";
import { FilterMasters } from "./FilterMaster";
import { FilterCourse } from "./FilterCourse";
import { masterData, courseNameData } from "../../../../Core/Services/data";

import style from "./Filter.module.css";
const Filter = () => {
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
        className={`${style.filterLabel} transition-all duration-700 relative left-0 w-fit px-[85px] py-[5px] border-2 bg-[#334155] text-white rounded-full font-irSBold text-lg cursor-pointer `}
      >
        فیلتر
      </label>
      <div
        className={`${style.content} h-0 w-[80%] overflow-hidden  m-auto transition-all duration-700 rounded-[30px] bg-[#ebefff]`}
      >
        <div className="flex flex-col items-start">
          <Title
            topic={"استاد دوره"}
            style={"font-sha text-xl text-[#545454] my-[30px]"}
          />
          <div className="w-full flex flex-row flex-wrap gap-[20px] justify-around">
            {masterData.map((el) => (
              <FilterMasters {...el} key={el.id} />
            ))}
          </div>
        </div>
        <div className="h-[20%]">
          <Title
            topic={"بازه ی قیمت"}
            style={"font-sha text-xl text-[#545454] text-left my-[30px]"}
          />
          <div className={style.priceRange}></div>
        </div>
        <div>
          <Title
            topic={"موضوع دوره"}
            style={"font-sha text-xl text-[#545454] my-[30px]"}
          />
          <div className="w-full flex flex-row flex-wrap gap-[20px] justify-around">
            {courseNameData.map((el) => (
              <FilterCourse {...el} key={el.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Filter };
