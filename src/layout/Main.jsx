import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="lg:grid md:grid md:grid-cols-4 lg:grid-cols-4 px-5 lg:px-20">
                <div><SideBar></SideBar></div>
                <div className="lg:col-span-3 md:col-span-3 md:px-5 lg:mt-14"><Outlet></Outlet></div>
            </div>
        </div>
    )
}

export default Main;