import React from 'react';
import { Button } from 'reactstrap'
import '../App.css';
import SignIn from './SignIn/SignIn.js'
import TwelveWeeks from '../../src/Components/Plan/TwelveWeeks.js'
import Clock from '../../src/Components/Time/Clock/Clock.js'
import CreateYourProfile from '../../src/Components/SignUp/CreateYourProfile/CreateYourProfile.js'
import BodyPercentageChart from '../../src/Components/Chart/BodyPercentageChart'

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
          <BodyPercentageChart />
          <Clock />
          <CreateYourProfile />
          <br />
          {/* <TwelveWeeks /> */}
          <Button onClick={this.handleLogoutClick} color="secondary" size="lg">Click here to logout</Button>
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
