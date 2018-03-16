import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'

export class SignInModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            error: null
        }

        this.submit = this.submit.bind(this)
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
    }

    onChangeUsername(username) {
        this.setState({ username: username.target.value })
    }

    onChangePassword(password) {
        this.setState({ password: password.target.value })
    }

    submit(e) {
        const { username, password } = this.state

        e.preventDefault()
        axios.post('/api/login', { username, password})
            .then(res => {
                console.log('test', res)
                if (!res.data.success) {
                    this.setState({ error: res.data.err })
                } else {
                    location.reload()
                }
            })
            .catch(err => {
                throw new Error(err)
            })
    }

    render() {
        const { close, action } = this.props
        const { username, password, error } = this.state

        return (
            <Modal isOpen={true} toggle={close}>
                <ModalHeader toggle={close}>Sign in</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.submit}>
                        <FormGroup>
                            <Label for="username-input">Username</Label>
                            <Input type="text" name="username" id="username-input" value={username} onChange={this.onChangeUsername} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password-input">Password</Label>
                            <Input type="password" name="password" id="password-input" value={password} onChange={this.onChangePassword} />
                        </FormGroup>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <small style={{ color: 'red', margin: '10px 0 0 10px' }}>{error}</small>
                            <Button style={{ float: 'right' }}>Sign In</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        )
    }
}

export class RegisterModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            error: null
        }

        this.submit = this.submit.bind(this)
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
    }

    onChangeUsername(username) {
        this.setState({ username: username.target.value })
    }

    onChangePassword(password) {
        this.setState({ password: password.target.value })
    }

    submit(e) {
        const { username, password } = this.state

        e.preventDefault()
        axios.post('/api/register', { username, password})
            .then(res => {
                if (res.data.err) {
                    this.setState({ error: res.data.err })
                } else {
                    location.reload()
                }
            })
            .catch(err => {
                throw new Error(err)
            })
    }

    render() {
        const { close, action } = this.props
        const { username, password, error } = this.state

        return (
            <Modal isOpen={true} toggle={close}>
                <ModalHeader toggle={close}>Register</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.submit}>
                        <FormGroup>
                            <Label for="username-input">Username</Label>
                            <Input type="text" name="username" id="username-input" value={username} onChange={this.onChangeUsername} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password-input">Password</Label>
                            <Input type="password" name="password" id="password-input" value={password} onChange={this.onChangePassword} />
                        </FormGroup>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <small style={{ color: 'red', margin: '10px 0 0 10px' }}>{error}</small>
                            <Button style={{ float: 'right' }}>Register</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        )
    }
}