import React, { Component } from 'react'
import './App.scss'
import { Route, NavLink } from 'react-router-dom'
// import Header from './header/Header'
import SignUp from './auth/components/SignUp/SignUp'
import SignIn from './auth/components/SignIn/SignIn'
import ResetPw from './auth/components/ResetPw/ResetPw'

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
    return (
      <main className='container'>
        <div className='App'>
          <div className='App__Aside'>
            Homebinder
            <img className='DashboardImg' src={require('./imgs/dashboardDesktop.png')} alt='Homebinder dashboard'/>
          </div>
          <div className='App__Form'>
            <img className='FormLogo' src={require('./imgs/hbWhiteLogo.png')} alt='Homebinder White Logo'/>
            <div className='FormTitle'>
              <NavLink to='/sign-up' activeClassName='FormTitle__Link--Active' className='FormTitle__Link'>Sign Up</NavLink> or <NavLink exact to='/' activeClassName='FormTitle__Link--Active' className='FormTitle__Link'>Sign In</NavLink>
            </div>
            <Route exact path ='/' component={SignIn} />
            <Route path='/sign-up'component={SignUp} />
            <Route path='/forgot-pw'component={ResetPw} />
          </div>
        </div>
      </main>
    )
  }
}

export default App
