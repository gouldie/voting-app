import React, { Component } from 'react';
import { Button, Form, FormGroup, FormText } from 'reactstrap';
import { PollLabel, PollInput, PlusInput } from '../core/Inputs'

class CreatePoll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      options: [null, null]
    }

    this.addOption = this.addOption.bind(this)
  }

  addOption() {
    const options = this.state.options
    options.push(null)

    this.setState({ options })
  }

  removeOption() {
    
  }

  generateOptions() {
    console.log()
    return this.state.options.map(option => {
      return <PollInput type="text" onRemove={() => console.log('ad')} />
    })
  }

  render() {
    const { username } = this.props

    return (
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Create a poll</h1>
        <Form>
          <FormGroup>
            <PollLabel text="Title" />
            <PollInput />
          </FormGroup>
          <FormGroup>
            <PollLabel text="Options" />
            {this.generateOptions()}
          </FormGroup>
          <PlusInput onClick={this.addOption} />
        </Form>
      </div>
    );
  }
}

export default CreatePoll;

