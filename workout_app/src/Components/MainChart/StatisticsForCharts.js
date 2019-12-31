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
    const data = [
      { name: 'Legs', value: 400 }, //33.33%
      { name: 'Chest', value: 300 }, //25%
      { name: 'Shoulders', value: 300 }, //25%
      { name: 'Abs', value: 200 } //16.67
    ]
    const newData = Object.keys(data).map(item => (
      <div>
        {data[item].name} -{Math.round((data[item].value * 100) / 1200)}%
      </div>
    ))
    return newData
  }
  render() {
    return (
      <div>
        Here are your results
        {this.showResults()}
      </div>
    )
  }
}

export default StatisticsForCharts
