import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "../Pages/Auth/Signin";
import Signup from "../Pages/Auth/Signup";
import HomePage from "../Pages/HomePage";
import ProtectedComponent from "./ProtectedComponent";

export const ROOT = "/";
export const SIGNIN = "/signin";
export const SIGNUP = "/signup";

const router = createBrowserRouter([
  {
    path: ROOT,
    element: (
      <ProtectedComponent>
        <HomePage/>
      </ProtectedComponent>
    ),
  },
  {
    path: SIGNIN,
    element: <Signin />,
  },
  {
    path: SIGNUP,
    element: <Signup />,
  },
]);

const Routers = () => {
  return <RouterProvider router={router} />;
};

export default Routers;
