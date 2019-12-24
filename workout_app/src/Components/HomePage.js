import React from 'react';
import { Button, Accordion, Card } from 'react-bootstrap'
import '../App.css';
import SignIn from './SignIn/SignIn.js'
import TwelveWeeks from '../../src/Components/Plan/TwelveWeeks.js'
import Clock from '../../src/Components/Time/Clock/Clock.js'
import CreateYourProfile from '../../src/Components/SignUp/CreateYourProfile/CreateYourProfile.js'
import Chart from './MainChart/Chart'
import Header from './Header/Header'
import Profile from './Profile/Profile'

class HomePage extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn: true,
        }
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
          <Header />
          <div className="flex__container">
            <Chart />
            
          </div> 
          <Profile />
          <Clock />
          <CreateYourProfile />
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Click me to see your workout plan!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <TwelveWeeks />
                  <Button onClick={this.handleLogoutClick} color="secondary" size="lg">Click here to logout</Button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
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
