import React, { Component } from 'react';

import Header from '../core/Header';
import Footer from '../core/Footer';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null
    }
  }

  componentWillMount() {
    axios.get('/api/user', (user) => {
      if (user) {
        this.setState({ user: user || false })
      }
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
    
        <Footer />
      </div>
    )
  }

}
  

export default App;
