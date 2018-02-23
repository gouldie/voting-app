import React from 'react';
import { render } from 'react-dom';
import { auth } from './utils/utils'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App'
import NotFound from './components/core/NotFound'
import Home from './components/dashboard/Dashboard'
import Polls from './components/polls/Polls'
import CreatePoll from './components/polls/CreatePoll'
import PrivateRoute from './components/core/PrivateRoute'

import './styles/styles.scss'
import 'bootstrap/scss/bootstrap.scss'

auth()
  .then(res => {
    render((
      <Router>
        <App username={res.username}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/polls" component={Polls} />
            <PrivateRoute exact path="/poll/create" component={CreatePoll} />
            <Route component={NotFound}/>
          </Switch>
        </App>
      </Router>
    ), document.getElementById('app'));
  })

