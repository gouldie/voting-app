import React, { Component } from 'react';
import Header from '../core/Header/Header';
import Footer from '../core/Footer';
import { auth } from '../../utils/utils'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { children, username } = this.props

    console.log('app', username)

    return (
      <div className="container">
        <Header username={username} />
    
        <main style={{ backgroundColor: '#eee' }}>
          {children}
        </main>
    
      </div>
    )
  }

}
  

export default App;
