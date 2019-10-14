import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../../../src/Components/Plan/twelveweeks.css'

class Day extends Component {
  constructor(){
    super()
      this.state = { 
        Type: 1,
        name: 'Barbell Squats', 
      }
    }

    //if the parent renders a specific day, the JSON can 
    //match and return specific information pertaining to that day.

    
    render() { 
    return ( 
      <div className="day__div">
          Day 1 <br />
          {this.state.name}
      </div> 
    );
  }
}
 
export default Day;