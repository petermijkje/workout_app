import React, { Component } from 'react'
import { Progress, FormGroup, Label, Input } from 'reactstrap'
import './SignUp.css'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loggedInUser: {},
      message: null,
      errors: [],
      part1: true,
      part2: false,
      part3: false,
      loggedIn: true
    }
    this.setPart2ToTrue = this.setPart2ToTrue.bind(this)
    this.setPart3ToTrue = this.setPart3ToTrue.bind(this)
  }

  setPart2ToTrue() {
    this.setState({ part2: true })
  }

  setPart3ToTrue() {
    this.setState({ part3: true })
  }

  render() {
    const { part1, part2, part3 } = this.state
    if (part1 && !part2 && !part3) {
      return (
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
              <Progress animated value="33">
                Part 1 of 3
              </Progress>
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
              <input
                type="Submit"
                className="button"
                onClick={this.setPart2ToTrue}
              />
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
                Welcome to App
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
                Welcome to App
                <br />
                <br />
                <p> create your profile </p>
                <br />
              </div>
              <Progress animated value="99">
                Almost Done!
              </Progress>
              <form>
                <p>Age</p>
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
                <p>Sex:</p>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Female</option>
                  <option>Male</option>
                </Input>
              </FormGroup>
              <hr className="sign__in__hr" />
              <form>
                <p>Date Of Birth:</p>
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
              <form>
                <p>Height in Inches</p>
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
