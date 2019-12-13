import React, { PureComponent } from 'react';
import {
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis,
} from 'recharts';

const data = [
  {
    subject: 'Squat', A: 120, B: 110, fullMark: 150,
  },
  {
    subject: 'Deadlift', A: 98, B: 130, fullMark: 150,
  },
  {
    subject: 'Bench Press', A: 86, B: 130, fullMark: 150,
  },
  {
    subject: 'Shoulder Press', A: 99, B: 100, fullMark: 150,
  },
  {
    subject: 'Front Squat', A: 85, B: 90, fullMark: 150,
  },
  {
    subject: 'Sumo Pull', A: 65, B: 85, fullMark: 150,
  },
];

export default class BuildingStrength extends PureComponent {
  render() {
    return (
      <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    );
  }
}
