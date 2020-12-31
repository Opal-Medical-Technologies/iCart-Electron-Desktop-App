import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {Provider} from 'react-redux'

import {Edit} from './Content/Edit/Edit.js';
import NavBar from './NavBar/NavBar.js';
// import {Preview} from './Preview';
import store from './Store/Store';
import "./Index.css";

function App() {
  return (
      <div>
        <div className = "Index_TopPanel">
          <NavBar hospitalName = "Helen DeVos Children's Hospital" hospitalUnitName = "Pharmacy A21"/>
        </div>
        <div className = "Index_BottomPanel">
          <Switch location = {location}>
            <Route path = "/edit" component = {Edit} />
            <Route path = "/preview" component = {Edit} />
            <Route path = "/"
          </Switch>
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

/*
 <Route render = {( {location} ) => (
              <div>
                <TransitionGroup>
                  <CSSTransition in = { true } appear = { false } key = { location.key } timeout = { 900 } classNames = { "page-fade" }>
                    <Switch location = {location}>
                      <Route path = "/edit" component = {Edit} />
                      <Route path = "/preview" component = {Preview} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </div>
              )}/>
*/