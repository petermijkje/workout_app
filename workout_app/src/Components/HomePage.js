import React from 'react'
import { Button, Accordion, Card } from 'react-bootstrap'

//components
import SignIn from './SignIn/SignIn.js'
import TwelveWeeks from './Plan/TwelveWeeks.js'
import Clock from './Time/Clock/Clock.js'
import CreateYourProfile from './SignUp/CreateYourProfile/CreateYourProfile.js'
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
      isLoggedIn: ''
    }
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false })
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    if (isLoggedIn) {
      return (
        <div>
          <Header logOut={this.handleLogoutClick} />
          <div className="flex__container">
            <Chart className="flex__item" />
            <StatisticsForCharts className="flex__item" />
            <ExercisesOfTheDay className="flex__item" />
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
                  <Button
                    onClick={this.handleLogoutClick}
                    color="secondary"
                    size="lg"
                  >
                    Click here to logout
                  </Button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      )
    } else
      return (
        <div>
          <SignIn />
          <button onClick={this.handleLoginClick}>
            Click here bypass login
          </button>
        </div>
      )
  }
}

export default HomePage
