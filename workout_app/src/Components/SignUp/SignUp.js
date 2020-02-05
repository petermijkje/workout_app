import React, { Component } from 'react'
import { Progress, FormGroup, Input } from 'reactstrap'
import './SignUp.css'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { AUTH_TOKEN } from '../../constants.js'
import './SignUp.css'

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      token
    }
  }
`

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      age: '',
      weight: '',
      loggedInUser: {},
      message: null,
      errors: [],
      part1: true,
      part2: false,
      part3: false,
      loggedIn: true
    }
    this.setPart3ToTrue = this.setPart3ToTrue.bind(this)
    //handle changes for sign up inputs
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(
      this
    )
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAgeChange = this.handleAgeChange.bind(this)
    this.handleWeightChange = this.handleWeightChange.bind(this)
  }

  //changes states from 2nd part of sign up to 3rd
  setPart3ToTrue() {
    this.setState({ part3: true })
  }

  handleSignUp = async data => {
    const { email, password, confirmPassword } = this.state
    const validationErrors = []

    const hasUpper = /[A-Z]/.test(password)
    const hasLower = /[a-z]/.test(password)
    const hasNumbers = /\d/.test(password)
    const hasChars = /\W/.test(password)

    //checks for valid email format
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      validationErrors.push('email')
      this.setState({ emailError: 'Email Address is Invalid or Missing. ' })
    } else {
      this.setState({ emailError: null })
    }
    //checks for safe password
    if (
      password.length < 8 ||
      hasUpper + hasLower + hasNumbers + hasChars < 3
    ) {
      validationErrors.push('password')
      this.setState({
        passwordError:
          'Password must be at least 8 characters and use at least 3 of the following character types: (a) uppercase letters, (b) lowercase letters, (c) numbers, and/or (d) special characters. '
      })
    } else {
      this.setState({ passwordError: null })
    }
    // checks that password and confirm password are the same
    if (password !== confirmPassword) {
      validationErrors.push('confirmPassword')
      this.setState({ confirmPasswordError: 'Password must match' })
    } else {
      this.setState({ confirmPasswordError: null })
    }
    if (!validationErrors.length) {
      const { token } = data.signup
      this._saveUserData(token)
      this.setState({ part2: true })
    } else {
      return false
    }
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }

  //handleChanges for all events
  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
  }

  handleConfirmPasswordChange(event) {
    this.setState({ confirmPassword: event.target.value })
  }

  handleNameChange(event) {
    this.setState({ firstName: event.target.value })
  }

  handleAgeChange(event) {
    this.setState({ age: event.target.value })
  }

  handleWeightChange(event) {
    this.setState({ weight: event.target.value })
  }

  render() {
    const {
      part1,
      part2,
      part3,
      email,
      password,
      firstName,
      age,
      weight
    } = this.state
    if (part1 && !part2 && !part3) {
      return (
        <div className="App">
          <div className="box">
            <div id="disappearing__act">
              <div className="sign__in" id="sign__in">
                <br />
                <span className="retrain__logo">Retrain</span>
                <br />
                <br />
                <p> create your profile </p>
                <br />
              </div>
              <Progress animated value="33">
                Part 1 of 3
              </Progress>
              <br />
              <br />
              <br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
              <hr className="sign__in__hr" />
              <input
                type="password"
                name="password"
                placeholder="password"
                className="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <hr className="sign__in__hr" />
              <input
                type="password"
                name="confirm password"
                placeholder="retype password"
                className="password"
                value={this.state.confirmPassword}
                onChange={this.handleConfirmPasswordChange}
              />
              <hr className="sign__in__hr" id="confirm__password__underline" />
              <br />
              <br />
              <span className="error__span">{this.state.emailError}</span>
              <span className="error__span">{this.state.passwordError}</span>

              <Mutation
                mutation={SIGNUP_MUTATION}
                variables={{ email, password }}
                onCompleted={data => this.handleSignUp(data)}
              >
                {mutation => (
                  <input
                    type="Submit"
                    className="button"
                    onClick={mutation}
                  ></input>
                )}
              </Mutation>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      )
    } else if (part1 && part2 && !part3) {
      return (
        <div className="App">
          <div className="box">
            <div id="disappearing__act">
              <div className="sign__in" id="sign__in">
                <br />
                Welcome to <p className="retrain__logo">Retrain</p>
                <br />
                <br />
                <p> create your profile </p>
                <br />
              </div>
              <Progress animated value="66">
                Part 2 of 3
              </Progress>
              <br />
              <br />
              <br />
              <form>
                <label>
                  <input
                    type="text"
                    name="First Name"
                    placeholder="Name"
                    className="password"
                    value={firstName}
                    onChange={this.handleNameChange}
                  />
                </label>
              </form>
              <hr className="sign__in__hr" />
              <form>
                <label>
                  <input
                    type="number"
                    name="password"
                    placeholder="Age"
                    className="password"
                    value={age}
                    onChange={this.handleAgeChange}
                  />
                </label>
              </form>
              <hr className="sign__in__hr" />
              <form>
                <label>
                  <input
                    type="number"
                    name="password"
                    placeholder="Weight"
                    className="password"
                    value={weight}
                    onChange={this.handleWeightChange}
                  />
                </label>
              </form>
              <hr className="sign__in__hr" />
              <br />
              <br />
              <input
                type="Submit"
                className="button"
                onClick={this.setPart3ToTrue}
              />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      )
    } else if (part1 && part2 && part3) {
      return (
        <div className="App">
          <div className="box">
            <div id="disappearing__act">
              <div className="sign__in" id="sign__in">
                <br />
                Welcome to <p className="retrain__logo">Retrain</p>
                <br />
                <br />
                <p> create your profile </p>
                <br />
              </div>
              <Progress animated value="99">
                Almost Done!
              </Progress>
              <br />
              <br />
              <br />
              <form>
                <label>
                  <input
                    type="number"
                    name="Name"
                    placeholder="Height in Inches"
                    className="email"
                  />
                </label>
                <hr className="sign__in__hr" />
              </form>
              <FormGroup>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Female</option>
                  <option>Male</option>
                </Input>
              </FormGroup>
              <hr className="sign__in__hr" />
              <FormGroup>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  placeholder="Goal?"
                >
                  <option disabled selected>
                    Select your Goal
                  </option>
                  <option>Lose Fat</option>
                  <option>Gain Muscle</option>
                  <option>Maintain</option>
                </Input>
              </FormGroup>
              <hr className="sign__in__hr" />
              <input
                type="Submit"
                className="button"
                onClick={this.props.byPassLogin}
              />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      )
    }
  }
}

export default SignUp
