import React, { Component } from 'react'
import './exerciseoftheday.css'
import Day from './PlanComponents/Day.js'
import Reps from './PlanComponents/Reps.js'

class ExercisesOfTheDay extends Component {
  constructor() {
    super()
    this.state = {
      days: [{ id: 1, day: 'Day 1' }]
    }
  }

  createPlan = () => {
    const days = [{ id: 1, day: 'Day 1' }]

    const listDays = Object.keys(days).map(day => (
      <div key={days[day].id}>
        <div className="border__div__for__exercise__of__day">
          <div className="day__of__exercise__div">
            <Day />
            <Reps />
            <Day />
            <Reps />
            <Day />
            <Reps />
            <Day />
            <Reps />
            <Day />
            <Reps />
            <Day />
            <Reps />
          </div>
        </div>
      </div>
    ))
    return listDays
  }

  render() {
    return (
      <div>
        {this.state.days[0].day}
        <br />
        <div className="day__of__exercise__container">{this.createPlan()}</div>
      </div>
    )
  }
}

export default ExercisesOfTheDay
