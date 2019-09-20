import React from 'react';
import '../App.css';
import SignIn from './SignIn/SignIn.js'
import SignUp from './SignUp/SignUp.js'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class HomePage extends React.Component {
    constructor(){
        super()
        this.state = {isLoggedIn: false}
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
      }

    handleLoginClick() {
        this.setState({isLoggedIn: true})
    }  

render (){
    const isLoggedIn = this.state
    const welcome = this.state
    if (isLoggedIn) {
        return (
            <div className="App">
                <SignIn 
                    style={{'height': '100%', 'width': '100%'}}
                />
            </div>
        )
    } else return (
        <SignUp />
    )
    return (
        <div className="App">
        </div>
    );
  }
}

export default HomePage;
