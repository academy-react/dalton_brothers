import React from "react";
import { Outlet } from "react-router-dom";

import style from "./layOut.module.css";
import { LayHeader } from "./Header";
import LayFooter from "./Footer";

const Layout = () => {
  return (
    <div className={style.container}>
      <header className="flex flex-col gap-[40px] items-center mb-[80px]">
        <LayHeader pageName={"دوره ها"} detailCourse={" جزپیات دوره "} />
      </header>
      <Outlet />
      <footer className={style.footer}>
        <LayFooter />
      </footer>
    </div>
  );
};

export { Layout };
