import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Button } from 'react-bootstrap'
import './profile.css'
import Link from './Link'

const LIFT_QUERY = gql`
  {
    feed {
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

class Profile extends Component {
  state = {}
  render() {
    return (
      <div>
        <Query query={LIFT_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>

            const linksToRender = data.feed

            return (
              <div>
                {linksToRender.map(link => (
                  <Link key={link.id} link={link} />
                ))}
              </div>
            )
          }}
        </Query>
        <div className="lift__input__div">
          <input type="number" placeholder="deadlift" className="lift__input" />
          <input type="number" placeholder="squat" className="lift__input" />
          <input
            type="number"
            placeholder="bench press"
            className="lift__input"
          />
          <input
            type="number"
            placeholder="shoulder press"
            className="lift__input"
          />
          <input
            type="number"
            placeholder="sumo pull"
            className="lift__input"
          />
          <input
            type="number"
            placeholder="front squat"
            className="lift__input"
          />
          <Button>Press to Save </Button>
        </div>
      </div>
    )
  }
}

export default Profile
