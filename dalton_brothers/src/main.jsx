import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { Landing } from "../src/Components/Landing";
import { CourseList } from "../src/Components/Course/CourseList";
import { ArticleNews } from "../src/Components/Article & News/Article & News";
import { Layout } from "../src/Components/Common/LayOut";
import { SignIn } from "../src/Components/SignIn/SignIn";
import { Register } from "../src/Components/Register/Register";
import { CourseDetail } from "../src/Components/CourseDetail/CourseDetail";
import { ForgetPass } from "../src/Components/ForgetPass/ForgetPass";

import { StudentPanel } from "./Components/StudentPanel/StudentPanel";
import { LayoutPanel } from "./Components/StudentPanel/LayoutPanel/LayoutPanel";
import { EditProfile } from "./Components/StudentPanel/EditProfile/EditProfile";
import { PanelCourses } from "./Components/StudentPanel/PanelCourses/PanelCourses";
import { PanelCoursesList } from "./Components/StudentPanel/PanelCoursesList/PanelCoursesList";
import { Dashboard } from "./Components/StudentPanel/Dashboard/Dashboard";
import { ArticleDetail } from "./Components/Article & News/ArticleDetail/ArticleDetail";

import "./index.css";
import { Identify } from "./Components/ForgetPass/ForgetSection/Identify";
import store from "./Redux/Store";

import "./index.css";

const router = createBrowserRouter([
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
  {
    path: "/forget",
    element: <ForgetPass />,
  },
  { path: "/identify", element: <Identify /> },
  {
    element: <LayoutPanel />,
    children: [
      { path: "/panel", element: <Dashboard /> },
      { path: "/panel/EditProfile", element: <EditProfile /> },
      { path: "/panel/PanelCourses", element: <PanelCourses /> },
      { path: "/panel/PanelCoursesList", element: <PanelCoursesList /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
