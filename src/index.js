import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
