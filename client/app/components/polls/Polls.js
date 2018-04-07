import React, { Component } from 'react'
import axios from 'axios'
import { RingLoader } from 'react-spinners'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'

class Polls extends Component {
  constructor(props) {
    super(props)

    this.state = {
      polls: null,
      listItemHover: null
    }

    this.renderPolls = this.renderPolls.bind(this)
  }
  
  componentDidMount() {
    axios.get('/api/polls')
      .then(res => {
        this.setState({ polls: res.data.polls })
      }).catch(err => {
        console.log('err', err)
      })
  }

  renderPolls() {
    return this.state.polls.map((poll, i) => (
      <li key={i}
      onClick={() => this.props.dispatch(push(`/poll/${poll.title}`))}
      onMouseEnter={() => this.setState({ listItemHover: i })} 
      onMouseLeave={() => this.setState({ listItemHover: null })}
      style={{ 
        opacity: this.state.listItemHover !== null ? this.state.listItemHover === i ? 1 : 0.1 : null, 
        padding: '5px 5px 0',
        textAlign: 'center',
        cursor: 'pointer'
       }}><p style={{ marginTop: '12px' }}>{poll.title}</p><hr style={{ marginBottom: 0 }}/></li>
    ))
  }

  render() {
    const { polls } = this.state
    
    return (
      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center'}}>
        {
          polls ? 
          <ul id="poll-list" style={{ listStyleType: 'none', width: '80%', maxWidth: '750px' }}>
            {this.renderPolls()}
          </ul> 
          : <RingLoader color={'#123abc'} loading={true} />
        }
      </div>
    );
  }
}

export default connect(null, dispatch => ({
  dispatch
}))(Polls)