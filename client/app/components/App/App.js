import React, { Component } from 'react';
import Header from '../core/Header/Header';
import Footer from '../core/Footer';
import { auth } from '../../utils/utils'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: null
    }
  }

  componentWillMount() {
    auth()
      .then((res) => {
        this.setState({ username: res.username })
      })
  }

  render() {
    const { children } = this.props
    const { username } = this.state

    if (username === null) {
      return <div>LOADING..</div>
    }

    return (
      <div>
        <Header username={username} />
    
        <main>
          {children}
        </main>
    
      </div>
    )
  }

}
  

export default App;
