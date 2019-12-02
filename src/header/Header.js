import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h1>Homebinder</h1>
    <nav>
      { unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
