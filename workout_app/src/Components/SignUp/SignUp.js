import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Logo from './logo.png'
import CreateYourProfile from '../../../src/Components/SignUp/CreateYourProfile/CreateYourProfile.js'

class SignUp extends Component {
  constructor(){
    super()
    this.state = {
      email: "",
      password: "",
      loggedInUser: {},
      message: null,
      errors: [],
    }
  }

  // emailHandler = e => {
  //   this.setState({
  //     email: e.target.value
  //   })
  // }

  // passwordHandler = e =>{
  //   this.setState({
  //     password: e.target.value
  //   })
  // }

// current issues connecting 
  render(){
    return (
      <Router>
        <div className="App">
          <div className="box">
            <div className="sign__in"> 
              <br />
                Welcome to App<br />
              <p> create your profile </p>
              <br />
              <br />
            </div>
            <br />
            <img src={Logo} />
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
              <input type="Submit" className="button" /><br />
              <Switch>
              <Link to="/createyourprofile"> create_your_profile</Link>
              </Switch>
              <br />
              <br />
              <br />
              </div>
                </div>
        <Route path="/createyourprofile" component={CreateYourProfile} />
      </Router>
  );
}
}

export default SignUp;
