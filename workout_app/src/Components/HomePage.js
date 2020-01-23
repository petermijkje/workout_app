import React from 'react'
import { Button, Accordion, Card } from 'react-bootstrap'

//components
import SignUp from './SignUp/SignUp.js'
import SignIn from './SignIn/SignIn.js'
import TwelveWeeks from './Plan/TwelveWeeks.js'
import Clock from './Time/Clock/Clock.js'
// import CreateYourProfile from './SignUp/CreateYourProfile/CreateYourProfile.js'
import Chart from './MainChart/Chart'
import Header from './Header/Header'
import Profile from './Profile/Profile'
import ExercisesOfTheDay from './Plan/ExercisesOfTheDay'
import StatisticsForCharts from './MainChart/StatisticsForCharts'

//CSS
import './homepage.css'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      signedUp: true
    }
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.changeSignedUpToFalse = this.changeSignedUpToFalse.bind(this)
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false })
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true })
  }

  changeSignedUpToFalse() {
    this.setState({ signedUp: false })
  }

  render() {
    const signedUp = this.state.signedUp
    const isLoggedIn = this.state.isLoggedIn
    if (isLoggedIn) {
      return (
        <div className="homepage__div">
          <Header logOut={this.handleLogoutClick} />
          <Clock />
          <div className="flex__container">
            <ExercisesOfTheDay className="flex__item" />
            <StatisticsForCharts className="flex__item" />
            <Chart className="flex__item" />
          </div>
          {/* <Profile /> */}
          {/* <CreateYourProfile /> */}
          <Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Click me to see your workout plan!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card>
                  <TwelveWeeks />
                  <Button
                    onClick={this.handleLogoutClick}
                    color="secondary"
                    size="lg"
                  >
                    Click here to logout
                  </Button>
                </Card>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      )
    } else if (!isLoggedIn && signedUp) {
      return (
        <div>
          <SignIn
            byPassLogin={this.handleLoginClick.bind(this)}
            changeSignedUpToFalse={this.changeSignedUpToFalse.bind(this)}
          />
        </div>
      )
    } else if (!isLoggedIn && !signedUp) {
      return (
        <div>
          <SignUp byPassLogin={this.handleLoginClick.bind(this)} />
        </div>
      )
    }
  }
}

export default HomePage
