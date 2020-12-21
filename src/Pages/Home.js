import React from 'react';
import TopBar from './Component/TopBar/TopBar'
import SideBar from './Component/SideBar/SideBar';
import MiddleBar from './Component/MiddleBar/MiddleBar';
import PreviewPane from './Component/MedPreview/MedPreview';

export function Home() {
    return(
        <div>
            <TopBar />
            <SideBar />
            <MiddleBar />
            <PreviewPane />
        </div>
    );
}