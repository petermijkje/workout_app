import React, { Component } from 'react'
import '../../../src/Components/Plan/twelveweeks.css'
import Day from './PlanComponents/Day.js'
import Reps from './PlanComponents/Reps.js'

class ExercisesOfTheDay extends Component {
  constructor() {
    super()
    this.state = {}
  }

  createPlan = () => {
    const days = [{ id: 1, day: 'Day 1' }]

    const listDays = Object.keys(days).map(day => (
      <div key={days[day].id}>
        <div className="day__of__exercise__div">
          {days[day].day}
          <Day />
          <Reps />
          <Day />
          <Reps />
          <Day />
          <Reps />
        </div>
      </div>
    ))
    return listDays
  }

  render() {
    return (
      <div>
        {this.createPlan()}
        <br />
      </div>
    )
  }
}

export default ExercisesOfTheDay
