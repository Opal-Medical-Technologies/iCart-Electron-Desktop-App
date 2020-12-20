import React from 'react';
import {TopBar} from './TopBar'
import {SideBar} from './SideBar';
import MiddleBar from './MiddleBar';
import PreviewPane from './preview';

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