import React, { Component } from 'react';
import Header from './core/Header';
import Footer from './core/Footer';
import { auth } from '../utils/utils'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children, username } = this.props

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
  
export default connect((state) => ({
  username: state.auth.username
}))(App)
