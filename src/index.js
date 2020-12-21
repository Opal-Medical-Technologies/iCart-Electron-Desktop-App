import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import {Home} from './Pages/Home';
import {AppPreview} from './Pages/AppPreview';

function App() {
  return (
    <Router>
      <Route render = {( {location} ) => (
        <div>
          <TransitionGroup>
            <CSSTransition in = { true } appear = { false } key = { location.key } timeout = { 900 } classNames = { "page-fade" }>
              <Switch location = {location}>
                <Route path = "/" exact component = {Home} />
                <Route path = "/AppPreview" component = {AppPreview} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
        )}/>
    </Router>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
