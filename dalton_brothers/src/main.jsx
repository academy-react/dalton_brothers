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
import { Register } from "./Components/Register/Register";

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
  { path: "/register", element: <Register /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
