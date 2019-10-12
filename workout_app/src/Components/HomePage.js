import React from 'react';
import '../App.css';
import SignIn from './SignIn/SignIn.js'
import SignUp from './SignUp/SignUp.js'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import TwelveWeeks from '../../src/Components/Plan/TwelveWeeks.js'
import Clock from '../../src/Components/Time/Clock/Clock.js'
import CreateYourProfile from '../../src/Components/SignUp/CreateYourProfile/CreateYourProfile.js'

class HomePage extends React.Component {
    constructor(){
        super()
        this.state = {isLoggedIn: true}
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
      }

    handleLoginClick() {
        this.setState({isLoggedIn: true})
    }  

render (){
    const isLoggedIn = this.state.isLoggedIn
    if (isLoggedIn) {
        return (
            <div className="App">
                <Clock />
                <CreateYourProfile />
                <br />
                <TwelveWeeks />
            </div>
        )
    } else return (
        <div>
           <SignIn />
        </div>
    );
  }
}

export default HomePage;
