import React from 'react';
import "./SideBar.css";

export default function SideBar(props) {
    return(
        <div className = "SideBar_Base">
            <div className = "SideBar_TopPanel"></div>
            <div className = "SideBar_BottomPanel">
                <img className = "SideBar_Logo" src = "/images/Logo.png"/>
                <div className = "SideBar_TextCol">
                    <text className = "SideBar_ProductName">CalcVue</text>
                    <text className = "SideBar_VersionText">{props.versionText}</text>
                </div>
            </div>
        </div>
    )
}