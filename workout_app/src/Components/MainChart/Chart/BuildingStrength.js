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
          const squatNow = infoToRender[0].squat
          const deadliftNow = infoToRender[0].deadlift
          const benchpressNow = infoToRender[0].benchpress
          const shoulderpressNow = infoToRender[0].shoulderpress
          const frontsquatNow = infoToRender[0].frontsquat
          const info = [
            {
              "name": "Squat",
              "Initial": 135,
              "Now": squatNow,
            },
            {
              "name": "Deadlift",
              "Initial": 190,
              "Now": deadliftNow,
            },
            {
              "name": "Bench Press",
              "Initial": 200,
              "Now": benchpressNow,
            },
            {
              "name": "Shoulder Press",
              "Initial": 45,
              "Now": shoulderpressNow,
            },
            {
              "name": "Front Squat ",
              "Initial": 110,
              "Now": frontsquatNow,
            },
          ]

          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
        
          return (
            <div><BarChart width={400} height={500} data={info}>
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
