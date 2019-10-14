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
    
    
    render() { 
      return ( 
      <div>
          <Day  />
          <Reps />
          <Day  />
          <Reps />
          <Day  />
          <Reps />
          <Day  />
          <Reps />
          <Day  />
          <Reps />
          <Day  />
          <Reps />          
          <Day  />
          <Reps />
          Don't like it? <br /><Button outline color="primary"> Click Here to Reset it</Button>
      </div> 
    );
  }
}
 
export default TwelveWeeks;