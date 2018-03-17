import React from 'react'
import {render} from 'react-dom'
import {auth} from './utils/utils'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import App from './components/App'
import NotFound from './components/core/NotFound'
import Home from './components/dashboard/Dashboard'
import Polls from './components/polls/Polls'
import CreatePoll from './components/polls/CreatePoll'
import PrivateRoute from './components/core/PrivateRoute'
import reducers from '../reducers'
import { setUsername, setAuthenticated } from '../actions/auth'

import './styles/styles.scss'
import 'bootstrap/scss/bootstrap.scss'

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  compose(applyMiddleware(middleware),window.devToolsExtension ? window.devToolsExtension() : f => f)
)

auth().then(res => {
  if (res.user) {
    store.dispatch(setAuthenticated(true))
    store.dispatch(setUsername(res.user))
  }

  render((
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/polls" component={Polls}/>
            <PrivateRoute exact path="/poll/create" component={CreatePoll}/>
            <Route component={NotFound}/>
          </Switch>
        </App>
      </ConnectedRouter>
    </Provider>
  ), document.getElementById('app'))
})
