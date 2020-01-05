import React, { Component } from 'react'
import '../twelveweeks.css'
import exerciseLibrary from '../../../../src/exerciseLibrary/data/exerciseLibrary.json'
import './Day.css'

class Day extends Component {
  constructor() {
    super()
    this.state = {
      workoutDayType: [
        'chest',
        'shoulders',
        'lats',
        'middle back',
        'lower back',
        'quads',
        'hamstrings',
        'calves',
        'abductors',
        'adductors',
        'abs',
        'triceps',
        'biceps',
        'forearms'
      ]
    }
  }

  //if the parent renders a specific day, the JSON can
  //match and return specific information pertaining to that day.
  createRandomNumber = () => {
    // console.log(this.props.workoutDay)
    // const workoutDayType = this.state.workoutDayType[0]
    let number = ''
    for (
      let number = Math.floor(Math.random() * 906 + 0);
      number < 906;
      number++
    ) {
      if (exerciseLibrary[number].workoutType !== this.props.workoutDay) {
        continue
        // create an if else statement that says if there are no more types,
        // start from the beginning.
      } else return exerciseLibrary[number].exerciseName
    }
    return exerciseLibrary[number.exerciseName]
  }

  render() {
    return <div className="day__div">{this.createRandomNumber()}</div>
  }
}

export default Day
