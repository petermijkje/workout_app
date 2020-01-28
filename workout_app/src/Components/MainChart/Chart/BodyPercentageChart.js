import React from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'
import './BodyPercentageChart.css'

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#D72638',
  '#D8A47F'
]

class BodyPercentageChart extends React.Component {
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

  render() {
    // this.state
    const { todaysExercise } = this.state
    // converting reps and sets to total number completed
    const firstValue = todaysExercise[0].sets * todaysExercise[0].reps
    const secondValue = todaysExercise[1].sets * todaysExercise[1].reps
    const thirdValue = todaysExercise[2].sets * todaysExercise[2].reps
    const fourthValue = todaysExercise[3].sets * todaysExercise[3].reps
    const fifthValue = todaysExercise[4].sets * todaysExercise[4].reps
    const sixthValue = todaysExercise[5].sets * todaysExercise[5].reps

    //
    const firstExerciseName = todaysExercise[0].exerciseName
    const secondExerciseName = todaysExercise[1].exerciseName
    const thirdExerciseName = todaysExercise[2].exerciseName
    const fourthExerciseName = todaysExercise[3].exerciseName
    const fifthExerciseName = todaysExercise[4].exerciseName
    const sixthExerciseName = todaysExercise[5].exerciseName

    const data = [
      { name: firstExerciseName, value: firstValue },
      { name: secondExerciseName, value: secondValue },
      { name: thirdExerciseName, value: thirdValue },
      { name: fourthExerciseName, value: fourthValue },
      { name: fifthExerciseName, value: fifthValue },
      { name: sixthExerciseName, value: sixthValue }
    ]

    return (
      <div className="pie__chart__container">
        <PieChart
          width={500}
          height={280}
          onMouseEnter={this.onPieEnter}
          className="pie__chart__div"
        >
          <Pie
            data={data}
            cx={215}
            cy={140}
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    )
  }
}

export default BodyPercentageChart
