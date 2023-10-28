import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Title } from "../../../Common/Title/Title";
import { FilterCourse } from "./FilterCourse";
import { FilterMaster } from "./FilterMaster";
import { RangeSlider } from "./RangePrice";

import style from "./Filter.module.css";
const Filter = () => {
  const minPrice = useSelector((state) => state.priceFilter.minPrice);
  const maxPrice = useSelector((state) => state.priceFilter.maxPrice);

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
        className={`${style.filterLabel} min-[500px]:text-lg min-[500px]:px-[106px] text-xs px-[60px] py-[5px]  transition-all duration-700 relative left-0 w-fit border-2 bg-[#334155] text-white rounded-full font-irSBold cursor-pointer `}
      >
        فیلتر
      </label>
      <div
        className={`${style.content} h-0 w-[80%] overflow-hidden  m-auto transition-all duration-700 rounded-[30px] bg-[#f1f5f9]`}
      >
        <div className="flex flex-col items-start">
          <Title
            topic={"استاد دوره"}
            style={"font-sha text-xl text-[#545454] my-[30px]"}
          />
          <FilterMaster />
        </div>
        <div className="h-[20%]">
          <Title
            topic={"بازه ی قیمت"}
            style={"font-sha text-xl text-[#545454] text-left my-[30px]"}
          />
          <div className={style.priceRange}>
            <RangeSlider
              className="xl:w-[60%] sm:w-[90%] w-full mx-auto relative top-10 z-0"
              minVal={minPrice}
              maxVal={maxPrice}
              min={250000}
              max={5000000}
              step={50000}
              priceCap={100}
            />
          </div>
        </div>
        <div>
          <Title
            topic={"موضوع دوره"}
            style={"font-sha text-xl text-[#545454] my-[30px]"}
          />
          <FilterCourse />
        </div>
      </div>
    </div>
  );
};

export { Filter };
