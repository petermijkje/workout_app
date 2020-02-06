import React, { Component } from 'react'
import './signin.css'
// import { AUTH_TOKEN } from '../../constants'
import Logo from './logo.png'
// import SignUp from '../../Components/SignUp/SignUp.js'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Link } from 'react-router-dom'

// const SIGNUP_MUTATION = gql`
//   mutation SignupMutation($email: String!, $password: String!, $name: String!) {
//     signup(email: $email, password: $password, name: $name) {
//       token
//     }
//   }
// `
const LOGIN_MUTATION = gql`
  mutation loginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`

class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      login: true,
      email: '',
      password: ''
    }
    this.handleloginChange = this.handleloginChange.bind(this)
  }
  handleloginChange() {
    this.setState({ login: false })
  }

  render() {
    // const loginInfo = data.login
    // const authToken = localStorage.getItem(AUTH_TOKEN)
    const { login, email, password } = this.state
    return (
      <div className="box">
        <div className="sign__in">
          <br />
          <br />
          <div className="sign__in__logo">Retrain</div>
          <br />
        </div>
        <br />
        <h4 className="Login__or__logout__word">Login</h4>
        <br />
        <form>
          <label>
            <input
              type="text"
              name="name"
              value={email}
              placeholder="Email "
              className="email"
              onChange={e => this.setState({ email: e.target.value })}
            />
          </label>
          <br />
          <input
            type="password"
            name="name"
            placeholder="Password"
            className="password"
            autoComplete="new-password"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input
            type="submit"
            value="READY?"
            className="button"
            onClick={this.props.byPassLogin}
          />
        </form>

        <div className="sign__up">
          Don't have an account?<span> </span>
          <p5 className="signup__link" onClick={this.handleloginChange}>
            <Link to="/signup" onClick={this.props.changeSignedUpToFalse}>
              Sign Up
            </Link>
          </p5>
        </div>
      </div>
    )
  }
  // _confirm = async () => {
  //   const { token } = data.login
  //   this._saveUserData(token)
  //   this.props.history.push(`/`)
  // }

  // _saveUserToken = token => {
  //   localStorage.setItem(AUTH_TOKEN, token)
  // }
}

export default SignIn
