import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/app/App';
import NotFound from './components/core/NotFound';
import Home from './components/home/Home';
import Polls from './components/polls/Polls';

import './styles/styles.scss';
import 'bootstrap/scss/bootstrap.scss';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
