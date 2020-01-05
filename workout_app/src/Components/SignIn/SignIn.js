import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './signin.css'
import Logo from './logo.png'
import SignUp from '../../../src/Components/SignUp/SignUp.js'

class SignIn extends Component {
  state = {
    login: true,
    email: '',
    password: '',
    name: ''
  }
  render() {
    const { login } = this.state
    {
      if (login) {
        return (
          <Router>
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
                <Link to="/signup"> Sign Up</Link>
              </div>
            </div>
            <Route path="/signup" component={SignUp} />
          </Router>
        )
      } else return <SignUp />
    }
  }
}

export default SignIn
