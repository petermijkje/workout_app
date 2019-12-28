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
    const number = Math.floor(Math.random() * 906 + 0)
    return number
  }

  render() {
    return (
      <div className="day__div">
        {exerciseLibrary[this.createRandomNumber()].exerciseName}
      </div>
    )
  }
}

export default Day
