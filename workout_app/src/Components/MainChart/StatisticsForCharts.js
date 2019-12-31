import React, { Component } from 'react'

class StatisticsForCharts extends Component {
  constructor() {
    super()
    this.state = {
      todaysExercise: [
        {
          exerciseName: 'cable judo flip, abdominals',
          workoutType: 'abs',
          sets: 5,
          reps: 7
        },
        {
          exerciseName: 'kettlebell pirate ships, shoulders',
          workoutType: 'shoulders',
          sets: 6,
          reps: 6
        },
        {
          exerciseName: 'band assisted pull-up, lats',
          workoutType: 'lats',
          sets: 5,
          reps: 9
        },
        {
          exerciseName: 'bear crawl sled drags, quadriceps',
          workoutType: 'quads',
          sets: 4,
          reps: 14
        },
        {
          exerciseName: 'incline push-up medium, chest',
          workoutType: 'chest',
          sets: 5,
          reps: 12
        },
        {
          exerciseName: 'cable shoulder press, shoulders',
          workoutType: 'shoulders',
          sets: 4,
          reps: 7
        }
      ]
    }
  }

  showResults = () => {
    const { todaysExercise } = this.state
    const totalNumber = 260
    const newData = Object.keys(todaysExercise).map(item => (
      <div>
        {todaysExercise[item].workoutType} -
        {Math.round(
          ((todaysExercise[item].reps * todaysExercise[item].sets) /
            totalNumber) *
            100
        )}
        %{' '}
      </div>
    ))
    return newData
  }
  render() {
    return (
      <div>
        These are the parts of your body <br />
        that you'll be hitting today
        <br /> <br />
        {this.showResults()}
      </div>
    )
  }
}

export default StatisticsForCharts
