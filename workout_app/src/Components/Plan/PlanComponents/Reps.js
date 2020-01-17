import React, { Component } from 'react'
import './Rep.css'

class Reps extends Component {
  constructor() {
    super()
    this.state = {
      goal: ''
    }
  }

  chooseRepetitions = goal => {
    if (goal === 'power') {
      const randomIntFromInterval = (min, max) => {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      return (
        <div>
          {randomIntFromInterval(2, 6)} x {randomIntFromInterval(4, 8)}
        </div>
      )
    } else if (goal === 'strength') {
      const randomIntFromInterval = (min, max) => {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      return (
        <div>
          {randomIntFromInterval(4, 6)} x {randomIntFromInterval(6, 15)}
        </div>
      )
    } else if (goal === 'endurance/tone') {
      const randomIntFromInterval = (min, max) => {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      return (
        <div>
          {randomIntFromInterval(4, 10)} x {randomIntFromInterval(12, 25)}
        </div>
      )
    }
  }

  render() {
    return <div className="rep__div">{this.chooseRepetitions('strength')}</div>
  }
}

export default Reps
