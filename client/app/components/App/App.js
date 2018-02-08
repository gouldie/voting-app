import React, { Component } from 'react';
import axios from 'axios'
import Header from '../core/Header/Header';
import Footer from '../core/Footer';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null
    }
  }

  componentWillMount() {

    axios.get('/api/user')
      .then(user => {
        if (user) {
          this.setState({ user: user || false })
        }
      })
      .catch(err => {
        console.log('err', err)
      })
  }

  render() {
    const { children } = this.props
    const { user } = this.state

    if (user === null) {
      return <div>LOADING..</div>
    }

    return (
      <div>
        <Header />

        {user && user.username}
    
        <main>
          {children}
        </main>
    
      </div>
    )
  }

}
  

export default App;
