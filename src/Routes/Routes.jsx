import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Auth/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/register",
          element: <Register/>
        },
      ]
    },
  ]);