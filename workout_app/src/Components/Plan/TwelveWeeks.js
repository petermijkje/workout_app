import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../../../src/Components/Plan/twelveweeks.css'
import Day from '../../../src/Components/Plan/Day.js'

class TwelveWeeks extends Component {
  constructor(){
    super()
      this.state = { 
      }
    }
    
    
    
    render() { 
      const exerciseAPI = {
        Type: 1,
        name: 'Barbell Squats'
      }

    return ( 
      <div className="twelve__Week__Div">
          Here's your plan
          <Day exerciseName={exerciseAPI.name}  />
          <Day  />
          <Day  />
          <Day  />
          <Day  />
          <Day  />
          <Day  />
          Don't like it? <br /><Button outline color="primary"> Click Here to Reset it</Button>
      </div> 
    );
  }
}
 
export default TwelveWeeks;