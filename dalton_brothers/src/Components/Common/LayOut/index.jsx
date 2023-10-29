import { React, createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";

import { LayHeader } from "./Header";
import LayFooter from "./Footer";
import { courseData } from "../../../Core/Services/data";

import style from "./layOut.module.css";

export const SortContext = createContext();

export const useAppContext = () => useContext(SortContext);

const Layout = () => {
  const search = useSelector((state) => state.search.search);
  const sort = useSelector((state) => state.sort.sort);
  const masterFilter = useSelector((state) => state.masterFilter);
  const courseFilter = useSelector((state) => state.courseFilter);
  const minPrice = useSelector((state) => state.priceFilter.minPrice);
  const maxPrice = useSelector((state) => state.priceFilter.maxPrice);

  const searchData = courseData.filter((e) => {
    return (
      e.courseName.indexOf(search) != -1 || e.courseMaster.indexOf(search) != -1
    );
  });

  const sortedData = searchData.sort((a, b) => {
    if (sort === "price") return a.price - b.price;
    if (sort === "view") return b.view - a.view;
    if (sort === "like") return b.like - a.like;
    if (sort === "addTime") return a.addTime - b.addTime;
  });

  const filteredData = sortedData.filter((el) => {
    return (
      (el.courseMaster == masterFilter.bah ||
        el.courseMaster == masterFilter.naz ||
        el.courseMaster == masterFilter.asg ||
        el.courseMaster == masterFilter.esf ||
        masterFilter.masterElse) &&
      minPrice <= el.price &&
      el.price <= maxPrice &&
      (el.courseName == courseFilter.python ||
        el.courseName == courseFilter.react ||
        el.courseName == courseFilter.design ||
        el.courseName == courseFilter.main ||
        courseFilter.courseElse)
    );
  });

  return (
    <SortContext.Provider
      value={{
        sortedData,
        filteredData,
      }}
    >
      <div className={style.container}>
        <header className="flex flex-col gap-[80px] items-center mb-[80px]">
          <LayHeader
            course={"دوره ها"}
            news={"اخبار و مقالات"}
            detailCourse={" جزییات دوره "}
          />
        </header>
        <Outlet />
        <footer className={style.footer}>
          <LayFooter />
        </footer>
      </div>
    </SortContext.Provider>
  );
};

export { Layout };
