import React, {Component} from 'react'
import {Button} from 'reactstrap'
import {connect} from 'react-redux'
import Err from '../core/Error'
import {push} from 'react-router-redux'

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    }

    this.onButtonClick = this
      .onButtonClick
      .bind(this)
  }

  onButtonClick(type) {
    if (type === '/poll/create' && !this.props.isAuthenticated) {
      this.setState({ error: 'You must be logged in to do that' })
      return
    }
    this.props.dispatch(push(type))
  }

  render() {
    return (
      <div
        style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <h2 style={{
          margin: '20px'
        }}>Dashboard</h2>
        <div
          style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          width: '250px'
        }}>
          <Button color="info" onClick={() => this.onButtonClick('/poll/create')}>Create a Poll</Button>
          <Button color="info" onClick={() => this.onButtonClick('/polls')}>View Polls</Button>
        </div>
        {this.state.error && <Err text={this.state.error}/>}
      </div>
    );
  }
}

export default connect((state => ({
  isAuthenticated: state.auth.isAuthenticated
})), (dispatch) => ({
  dispatch
}))(Dashboard);
