import React, { Component } from 'react';

class CreatePoll extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const { username } = this.props

    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Create a poll</h1>
      </div>
    );
  }
}

export default CreatePoll;

