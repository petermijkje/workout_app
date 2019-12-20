import React, { PureComponent } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import {
  BarChart, 
  CartesianGrid, 
  XAxis, 
  YAxis, 
  Tooltip,
  Legend,
  Bar,
} from 'recharts';

const LIFT_QUERY = gql `
{
  feed{ 
    id
    deadlift
    squat
    shoulderpress
  	frontsquat
    sumopull
    benchpress
  }
}
`

export default class BuildingStrength extends PureComponent {
  render() {
    return (
      <Query query={LIFT_QUERY}>
        {({ loading, error, data}) =>{
          const infoToRender = data.feed
          const deadliftInitial = infoToRender[0].deadlift
          const squatInitial = infoToRender[0].squat
          const benchpressInitial = infoToRender[0].benchpress
          const shoulderpressInitial = infoToRender[0].shoulderpress
          const frontsquatInitial = infoToRender[0].frontsquat
          const info = [
            {
              "name": "Squat",
              "Initial": 135,
              "Now": squatInitial,
            },
            {
              "name": "Deadlift",
              "Initial": 190,
              "Now": deadliftInitial,
            },
            {
              "name": "Bench Press",
              "Initial": 200,
              "Now": benchpressInitial,
            },
            {
              "name": "Shoulder Press",
              "Initial": 45,
              "Now": shoulderpressInitial,
            },
            {
              "name": "Front Squat ",
              "Initial": 110,
              "Now": frontsquatInitial,
            },
          ]

          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
        
          return (
            <div><BarChart width={600} height={500} data={info}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis  />
            <Tooltip />
            <Legend />
            <Bar dataKey="Initial" fill="#8884d8" />
            <Bar dataKey="Now" fill="#82ca9d" />
          </BarChart>
          These are your results.</div>
          )
        }}
</Query>
    );
  }
}
