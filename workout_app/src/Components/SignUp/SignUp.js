import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Logo from './logo.png'
import { Progress } from 'reactstrap'
import './SignUp.css'

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      loggedInUser: {},
      message: null,
      errors: [],
      part1: false,
      part2: false,
      part3: false,
      loggedIn: true
    }
  }

  toggleButton() {
    var x = document.getElementById('disappearing__act')
    if (x.style.display === 'none') {
      x.style.display = 'block'
    } else {
      x.style.display = 'none'
    }
  }

  partOne = (
    <div className="App">
      <div className="box">
        <div id="disappearing__act">
          <div className="sign__in" id="sign__in">
            <br />
            Welcome to App
            <br />
            <br />
            <p> create your profile </p>
            <br />
          </div>
          <Progress value="33">Part 1 of 3</Progress>
          <br />
          <br />
          <br />
          <form>
            <label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="email"
              />
            </label>
          </form>
          <hr className="sign__in__hr" />
          <form>
            <label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="password"
              />
            </label>
          </form>
          <hr className="sign__in__hr" />
          <form>
            <label>
              <input
                type="password"
                name="password"
                placeholder="retype password"
                className="password"
              />
            </label>
          </form>
          <hr className="sign__in__hr" />
          <br />
          <br />
          {/* on click move the page to the to create profile page  */}
          <input type="Submit" className="button" onClick={this.toggleButton} />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  )

  render() {
    return <div>{this.partOne}</div>
  }
}

export default SignUp
