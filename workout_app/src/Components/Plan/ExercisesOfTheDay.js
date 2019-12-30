import React, { Component } from 'react'
import './exerciseoftheday.css'

class ExercisesOfTheDay extends Component {
  constructor() {
    super()
    this.state = {
      days: [{ id: 1, day: 'Day 1' }],
      todaysExercise: [
        {
          exerciseName: 'cable judo flip, abdominals',
          sets: 5,
          reps: 7
        },
        {
          exerciseName: 'kettlebell pirate ships, shoulders',
          sets: 6,
          reps: 6
        },
        {
          exerciseName: 'band assisted pull-up, lats',
          sets: 5,
          reps: 9
        },
        {
          exerciseName: 'bear crawl sled drags, quadriceps',
          sets: 4,
          reps: 14
        },
        {
          exerciseName: 'incline push-up medium, chest',
          sets: 5,
          reps: 12
        },
        {
          exerciseName: 'cable shoulder press, shoulders',
          sets: 4,
          reps: 7
        }
      ]
    }
  }

  createPlan = () => {
    const { todaysExercise } = this.state
    const listToday = todaysExercise.map(exercise => {
      return (
        <div className="border__div__for__exercise__of__day">
          <div className="day__of__exercise__div">
            <div>
              {exercise.exerciseName}
              {exercise.sets} X {exercise.reps}
            </div>
          </div>
        </div>
      )
    })
    return listToday
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
