import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { Landing } from "../../../Components/Landing";
import { Layout } from "../../../Components/LayOut";
import { SignIn } from "../../../Components/SignIn/SignIn";
import { Register } from "../../../Components/Register/Register";
import { ForgetPass } from "../../../Components/ForgetPass/ForgetPass";
import { Identify } from "../../../Components/ForgetPass/ForgetSection/Identify";
import { LayoutPanel } from "../../../Components/StudentPanel/LayoutPanel/LayoutPanel";
import { NotAccess } from "../../../Components/Common/NotAccess";
import { NotFound } from "../../../Components/Common/NotFound";
import { CourseList } from "../../../Components/Course/CourseList";
import { CourseDetail } from "../../../Components/CourseDetail/CourseDetail";
import { ArticleNews } from "../../../Components/Article & News/Article & News";
import { ArticleDetail } from "../../../Components/Article & News/ArticleDetail/ArticleDetail";
const UnAuthenticated = () => {
  const router = [
    { path: "/403", element: <NotAccess /> },
    { path: "/404", element: <NotFound /> },
    { path: "/", element: <Landing /> },
    {
      element: <Layout />,
      children: [
        { path: "/course", element: <CourseList /> },
        { path: "/courseDetail/:id", element: <CourseDetail /> },
        { path: "/news", element: <ArticleNews /> },
        { path: `/newsDetail/:id`, element: <ArticleDetail /> },
      ],
    },
    { path: "/signIn", element: <SignIn /> },
    { path: "/register", element: <Register /> },
    { path: "/forget", element: <ForgetPass /> },
    { path: "/identify", element: <Identify /> },
    {
      element: <LayoutPanel />,
      children: [
        { path: "/panel", element: <Navigate to={"/403"} /> },
        { path: "/panel/EditProfile", element: <Navigate to={"/403"} /> },
        { path: "/panel/PanelCourses", element: <Navigate to={"/403"} /> },
        { path: "/panel/PanelCoursesList", element: <Navigate to={"/403"} /> },
      ],
    },
    { path: "/*", element: <NotFound /> },
  ];
  return (
    <Routes>
      {router.map((el, index) => (
        <Route path={el.path} element={el.element} key={index}>
          {el.children &&
            el.children.map((el, index) => (
              <Route path={el.path} element={el.element} key={index} />
            ))}
        </Route>
      ))}
    </Routes>
  );
};

export { UnAuthenticated };
