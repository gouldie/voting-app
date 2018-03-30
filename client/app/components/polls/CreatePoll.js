import React, { Component } from 'react';
import { Button, Form, FormGroup, FormText } from 'reactstrap';
import { PollLabel, PollInput, PlusInput } from '../core/Inputs'
import axios from 'axios'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import { RingLoader } from 'react-spinners'
import Err from '../core/Error'

class CreatePoll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      options: ['', ''],
      submitting: false,
      submitComplete: false,
      error: null
    }

    this.addOption = this.addOption.bind(this)
    this.removeOption = this.removeOption.bind(this)
    this.editOption = this.editOption.bind(this)
  }

  editOption(e, i) {
    const options = this.state.options
    options[i] = e.target.value

    this.setState({ options })
  }

  addOption() {
    const options = this.state.options
    options.push('')

    this.setState({ options })
  }

  removeOption(i) {
    const options = this.state.options
    options.splice(i, 1)

    this.setState({ options })
  }

  generateOptions() {
    return this.state.options.map((option, i) => {
      return <PollInput key={i}  type="text" value={this.state.options[i]} onChange={(e) => this.editOption(e, i)} onRemove={() => this.removeOption(i)} />
    })
  }

  submit(e) {
    e.preventDefault()

    // Basic client-side validation
    if (!this.state.title || this.state.options.filter(option => option).length < 2) {
      this.setState({ error: 'All fields must be filled in, with at least 2 options' })
      return
    }

    this.setState({ submitting: true, error: null })
    axios.post('/api/poll', {title: this.state.title, options: this.state.options})
      .then(() => {
        this.setState({ submitting: false })
        this.props.dispatch(push('/'))
      })
  }

  render() {
    const { username } = this.props

    return (
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Create a poll</h1>
        <Form onSubmit={(e) => this.submit(e)}>
          <FormGroup>
            <PollLabel text="Title" />
            <PollInput value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
          </FormGroup>
          <FormGroup>
            <PollLabel text="Options" />
            {this.generateOptions()}
          </FormGroup>
          <PlusInput onClick={this.addOption} />

          <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
            {this.state.submitting ? <RingLoader
              color={'#123abc'} 
              loading={true} 
            /> : <Button type="submit" color="success">Create</Button>}
          </div>
          {this.state.error && <Err text={this.state.error}/>}
        </Form>
      </div>
    );
  }
}

export default connect(null, (dispatch) => ({
  dispatch
}))(CreatePoll)

