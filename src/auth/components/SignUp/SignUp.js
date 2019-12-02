import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const initialState = {
  email: '',
  password: '',
  passwordConfirmation: '',
  emailError: '',
  passwordError: '',
  confirmPasswordError: ''
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
  let confirmPasswordError = ''

  if (!this.state.email.includes('@')) {
    emailError = 'Invalid email'
  }

  if (this.state.password.length !== 8) {
    passwordError = 'Insufficient characters'
  }

  if (!this.state.confirmPassword !== this.state.password) {
    confirmPasswordError = 'Passwords do not match'
  }

  if (emailError || passwordError || confirmPasswordError) {
    this.setState({ emailError, passwordError, confirmPasswordError })
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
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Sign Up</h3>
        <Form onSubmit={this.handleSubmit}>
          <div>
            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <div style={{ fontSize: 12, color: 'red' }}>
                {this.state.emailError}
              </div>
            </Form.Group>
          </div>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: 'red' }}>
              {this.state.passwordError}
            </div>
          </Form.Group>
          <Form.Group controlId="passwordConfirmation">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              required
              name="passwordConfirmation"
              value={this.state.passwordConfirmation}
              type="password"
              placeholder="Confirm Password"
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: 'red' }}>
              {this.state.confirmPasswordError}
            </div>
          </Form.Group>
          <Button variant='primary' type="submit">Submit</Button>
        </Form>
      </div>
    </div>
  )
}
}
