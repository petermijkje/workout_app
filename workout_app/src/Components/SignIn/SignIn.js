import React, { Component } from 'react'
import './signin.css'
import { AUTH_TOKEN } from '../../constants'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Link } from 'react-router-dom'

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

  _confirm = async data => {
    const { token } = data.login
    this._saveUserData(token)
    this.byPassLogin()
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }

  byPassLogin = () => {
    this.props.byPassLogin({ isLoggedIn: true })
  }
  render() {
    const { email, password } = this.state
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
          <Mutation
            mutation={LOGIN_MUTATION}
            variables={{
              email,
              password
            }}
            onCompleted={data => this._confirm(data)}
          >
            {mutation => (
              <input
                type="Submit"
                className="button"
                onClick={mutation}
              ></input>
            )}
          </Mutation>
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
}

export default SignIn
