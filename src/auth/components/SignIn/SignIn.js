import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

const initialState = {
  email: '',
  password: '',
  emailError: '',
  passwordError: ''
}

export default class ValidationForm extends React.Component {
  state = initialState

  handleChange = event => {
    const isCheckbox = event.target.type === 'checkbox'
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    })
  }

validate = () => {
  let emailError = ''
  let passwordError = ''

  if (!this.state.email.includes('@')) {
    emailError = 'Invalid email'
  }

  if (this.state.password.length !== 8) {
    passwordError = 'Insufficient characters'
  }

  if (emailError || passwordError) {
    this.setState({ emailError, passwordError })
    return false
  }
  return true
}

handleSubmit = event => {
  event.preventDefault()
  const isValid = this.validate()
  if (isValid) {
    console.log(this.state)
    // clear Form
    this.setState(initialState)
  }
}

render () {
  return (
    <div className='Form'>
      <h3>Sign In</h3>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address: </Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: 'red', backgroundColor: 'white' }}>
            {this.state.emailError}
          </div>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password: </Form.Label>
          <Form.Control
            type='password'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: 'red', backgroundColor: 'white' }}>
            {this.state.passwordError}
          </div>
        </Form.Group>
        <Button variant='primary' type='submit'>Submit</Button>
      </Form>
      <Link to={'/forgot-pw'} className='FormField__Link'>Forgot password?</Link>
    </div>
  )
}
}
