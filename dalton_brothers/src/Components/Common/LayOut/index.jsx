import { React, createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";

import { LayHeader } from "./Header";
import LayFooter from "./Footer";
import {
  courseData,
  masterData,
  courseNameData,
} from "../../../Core/Services/data";

import style from "./layOut.module.css";

export const SortContext = createContext();

export const useAppContext = () => useContext(SortContext);

const Layout = () => {
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [bahr, setBahr] = useState(masterData[0].master);
  const [naz, setNaz] = useState(masterData[1].master);
  const [mehdi, setMehdi] = useState(masterData[2].master);
  const [mohsen, setMohesen] = useState(masterData[3].master);
  const [python, setPython] = useState(courseNameData[0].courseName);
  const [react, setReact] = useState(courseNameData[1].courseName);
  const [design, setDesign] = useState(courseNameData[2].courseName);
  const [main, setMain] = useState(courseNameData[3].courseName);

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
      (el.courseMaster == bahr ||
        el.courseMaster == naz ||
        el.courseMaster == mehdi ||
        el.courseMaster == mohsen) &&
      (el.courseName == python ||
        el.courseName == react ||
        el.courseName == design ||
        el.courseName == main)
    );
  });

  return (
    <SortContext.Provider
      value={{
        sortedData,
        filteredData,
        setSort,
        setSearch,
        setBahr,
        setNaz,
        setMehdi,
        setMohesen,
        setPython,
        setReact,
        setDesign,
        setMain,
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
