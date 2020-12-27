import React from 'react';
import TopBar from './Component/TopBar/TopBar'
import SideBar from './Component/SideBar/SideBar';
import MiddleBar from './Component/MiddleBar/MiddleBar';
import PreviewPane from './Component/MedPreview/MedPreview';
import "./Home.css";

export function Home() {
    return(
        <div>
            <div>
                <TopBar />
            </div>
            <div className = "Content">
                <div className = "Content_LeftPanel"><SideBar/></div>
                <div className = "Content_MiddlePanel"><MiddleBar/></div>
                <div className = "Content_RightPanel"><PreviewPane/></div>
            </div>
        </div>
    );
}