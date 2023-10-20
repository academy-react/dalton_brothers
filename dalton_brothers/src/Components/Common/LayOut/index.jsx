import { React, createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";

import { LayHeader } from "./Header";
import LayFooter from "./Footer";
import { courseData } from "../../../Core/Services/data";

import style from "./layOut.module.css";

export const SortContext = createContext();

export const useAppContext = () => useContext(SortContext);

const Layout = () => {
  const [sort, setSort] = useState("");

  const sortedData = courseData.sort((a, b) => {
    if (sort === "price") return a.price - b.price;
    if (sort === "view") return b.view - a.view;
    if (sort === "like") return b.like - a.like;
    if (sort === "addTime") return a.addTime - b.addTime;
  });

  console.log(sortedData);

  return (
    <SortContext.Provider value={{ sortedData, setSort }}>
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
