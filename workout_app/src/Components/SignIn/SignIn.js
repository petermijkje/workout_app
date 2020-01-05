import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './signin.css'
import Logo from './logo.png'
import SignUp from '../../../src/Components/SignUp/SignUp.js'

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      login: true,
      email: '',
      password: '',
      name: ''
    }
    this.handleloginChange = this.handleloginChange.bind(this)
  }
  handleloginChange() {
    this.setState({ login: false })
  }

  render() {
    const { login } = this.state
    if (login) {
      return (
        <div className="box">
          <div className="sign__in">
            <br />
            Adap-live Fitness
            <br />
            <br />
          </div>
          <br />
          <img src={Logo} alt="Logo" />
          <h4 className="Login__or__logout__word">
            {login ? 'Login' : 'Sign Up'}
          </h4>
          <br />
          <br />
          <form>
            <label>
              <input
                type="text"
                name="name"
                placeholder="Email"
                className="email"
              />
            </label>
            <br />
            <hr className="sign__in__hr" />
            <br />
            <input
              type="password"
              name="name"
              placeholder="Password"
              className="password"
            />
            <br />
            <hr className="sign__in__hr" />
            <br />
            <br />
            <input type="submit" value="READY?" className="button" />
          </form>
          <br />
          <div className="sign__up">
            Don't have an account?
            <h5 className="signup__link" onClick={this.handleloginChange}>
              Sign Up
            </h5>
          </div>
        </div>
      )
    } else return <SignUp />
  }
}

export default SignIn
