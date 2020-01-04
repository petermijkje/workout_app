import React, { Component } from 'react'
import '../twelveweeks.css'
import exerciseLibrary from '../../../../src/exerciseLibrary/data/exerciseLibrary.json'
import './Day.css'

class Day extends Component {
  constructor() {
    super()
    this.state = {}
  }

  //if the parent renders a specific day, the JSON can
  //match and return specific information pertaining to that day.
  createRandomNumber = () => {
    for (
      let number = Math.floor(Math.random() * 200 + 0);
      number < 201;
      number++
    ) {
      if (exerciseLibrary[number].workoutType !== 'chest') {
        continue
      } else return exerciseLibrary[number].exerciseName
    }
  }

  render() {
    return <div className="day__div">{this.createRandomNumber()}</div>
  }
}

export default Day
