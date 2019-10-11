import React, { Component } from 'react';
import { Button } from 'reactstrap';

class TwelveWeeks extends Component {
  constructor(){
    super()
      this.state = { 
          day: new Date().getDate().toLocaleString()
      }
    }

    receivePlan = () => {
        const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5 ", "Day 6", "Day 7" ]
        const plan = days.map((number) => <div>Week 1 { number } </div>)
        return plan 
    }

  render() { 
    return ( 
      <div>
          Here's your plan
          { this.receivePlan() }
          Don't like it? <Button outline color="primary"> Click Here to Reset it</Button>
      </div> 
    );
  }
}
 
export default TwelveWeeks;