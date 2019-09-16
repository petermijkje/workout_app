import React, { Component } from 'react';
import Logo from './logo.png'

function validate(email, password) {
  return {
    email: email.length === 0,
    password: password.length === 0
  };
}

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

  emailHandler = e => {
    this.setState({
      email: e.target.value
    })
  }

  passwordHandler = e =>{
    this.setState({
      password: e.target.value
    })
  }

  validateFields(email, password) {
    // we are going to store errors for all fields in a single array
    const errors = [];

    if (email.length === 0) {
      errors.push("Email is required");
    }
    if (email.split("").filter(x => x === "@").length !== 1) {
      errors.push("Email should contain a @");
    }
    if (email.indexOf(".") === -1) {
      errors.push("Email should contain at least one dot");
    }
    if (password.length === 0) {
      errors.push("Password is required");
    }

    if (password.length < 8) {
      errors.push("Password should be at least 8 characters long");
    }

    return errors;
  }
  canBeSubmitted = () => {
    const { email, password } = this.state;
    const errors = validate(email, password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  };

  render(){
    const { message } = this.state
    return (
      <div className="App">
                    <div className="box">
              <div className="sign__in"> 
                <br />
                Welcome to FIT<br />
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
                    value= {this.state.email}
                    onChange={e => this.emailHandler(e)}
                    required
                  />
                              {!this.state.errors ? (
              <div />
            ) : (
              <div>
                <h1>
                  {this.state.errors.map(error => {
                    return (
                      <h6
                        style={{
                          fontSize: "10px",
                          color: "red",
                          width: "390px"
                        }}
                      >
                        {error}
                      </h6>
                    );
                  })}
                </h1>
              </div>
            )}
            {message ? <h6 style={{ color: "red" }}>{message}</h6> : <div />}
                </label>
                <br />
                <hr className="sign__in__hr" />
                <br />
                <input 
                  type="password" 
                  name="name" 
                  placeholder="Password" 
                  className="password" 
                  value={this.state.password}
                  onChange={e => this.passwordHandler(e)}
                  required
                />
                
                <br />
                <hr className="sign__in__hr" />
                <br />
                <br />
                <input type="submit" value="READY?" className='button'/>
              </form>  
              <br />
              <br />
              <br />

              </div>       
      </div>
  );
}
}

export default SignUp;
