import React, { Component } from 'react'
import { Button } from 'reactstrap'
import './twelveweeks.css'
import Day from './PlanComponents/Day.js'
import Reps from './PlanComponents/Reps.js'

class TwelveWeeks extends Component {
  constructor() {
    super()
    this.state = {
      days: [
        { id: 1, day: 'Day 1' },
        { id: 2, day: 'Day 2' },
        { id: 3, day: 'Day 3' },
        { id: 4, day: 'Day 4' },
        { id: 5, day: 'Day 5' },
        { id: 6, day: 'Day 6' },
        { id: 7, day: 'Day 7' },
        { id: 8, day: 'Day 8' },
        { id: 9, day: 'Day 9' },
        { id: 10, day: 'Day 10' },
        { id: 11, day: 'Day 11' },
        { id: 12, day: 'Day 12' },
        { id: 13, day: 'Day 13' },
        { id: 14, day: 'Day 14' },
        { id: 15, day: 'Day 15' },
        { id: 16, day: 'Day 16' },
        { id: 17, day: 'Day 17' },
        { id: 18, day: 'Day 18' },
        { id: 19, day: 'Day 19' },
        { id: 20, day: 'Day 20' },
        { id: 21, day: 'Day 21' },
        { id: 22, day: 'Day 22' },
        { id: 23, day: 'Day 23' },
        { id: 24, day: 'Day 24' },
        { id: 25, day: 'Day 25' },
        { id: 26, day: 'Day 26' },
        { id: 27, day: 'Day 27' },
        { id: 28, day: 'Day 28' },
        { id: 29, day: 'Day 29' },
        { id: 30, day: 'Day 30' },
        { id: 31, day: 'Day 31' },
        { id: 32, day: 'Day 32' },
        { id: 33, day: 'Day 33' },
        { id: 34, day: 'Day 34' },
        { id: 35, day: 'Day 35' },
        { id: 36, day: 'Day 36' },
        { id: 37, day: 'Day 37' },
        { id: 38, day: 'Day 38' },
        { id: 39, day: 'Day 39' },
        { id: 40, day: 'Day 40' },
        { id: 41, day: 'Day 41' },
        { id: 42, day: 'Day 42' },
        { id: 43, day: 'Day 43' },
        { id: 44, day: 'Day 44' },
        { id: 45, day: 'Day 45' },
        { id: 46, day: 'Day 46' },
        { id: 47, day: 'Day 47' },
        { id: 48, day: 'Day 48' },
        { id: 49, day: 'Day 49' },
        { id: 50, day: 'Day 50' },
        { id: 51, day: 'Day 51' },
        { id: 52, day: 'Day 52' },
        { id: 53, day: 'Day 53' },
        { id: 54, day: 'Day 54' },
        { id: 55, day: 'Day 55' },
        { id: 56, day: 'Day 56' },
        { id: 57, day: 'Day 57' },
        { id: 58, day: 'Day 58' },
        { id: 59, day: 'Day 59' },
        { id: 60, day: 'Day 60' },
        { id: 61, day: 'Day 61' },
        { id: 62, day: 'Day 62' },
        { id: 63, day: 'Day 63' },
        { id: 64, day: 'Day 64' },
        { id: 65, day: 'Day 65' },
        { id: 66, day: 'Day 66' },
        { id: 67, day: 'Day 67' },
        { id: 68, day: 'Day 68' },
        { id: 69, day: 'Day 69' },
        { id: 70, day: 'Day 70' },
        { id: 71, day: 'Day 71' },
        { id: 72, day: 'Day 72' },
        { id: 73, day: 'Day 73' },
        { id: 74, day: 'Day 74' },
        { id: 75, day: 'Day 75' },
        { id: 76, day: 'Day 76' },
        { id: 77, day: 'Day 77' },
        { id: 78, day: 'Day 78' },
        { id: 79, day: 'Day 79' },
        { id: 80, day: 'Day 80' },
        { id: 81, day: 'Day 81' },
        { id: 82, day: 'Day 82' },
        { id: 83, day: 'Day 83' },
        { id: 84, day: 'Day 84' }
      ]
    }
  }
  // receives input on what type of day the Day component will
  // be rendering.

  //will need to receive the type of plan "bulk", "power", "weight loss" to render amount of reps

  createPlan = () => {
    // const days = ["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"]
    const { days } = this.state

    const listDays = Object.keys(days).map(day => (
      <div key={days[day].id}>
        {days[day].day}
        <div className="calendar__day__div">
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
    ))
    return listDays
  }

  render() {
    return (
      <div className="twelve__Week__Div__Container">
        {this.createPlan()}
        <br />
        click here to save your workout
        <Button outline color="primary">
          Click Here to Save it
        </Button>
        <br />
        Don't like it?
        <Button outline color="danger">
          Click Here to Reset it
        </Button>
        <br />
      </div>
    )
  }
}

export default TwelveWeeks
