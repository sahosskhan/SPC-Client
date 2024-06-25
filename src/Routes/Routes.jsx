import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/Login";
import AddPlayer from "../Pages/Admin/AddPlayer";
import Team from './../Pages/Admin/Team';

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
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/add-players",
          element: <AddPlayer/>
        },
        {
          path: "/team",
          element: <Team/>
        },
      ]
    },
  ]);