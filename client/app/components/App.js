import React, { Component } from 'react';
import Header from './core/Header';
import Footer from './core/Footer';
import { auth } from '../utils/utils'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children, username, isAuthenticated } = this.props

    return (
      <div className="container">
        <Header username={username} />
    
        <main>
          {children}
        </main>
    
      </div>
    )
  }

}
  
export default withRouter(connect((state) => ({
  username: state.auth.username,
  isAuthenticated: state.auth.isAuthenticated
}))(App))
