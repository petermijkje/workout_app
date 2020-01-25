import React, { Component } from 'react'
import './exerciseoftheday.css'

class ExercisesOfTheDay extends Component {
  constructor() {
    super()
    this.state = {
      days: [{ id: 1, day: 'Day 1' }],
      todaysExercise: [
        {
          exerciseName: 'cable judo flip',
          sets: 5,
          reps: 7,
          color: '#7CC6FE',
          repNumber: 1
        },
        {
          exerciseName: 'kettlebell pirate ships',
          sets: 6,
          reps: 6,
          color: '#7CC6FE',
          repNumber: 2
        },
        {
          exerciseName: 'band assisted pull-up',
          sets: 5,
          reps: 9,
          color: '#7CC6FE',
          repNumber: 3
        },
        {
          exerciseName: 'bear crawl sled drags',
          sets: 4,
          reps: 14,
          color: '#7CC6FE',
          repNumber: 4
        },
        {
          exerciseName: 'incline push-up medium',
          sets: 5,
          reps: 12,
          color: '#7CC6FE',
          repNumber: 5
        },
        {
          exerciseName: 'cable shoulder press',
          sets: 4,
          reps: 7,
          color: '#7CC6FE',
          repNumber: 6
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
              >
                <div className="number__in__exercise__div">
                  {exercise.repNumber}
                </div>
              </p>
              <div className="exercises__name__div">
                {exercise.exerciseName}
              </div>
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
