import React from 'react';
import '../App.css';
import SignIn from './SignIn/SignIn.js'
import SignUp from './SignUp/SignUp.js'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class HomePage extends React.Component {
    constructor(){
        super()
        this.state = {isLoggedIn: false}
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
                <SignIn />
                <button 
                    onClick={this.handleLogoutClick}
                />
            </div>
        )
    } else return (
        <div>
            <SignUp />
            <button onClick={this.handleLoginClick} />
        </div>
    )
    return (
        <div className="App">
        </div>
    );
  }
}

export default HomePage;
