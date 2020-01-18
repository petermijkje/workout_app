import React, { Component } from 'react'
import { Progress, FormGroup, Label, Input } from 'reactstrap'
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
      part1: true,
      part2: true,
      part3: true,
      loggedIn: true
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
          <input type="Submit" className="button" onClick={this.toggleButton} />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  )

  partTwo = (
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
          <Progress value="66">Part 2 of 3</Progress>
          <br />
          <br />
          <br />
          <form>
            <label>
              <input
                type="text"
                name="Name"
                placeholder="Name"
                className="email"
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
              />
            </label>
          </form>
          <hr className="sign__in__hr" />
          <form>
            <label>
              <input
                type="date"
                name="password"
                placeholder="Date of Birth"
                className="password"
              />
            </label>
          </form>
          <hr className="sign__in__hr" />
          <br />
          <br />
          <input type="Submit" className="button" />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  )

  partThree = (
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
          <Progress value="99">Part 3 of 3</Progress>
          <br />
          <br />
          <br />
          <form>
            <label>
              <input
                type="number"
                name="Name"
                placeholder="Age"
                className="email"
              />
            </label>
          </form>
          <hr className="sign__in__hr" />
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Female</option>
              <option>Male</option>
            </Input>
          </FormGroup>
          <hr className="sign__in__hr" />
          <form>
            <label>
              <input
                type="date"
                name="password"
                placeholder="Date of Birth"
                className="password"
              />
            </label>
          </form>
          <hr className="sign__in__hr" />
          <br />
          <br />
          <input type="Submit" className="button" />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  )

  render() {
    const { part1, part2, part3 } = this.state
    if (part1 && !part2 && !part3) {
      return <div>{this.partOne}</div>
    } else if (part1 && part2 && !part3) {
      return <div>{this.partTwo}</div>
    } else if (part1 && part2 && part3) {
      return <div> {this.partThree} </div>
    }
  }
}

export default SignUp
