import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SignInModal, RegisterModal } from './Modals'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'
import axios from 'axios'

 
class Header extends Component {
  constructor(props) {
    super(props)

    
    this.state = {
      isOpen: false,
      user: null,
      modal: null
    }

    this.toggleNav = this.toggleNav.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.logout = this.logout.bind(this)
  }

  toggleNav() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  toggleModal(modal) {
    this.setState({ modal: this.state.modal ? null : modal })
  }

  logout() {
    axios.get('/api/logout')
      .then(() => {
        location.reload()
      })
  }

  render() {
    const { username } = this.props
    const { modal } = this.state

    return (
      <div>
        <Navbar color="faded" light expand="md">
        <div className="container">
          <NavbarBrand href="/">fcc-voting</NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            { username &&
              <NavItem>
                <NavLink style={{ cursor: 'pointer' }} onMouseDown={() => this.logout()}>Log Out</NavLink>
              </NavItem>
            }
            {
              !username && 
              <NavItem>
                  <NavLink style={{ cursor: 'pointer' }} onMouseDown={() => this.toggleModal('signin')}>Sign In</NavLink>
              </NavItem>
            }
            {
              !username &&
              <NavItem>
                  <NavLink style={{ cursor: 'pointer' }} onMouseDown={() => this.toggleModal('register')}>Register</NavLink>
              </NavItem>
            }
            </Nav>
          </Collapse>

          {
            modal ? modal === 'signin' ? 
            <SignInModal close={() => this.toggleModal('signin')} /> 
            : 
            <RegisterModal close={() => this.toggleModal('register')} /> 
            : null
          }
          
          </div>
        </Navbar>
      </div>
    )
  }
};

export default Header;
