import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";


const MainLayouts = () => {
    return (
        <>
        <Navbar/>
          <Outlet/>  
        </>
    );
};

export default MainLayouts;