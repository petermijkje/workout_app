import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Logo from "./logo.png";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loggedInUser: {},
      message: null,
      errors: [],
      part1: false,
      part2: false,
      part3: false,
      loggedIn: true
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="box">
            <div className="sign__in">
              <br />
              Welcome to App
              <br />
              <p> create your profile </p>
              <br />
              <br />
            </div>
            <br />
            <img src={Logo} alt="Logo" />
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
            <br />
            <hr className="sign__in__hr" />
            <br />
            <br />
            {/* on click move the page to the to create profile page  */}
            <input type="Submit" className="button" />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </Router>
    );
  }
}

export default SignUp;
