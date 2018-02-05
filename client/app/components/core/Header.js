import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modal: null
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  // we pass in an additional param 'e' if we want to force close modal
  toggleModal(modal, e) {
    if (e) {
      if (e.target.classList.contains('modal')) {
        this.setState({ modal: null })
      }
      return
    }
    this.setState({ modal: this.state.modal ? null : modal })
  }

  register(username, password) {

  }

  login(username, password) {

  }

  render() {
    const { modal } = this.state
    return (
      <header>
        <Link to="/" className="home-link">fcc-voting</Link>
    
          <button className="pure-button login" onMouseDown={() => this.toggleModal('login')}>
            Log In
          </button>
    
          <button className="pure-button" onMouseDown={() => this.toggleModal('register')}>
            Register
          </button>
      
        <hr />

        {
          modal ? modal === 'login' ? 
          <LogInModal toggleModal={this.toggleModal} onSubmit={this.login} /> : 
          <RegisterModal toggleModal={this.toggleModal} onSubmit={this.register} /> : 
          null
        }
      </header>
    )
  }
};



const LogInModal = ({ toggleModal, onSubmit }) => (
  <div className="modal" onMouseDown={(e) => toggleModal(null, e)}>
    <form method="post" onSubmit={(e) => {
      e.preventDefault()

      onSubmit()
    }}>
      <div>Username <input type="text" name="username"/></div>
      <div>Password <input type="password" name="password"/></div>
      <button type="submit">Log In</button>
    </form>
  </div>
)

const RegisterModal = ({ toggleModal, onSubmit }) => (
  <div className="modal" onMouseDown={(e) => toggleModal(null, e)}>
    <form method="post" onSubmit={() => console.log('test')}>
      <div>Username <input type="text" name="username"/></div>
      <div>Password <input type="password" name="password"/></div>
      <button type="submit">Register</button>
    </form>
  </div>
)

export default Header;
