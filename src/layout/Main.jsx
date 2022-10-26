import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 lg:px-20">
                <div><SideBar></SideBar></div>
                <div className="col-span-3"><Outlet></Outlet></div>
            </div>
        </div>
    )
}

export default Main;