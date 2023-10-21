import { React, createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { LayHeader } from "./Header";
import LayFooter from "./Footer";
import { courseData } from "../../../Core/Services/data";

import style from "./layOut.module.css";

export const SortContext = createContext();

export const useAppContext = () => useContext(SortContext);

const Layout = () => {
  const [sort, setSort] = useState("");
  const [bahr, setBahr] = useState("");
  const [naz, setNaz] = useState("");
  const [mehdi, setMehdi] = useState("");
  const [mohsen, setMohesen] = useState("");
  const [all, setAll] = useState(true);

  const sortedData = courseData.sort((a, b) => {
    if (sort === "price") return a.price - b.price;
    if (sort === "view") return b.view - a.view;
    if (sort === "like") return b.like - a.like;
    if (sort === "addTime") return a.addTime - b.addTime;
  });

  const filteredData = sortedData.filter((el) => {
    return (
      el.courseMaster == bahr ||
      el.courseMaster == naz ||
      el.courseMaster == mehdi ||
      el.courseMaster == mohsen ||
      all
    );
  });

  return (
    <SortContext.Provider
      value={{
        sortedData,
        filteredData,
        setSort,
        setBahr,
        setNaz,
        setMehdi,
        setMohesen,
        setAll,
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
