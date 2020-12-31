import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Provider} from 'react-redux'

import store from './Store/Store';
import './index.css';
import NavigationBar from './Content/Root/NavigationBar';
import SideBar from './Content/Root/SideBar';

function App() {
  return (
      <div>
        <div className = 'Index_TopPanel'>
          <NavigationBar/>
        </div>
        <div className='Index_SidePanel'>
          <SideBar/>
        </div>
        <div className = 'Index_BottomPanel'>
          {/* <Switch location = {location}>
            <Route path = '/edit' component = {Edit} />
            <Route path = '/preview' component = {Edit} />
            <Route path = '/'
          </Switch> */}
        </div>
      </div>
  );
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);