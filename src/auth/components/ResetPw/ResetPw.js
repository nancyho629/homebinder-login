import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const initialState = {
  email: ''
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

  if (!this.state.email.includes('@')) {
    emailError = 'Invalid email'
  }

  if (emailError) {
    this.setState({ emailError })
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
      <h3>Forgot your password?</h3>
      <h4>No worries! We&apos;ll send you a link to reset your password!</h4>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address: </Form.Label>
          <Form.Control
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: 'red', backgroundColor: 'white' }}>
            {this.state.emailError}
          </div>
        </Form.Group>
        <Button variant='primary' type="submit">Submit</Button>
      </Form>
    </div>
  )
}
}
