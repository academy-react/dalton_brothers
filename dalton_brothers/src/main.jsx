import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import App from "./App/App";
import "./index.css";
import { Landing } from "./Components/Landing";
import { CourseList } from "./Components/Course/CourseList";
import { ArticleNews } from "./Components/Article & News/Article & News";
import { Layout } from "./Components/Common/LayOut";
import { SignIn } from "./Components/SignIn/SignIn";
import { CourseDetail } from "./Components/CourseDetail/CourseDetail";
import { StudentPanel } from "./Components/StudentPanel/StudentPanel";
import { LayoutPanel } from "./Components/StudentPanel/LayoutPanel/LayoutPanel";
import { EditProfile } from "./Components/StudentPanel/EditProfile/EditProfile";
import { PanelCourses } from "./Components/StudentPanel/PanelCourses/PanelCourses";
import { PanelCoursesList } from "./Components/StudentPanel/PanelCoursesList/PanelCoursesList";
import { Dashboard } from "./Components/StudentPanel/Dashboard/Dashboard";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  {
    element: <Layout />,
    children: [
      { path: "/course", element: <CourseList /> },
      { path: "/courseDetail", element: <CourseDetail /> },
      { path: "/news", element: <ArticleNews /> },
    ],
  },
  { path: "/signIn", element: <SignIn /> },
  // { path: "/panel", element: <StudentPanel /> },
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
  <RouterProvider router={router} />
);
