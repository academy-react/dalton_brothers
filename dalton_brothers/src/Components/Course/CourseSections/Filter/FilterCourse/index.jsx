import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  onPythonChange,
  onDesignChange,
  onReactChange,
  onMainChange,
  onCourseElseChange,
} from "../../../../../Redux/Filter/courseFilter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay, Navigation } from "swiper/modules";

import style from "../Filter.module.css";

const FilterCourse = () => {
  const store = useSelector((state) => state.courseFilter);
  const dispatch = useDispatch();

  // ------------------------------------------------------------ handle filter for python ------------------------------------------------------------
  const handlePython = () => {
    if (store.python === "") {
      dispatch(onPythonChange("پایتون"));
      dispatch(onCourseElseChange(false));
      return;
    }
    if (
      store.python === "پایتون" &&
      store.design === "" &&
      store.react === "" &&
      store.main === ""
    ) {
      dispatch(onCourseElseChange(true));
    }

    dispatch(onPythonChange(""));
  };

  // ------------------------------------------------------------ handle filter for design ------------------------------------------------------------
  const handleDesign = () => {
    if (store.design === "") {
      dispatch(onDesignChange("طراحی سایت"));
      dispatch(onCourseElseChange(false));
      return;
    }
    if (
      store.python === "" &&
      store.design === "طراحی سایت" &&
      store.react === "" &&
      store.main === ""
    ) {
      dispatch(onCourseElseChange(true));
    }
    dispatch(onDesignChange(""));
  };

  // ------------------------------------------------------------ handle filter for react ------------------------------------------------------------
  const handleReact = () => {
    if (store.react === "") {
      dispatch(onReactChange("ری اکت"));
      dispatch(onCourseElseChange(false));
      return;
    }
    if (
      store.python === "" &&
      store.design === "" &&
      store.react === "ری اکت" &&
      store.main === ""
    ) {
      dispatch(onCourseElseChange(true));
    }
    dispatch(onReactChange(""));
  };

  // ------------------------------------------------------------ handle filter for main ------------------------------------------------------------
  const handleMain = () => {
    if (store.main === "") {
      dispatch(onMainChange("دوره اصلی"));
      dispatch(onCourseElseChange(false));
      return;
    }
    if (
      store.python === "" &&
      store.design === "" &&
      store.react === "" &&
      store.main === "دوره اصلی"
    ) {
      dispatch(onCourseElseChange(true));
    }
    dispatch(onMainChange(""));
  };
  return (
    <>
      <div className="2xl:gap-[40px] xl:flex w-full 2xl:flex flex-row flex-wrap gap-[20px] justify-around font-irSans text-[#383838] hidden">
        {/*------------------------------------------------------------ python ------------------------------------------------------------*/}
        <input
          type="checkbox"
          name="course"
          id={`python`}
          onClick={handlePython}
          className={`hidden ${style.courseInp}`}
        />
        <label
          htmlFor={`python`}
          className={`w-[175px] h-[175px] flex items-end pb-[10px] border-[5px]  ${style.pythonLabel}`}
        >
          <h1 className="mx-auto">دوره ی پایتون</h1>
        </label>
        {/*------------------------------------------------------------ design ------------------------------------------------------------*/}
        <input
          type="checkbox"
          name="course"
          id={`design`}
          onClick={handleDesign}
          className={`hidden ${style.courseInp}`}
        />
        <label
          htmlFor={`design`}
          className={`w-[175px] h-[175px] flex items-end pb-[10px] border-[5px] ${style.designLabel}`}
        >
          <h1 className="mx-auto">دوره ی طراحی سایت</h1>
        </label>
        {/*------------------------------------------------------------ react ------------------------------------------------------------*/}
        <input
          type="checkbox"
          name="course"
          id={`react`}
          onClick={handleReact}
          className={`hidden ${style.courseInp}`}
        />
        <label
          htmlFor={`react`}
          className={`w-[175px] h-[175px] flex items-end pb-[10px] border-[5px] ${style.reactLabel}`}
        >
          <h1 className="mx-auto">دوره ی ری اکت</h1>
        </label>
        {/*------------------------------------------------------------ main ------------------------------------------------------------*/}
        <input
          type="checkbox"
          name="course"
          id={`main`}
          onClick={handleMain}
          className={`hidden ${style.courseInp}`}
        />
        <label
          htmlFor={`main`}
          className={`w-[175px] h-[175px] flex items-end pb-[10px] border-[5px] ${style.mainLabel}`}
        >
          <h1 className="mx-auto"> دوره ی اصلی</h1>
        </label>
      </div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={false}
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={false}
        modules={[EffectCube, Pagination, Autoplay, Navigation]}
        className="xl:hidden md:w-[300px] md:h-[300px] w-[200px] h-[200px] mySwiper"
      >
        <SwiperSlide className="bg-center bg-cover">
          {/*------------------------------------------------------------ python ------------------------------------------------------------*/}
          <input
            type="checkbox"
            name="course"
            id={`pythonResponsive`}
            onClick={handlePython}
            className={`hidden ${style.courseInpResponsive}`}
          />
          <label
            htmlFor={`pythonResponsive`}
            className={`w-[100%] h-[100%] flex items-end pb-[10px] border-[5px] border-gray-200 ${style.pythonLabelResponsive}`}
          >
            <h1 className="mx-auto">دوره ی پایتون</h1>
          </label>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover">
          {/*------------------------------------------------------------ design ------------------------------------------------------------*/}
          <input
            type="checkbox"
            name="course"
            id={`designResponsive`}
            onClick={handleDesign}
            className={`hidden ${style.courseInpResponsive}`}
          />
          <label
            htmlFor={`designResponsive`}
            className={`w-[100%] h-[100%] flex items-end pb-[10px] border-[5px] border-gray-200 ${style.designLabelResponsive}`}
          >
            <h1 className="mx-auto"> دوره ی طراحی سایت</h1>
          </label>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover">
          {/*------------------------------------------------------------ react ------------------------------------------------------------*/}
          <input
            type="checkbox"
            name="course"
            id={`reactResponsive`}
            onClick={handleReact}
            className={`hidden ${style.courseInpResponsive}`}
          />
          <label
            htmlFor={`reactResponsive`}
            className={`w-[100%] h-[100%] flex items-end pb-[10px] border-[5px] border-gray-200 ${style.reactLabelResponsive}`}
          >
            <h1 className="mx-auto"> دوره ی ری اکت</h1>
          </label>
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover">
          {/*------------------------------------------------------------ main ------------------------------------------------------------*/}
          <input
            type="checkbox"
            name="course"
            id={`mainResponsive`}
            onClick={handleMain}
            className={`hidden ${style.courseInpResponsive}`}
          />
          <label
            htmlFor={`mainResponsive`}
            className={`w-[100%] h-[100%] flex items-end pb-[10px] border-[5px] border-gray-200 ${style.mainLabelResponsive}`}
          >
            <h1 className="mx-auto">دوره ی اصلی</h1>
          </label>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export { FilterCourse };
