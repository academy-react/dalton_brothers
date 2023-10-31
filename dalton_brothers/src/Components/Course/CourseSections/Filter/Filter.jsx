import React, { useState } from "react";
import { Field, Formik, Form } from "formik";

import { Title } from "../../../Common/Title/Title";
import { FilterMasters } from "./FilterMaster/FilterMaster";
import { FilterCourse } from "./FilterCourse/FilterCourse";
import { masterData, courseNameData } from "../../../../Core/Services/data";

import style from "./Filter.module.css";
import { RangeSlider } from "./RangePrice/RangeSlider";
const Filter = () => {
  const [min, setMin] = useState(100);
  const [max, setMax] = useState(1000000);

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
          <div className="w-full flex flex-row flex-wrap gap-[20px] justify-around font-irSans text-[#383838]">
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
          <div className={style.priceRange}>
            {/* <Formik initialValues={{ priceFrom: "", priceTo: "" }}>
              <Form className="flex flex-col gap-[20px] w-[60%] m-auto">
                <div className=" flex justify-around">
                  <div>meow1</div>
                  <div>meow2</div>
                </div>
                <input
                  type="range"
                  name="price"
                  id="priceFrom"
                  min={0}
                  max={1000000}
                  value={min}
                  className="appearance-none"
                  onChange={(e) => console.log(e.target.value)}
                />
                <input
                  type="range"
                  name="price"
                  id="priceTo"
                  min={0}
                  max={1000000}
                  value={max}
                  onChange={(e) => console.log(e.target.value)}
                  className="appearance-none"
                />
              </Form>
            </Formik> */}
            <RangeSlider
              className="mx-auto w-max relative top-10 z-0"
              minVal={min}
              maxVal={max}
              setMinVal={setMin}
              setMaxVal={setMax}
              min={0}
              max={1000000}
              step={100}
              priceCap={100}
            />
          </div>
        </div>
        <div>
          <Title
            topic={"موضوع دوره"}
            style={"font-sha text-xl text-[#545454] my-[30px]"}
          />
          <div className="w-full flex flex-row flex-wrap gap-[20px] justify-around  font-irSans text-[#383838]">
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
