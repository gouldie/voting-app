import React, { Component } from 'react';
import { Button, Form, FormGroup, FormText } from 'reactstrap';
import { PollLabel, PollInput, PlusInput } from '../core/Inputs'
import axios from 'axios'

class CreatePoll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      options: [null, null],
      submitting: false,
      submitComplete: false
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
    options.push(null)

    this.setState({ options })
  }

  removeOption(i) {
    const options = this.state.options
    options.splice(i, 1)

    this.setState({ options })
  }

  generateOptions() {
    return this.state.options.map((option, i) => {
      return <PollInput type="text" value={this.state.options[i]} onChange={(e) => this.editOption(e, i)} onRemove={() => this.removeOption(i)} />
    })
  }

  submit(e) {
    e.preventDefault()
    this.setState({ submitting: true })
    axios.post('/api/poll', {title: this.state.title, options: this.state.options})
      .then(() => {
        this.setState({ submitting: false })
      })
  }

  render() {
    const { username } = this.props

    if (this.state.submitComplete) {
      //redirect with message
    }

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

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            {this.state.submitting ? 'spinner' : <Button type="submit" color="success">Create</Button>}
          </div>
        </Form>
      </div>
    );
  }
}

export default CreatePoll;

