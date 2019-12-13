import React from 'react';
import {
  PieChart, 
  Pie, 
  Cell,
} from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


class BodyPercentageChart extends React.Component {
render (){
      return (
          <PieChart width={600} height={500} onMouseEnter={this.onPieEnter}>
            <Pie
              data={data} 
              cx={120} 
              cy={200} 
              innerRadius={80}
              outerRadius={120} 
              fill="#8884d8"
              paddingAngle={5}
            >
        	  {
          	  data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
            }
            </Pie>
            </PieChart>
    );
  }
}

export default BodyPercentageChart;
