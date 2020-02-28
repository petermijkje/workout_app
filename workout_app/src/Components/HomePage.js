import React from 'react'
import { Button } from 'react-bootstrap'

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

  changeView() {
    const navbar = 'twelveweeks'
    if (navbar === 'twelveweeks') {
      return (
        <div>
          <TwelveWeeks />
        </div>
      )
    } else if (navbar === 'home') {
      return (
        <div className="flex__container">
          <ExercisesOfTheDay className="flex__item" />
          <Chart className="flex__item" />
        </div>
      )
    }
  }

  render() {
    const signedUp = this.state.signedUp
    const isLoggedIn = this.state.isLoggedIn
    return (
      <div className="homepage__div">
        <Header logOut={this.handleLogoutClick} />
        <Clock />
        {this.changeView()}
        <div className="flex__container">
          <ExercisesOfTheDay className="flex__item" />
          <StatisticsForCharts className="flex__item" />
          <Chart className="flex__item" />
        </div>
        <Profile />
      </div>
    )
  }
}

export default HomePage
