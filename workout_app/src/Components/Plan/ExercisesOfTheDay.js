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
          reps: 7,
          color: '#0088FE'
        },
        {
          exerciseName: 'kettlebell pirate ships, shoulders',
          sets: 6,
          reps: 6,
          color: '#00C49F'
        },
        {
          exerciseName: 'band assisted pull-up, lats',
          sets: 5,
          reps: 9,
          color: '#FFBB28'
        },
        {
          exerciseName: 'bear crawl sled drags, quadriceps',
          sets: 4,
          reps: 14,
          color: '#FF8042'
        },
        {
          exerciseName: 'incline push-up medium, chest',
          sets: 5,
          reps: 12,
          color: '#D72638'
        },
        {
          exerciseName: 'cable shoulder press, shoulders',
          sets: 4,
          reps: 7,
          color: '#D8A47F'
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
            <div className="exercise__name__div">
              <p
                className="corresponding__circle"
                style={{
                  background: exercise.color
                }}
              ></p>
              {exercise.exerciseName}
            </div>
            <div className="exercise__sets__and__reps">
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
        <div className="frame__of__eotd">
          <div className="plan__number">{this.state.days[0].day}</div>
          {this.createPlan()}
        </div>
      </div>
    )
  }
}

export default ExercisesOfTheDay
