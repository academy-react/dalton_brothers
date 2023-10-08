import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import App from "./App/App";
import "./index.css";
import { Landing } from "./Components/Landing";
import { CourseList } from "./Components/Course/CourseList";
import { ArticleNews } from "./Components/Article & News/Article & News";
import { Layout } from "./Components/Common/LayOut";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  {
    element: <Layout />,
    children: [
      { path: "/course", element: <CourseList /> },
      { path: "/news", element: <ArticleNews /> },
    ],
  },
  { path: "/", element: <SignIn /> },
  { path: "/course", element: <CourseList /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
