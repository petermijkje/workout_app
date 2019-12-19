import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './profile.css'

class Profile extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
              <div className="lift__input__div">
                <input type="number" placeholder="deadlift" className="lift__input"/>
                <input type="number" placeholder="squat" className="lift__input"/>
                <input type="number" placeholder="bench press" className="lift__input"/>
                <input type="number" placeholder="shoulder press" className="lift__input"/>
                <input type="number" placeholder="sumo pull" className="lift__input"/>
                <input type="number" placeholder="front squat" className="lift__input"/>
                <Button>Press to Save </Button>
              </div>
            </div>
         );
    }
}
 
export default Profile;