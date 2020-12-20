import React from 'react';
import {Home} from './Home';
import {AppPreview} from './AppPreview';
import './App.css'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

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

export default App;
