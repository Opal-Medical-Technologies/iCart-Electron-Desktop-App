import React from 'react';
import './SideBar.css';

import FileSystem from './FileSystem'

export default function SideBar() {
    return(
        <div className = 'SideBar_Base'>
            <FileSystem/>
            <LogoBox/>
        </div>
    )
}


function LogoBox() {
    return (
        <div className = 'SideBar_LogoBox'>
            <img className = 'SideBar_LogoBox_Logo' src = '/images/Logo.png'/>
            <div className = 'SideBar_LogoBox_TextCol'>
                <text className = 'SideBar_LogoBox_ProductName'>CalcVue</text>
                <text className = 'SideBar_LogoBox_VersionText'>{'Version: Test'}</text>
            </div>
        </div>
    )
}