import React, { Component } from 'react';
import axios from 'axios'
import Header from '../core/Header/Header';
import Footer from '../core/Footer';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: null
    }
  }

  componentWillMount() {
    axios.get('/api/username')
      .then(username => {
        this.setState({ username: username.data })
      })
      .catch(err => {
        console.log('err', err)
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
