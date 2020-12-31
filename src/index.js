import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Provider} from 'react-redux'

import store from './Store/Store';
import './index.css';
import NavigationBar from './Content/Root/NavigationBar';
import SideBar from './Content/Root/SideBar';
import PreviewPage from './Content/PreviewPage/PreviewPage';
import HomePage from './Content/HomePage/HomePage';
import ExportPage from './Content/ExportPage/ExportPage';
import EditPage from './Content/EditPage/EditPage';

function App() {
  return (
    <Router>
      <div>
        <div className = 'Index_TopPanel'>
          <NavigationBar/>
        </div>

        <div className='Index_SidePanel'>
          <SideBar/>
        </div>

        <div className = 'Index_BottomPanel'>
          <Switch>
            <Route path = '/preview' component = {PreviewPage} />
            <Route path = '/export' component = {ExportPage} />
            <Route path = '/edit' component = {EditPage} />
            <Route path = '/' component = {HomePage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);