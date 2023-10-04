import React from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  Link,
} from "react-router-dom";

// import App from "./App/App";
import "./index.css";
import { Landing } from "./Components/Landing";
import { CourseList } from "./Components/Course/CourseList";
import { SignIn } from "./Components/SignIn/SignIn";

const router = createBrowserRouter([
  { path: "/", element: <SignIn/> },
  { path: "/course", element: <CourseList /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
