import React from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  Link,
} from "react-router-dom";

import App from "./App/App";
import "./index.css";
import { Landing } from "./Components/Landing";
import { CourseList } from "./Components/Course/CourseList";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/course", element: <CourseList /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
