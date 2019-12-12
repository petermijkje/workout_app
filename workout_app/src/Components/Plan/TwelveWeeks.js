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
      // const days = ["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"]
      const days = [
        {id: 1, day: "Day 1"},
        {id: 2, day: "Day 2"},
        {id: 3, day: "Day 3"},
        {id: 4, day: "Day 4"},
        {id: 5, day: "Day 5"},
        {id: 6, day: "Day 6"},
        {id: 7, day: "Day 7"},
        {id: 8, day: "Day 8"},
        {id: 9, day: "Day 9"},
        {id: 10, day: "Day 10"},
        {id: 11, day: "Day 11"},
        {id: 12, day: "Day 12"},
        {id: 13, day: "Day 13"},
        {id: 14, day: "Day 14"},
        {id: 15, day: "Day 15"},
        {id: 16, day: "Day 16"},
        {id: 17, day: "Day 17"},
        {id: 18, day: "Day 18"},
        {id: 19, day: "Day 19"},
        {id: 20, day: "Day 20"},
        {id: 21, day: "Day 21"}, 
        {id: 22, day: "Day 22"},
        {id: 23, day: "Day 23"},
        {id: 24, day: "Day 24"},
        {id: 25, day: "Day 25"},
        {id: 26, day: "Day 26"},
        {id: 27, day: "Day 27"},
        {id: 28, day: "Day 28"},          
      ]

      const listDays = Object.keys(days).map((day) =>      
        <div 
          key={days[day].id}
        >
        {days[day].day}
        <div className="calendar__day__div">
        <Day />
        <Reps />
        <Day />
        <Reps />
        <Day />
        <Reps />
        </div>
        </div>
      )
      return listDays
    }
    
    render() { 
      return (
      <div className="twelve__Week__Div__Container">
        {this.createPlan()}<br />
          click here to save your workout <Button outline color="primary"> Click Here to Save it</Button><br />
          Don't like it? <Button outline color="danger"> Click Here to Reset it</Button><br />
      </div> 
    );
  }
}
 
export default TwelveWeeks;