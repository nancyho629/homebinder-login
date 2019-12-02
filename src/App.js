import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
import Header from './header/Header'
import SignUp from './auth/components/SignUp/SignUp'
import SignIn from './auth/components/SignIn/SignIn'

import { SnackbarProvider } from 'notistack'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  render () {
    const { user } = this.state

    return (
      <SnackbarProvider maxSnack={3}>
        <Header user={user} />
        <main className="container">
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
        </main>
      </SnackbarProvider>
    )
  }
}

export default App
