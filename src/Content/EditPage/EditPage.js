import React from 'react';
import "./Edit.css";

import SideBar from "./Components/SideBar/SideBar.js";
import MiddleBar from "./Components/MiddleBar/MiddleBar.js";


export function Edit() {
    return (
        <div className = "Edit_Base">
            <div className = "Edit_LeftPanel"><SideBar versionText = "Version: TEST"/></div>
            <div className = "Edit_CenterPanel"><MiddleBar/></div>
            <div className = "Edit_RightPanel">
            </div>
        </div>
    )
}