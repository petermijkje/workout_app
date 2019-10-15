import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../../../src/Components/Plan/twelveweeks.css'
import Day from '../../../src/Components/Plan/Day.js'
import Reps from '../../../src/Components/Plan/Reps.js'

class TwelveWeeks extends Component {
  constructor(){
    super()
      this.state = {
      }
    }
// receives input on what type of day the Day component will
// be rendering.     

//will need to receive the type of plan "bulk", "power", "weight loss" to render amount of reps

    createPlan = () => {
      const days = ["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"]
      const listDays = days.map((days) =>      
        <div>
          {days}
          <Day />
          <Reps />
        </div>
      )
      return listDays
    }
    
    render() { 
      return ( 
      <div>
        {this.createPlan()}
          Don't like it? <br /><Button outline color="primary"> Click Here to Reset it</Button>
      </div> 
    );
  }
}
 
export default TwelveWeeks;