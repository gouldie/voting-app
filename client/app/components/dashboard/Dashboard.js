import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    }
    
    this.onButtonClick = this.onButtonClick.bind(this)
  }

  onButtonClick(type) {
    this.setState({ redirect: type })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.state.redirect}/>
    }

    return (
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <h2 style={{ margin: '20px' }}>Dashboard</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: '250px' }}>
          <Button color="info" onMouseDown={() => this.onButtonClick('/poll/create')}>Create a Poll</Button>
          <Button color="info" onMouseDown={() => this.onButtonClick('/polls')}>View Polls</Button>
        </div>
      </div>
    );
  }
}

export default Home;
