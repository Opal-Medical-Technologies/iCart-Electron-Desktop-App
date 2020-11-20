import React from 'react';
import {TopBar} from './TopBar'
import {SideBar} from './SideBar'
import MiddleBar from './MiddleBar'
import PreviewPane from './preview'

function App() {
  return (
    <div>
      <TopBar />
      <SideBar />
      <MiddleBar />
      <PreviewPane />
    </div>
  );
}

export default App;
