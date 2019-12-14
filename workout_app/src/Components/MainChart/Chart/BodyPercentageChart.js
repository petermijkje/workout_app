import React from 'react';
import {
  PieChart, 
  Pie, 
  Cell,
} from 'recharts';

const data = [
  { name: 'Group A', value: 400 }, //33.33%
  { name: 'Group B', value: 300 }, //25%
  { name: 'Group C', value: 300 }, //25%
  { name: 'Group D', value: 200 }, //16.67
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class BodyPercentageChart extends React.Component {
  
  showResults = () => {
    const data = [
      { name: 'Legs', value: 400 }, //33.33%
      { name: 'Chest', value: 300 }, //25%
      { name: 'Shoulders', value: 300 }, //25%
      { name: 'Abs', value: 200 }, //16.67
    ];
    const newData = Object.keys(data).map((item) =>
      <div>
      {data[item].name} - 
       {Math.round(data[item].value * 100 / 1200)}%
      </div>
    )
    return newData
  }
  
render (){
      return (
        <div>
            {this.showResults()}
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
            These are your results. <br/>

            </div>
    );
  }
}

export default BodyPercentageChart;
