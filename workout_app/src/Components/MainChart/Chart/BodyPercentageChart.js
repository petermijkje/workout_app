import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'
import './BodyPercentageChart.css'

const data = [
  { name: 'Group A', value: 400 }, //33.33%
  { name: 'Group B', value: 300 }, //25%
  { name: 'Group C', value: 300 }, //25%
  { name: 'Group D', value: 200 }, //16.67
  { name: 'Group E', value: 400 }
]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#D72638']

class BodyPercentageChart extends React.Component {
  render() {
    return (
      <div>
        <PieChart width={500} height={500} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={120}
            cy={200}
            innerRadius={80}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    )
  }
}

export default BodyPercentageChart
