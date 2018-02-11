import React from 'react';
import { render } from 'react-dom';
import { auth } from './utils/utils'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/app/App'
import NotFound from './components/core/NotFound'
import Home from './components/home/Home'
import Polls from './components/polls/Polls'
import CreatePoll from './components/polls/CreatePoll'

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
            <Route exact path="/poll/create" render={() => <CreatePoll username={res.username}/>} />
            <Route component={NotFound}/>
          </Switch>
        </App>
      </Router>
    ), document.getElementById('app'));
  })

