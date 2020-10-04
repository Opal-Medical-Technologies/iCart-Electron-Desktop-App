import React from 'react';
import "./App.css";
//import { Card } from '@material-ui/core';

function ActiveBarBackground() {
    return(
        <div className = "ActiveBarBackground">
        </div>
    )
}

function ActiveText() {
    return(
        <div className = "ActiveText">
            Active
        </div>
    )
}

function ArchiveBarBackground() {
    return(
        <div className = "ArchiveBarBackground">
        </div>
    )
}

function ArchiveText() {
    return(
        <div className = "ArchiveText">
            Archive
        </div>
    )
}

function SideBarBackground(){
    return(
        <div className = "SideBarBackground">
        </div>
    )
}

function BottomBar(){
    return(
        <div className = "BottomBar">
        </div>
    )
}

function VersionInfo(){
    return(
        <div className = "VersionInfo">
            Version 1.0.0
        </div>
    )
}

function LastUpdated(){
    return(
        <div className = "LastUpdated">
            Last Updated: 02/12/2021
        </div>

    )
}

function Logo(){
    return(
        <div className = "Logo">
            <img src = "/images/logo.png" alt =""/>
        </div>
    )
}

export function SideBar() {
    return(
        <div className = "SideBar">
        <ActiveText />
        <ActiveBarBackground />
        <SideBarBackground />
        <ArchiveBarBackground />
        <ArchiveText />
        <VersionInfo />
        <BottomBar />
        <LastUpdated />
        <Logo />
        </div>
    )
}