import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  onPythonChange,
  onDesignChange,
  onReactChange,
  onMainChange,
  onCourseElseChange,
} from "../../../../../Redux/Filter/courseFilter";

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
        className={`w-[175px] h-[175px] flex items-end pb-[10px] ${style.pythonLabel}`}
      >
        <h1 className="mx-auto"></h1>
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
        className={`w-[175px] h-[175px] flex items-end pb-[10px] ${style.designLabel}`}
      >
        <h1 className="mx-auto"></h1>
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
        className={`w-[175px] h-[175px] flex items-end pb-[10px] ${style.reactLabel}`}
      >
        <h1 className="mx-auto"></h1>
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
        className={`w-[175px] h-[175px] flex items-end pb-[10px] ${style.mainLabel}`}
      >
        <h1 className="mx-auto"></h1>
      </label>
    </>
  );
};

export { FilterCourse };
