import React from 'react';
import "./SideBar.css";


export default function SideBar() {
    return(
        <div className = "SideBar">
            <div className = "SideBar_Top" />
            <div className = "SideBar_Bottom">
                <div className = "SideBar_BottomBar_Col1">
                    <img src = "/images/Logo.png"/>
                </div>
                <div className = "SideBar_BottomBar_Col2">
                    <h1 className = "Sidebar_VersionText">v1.201226</h1>
                </div>
            </div>
        </div>
    )
}