import React, { Component } from 'react';

class TwelveWeeks extends Component {
  constructor(){
    super()
      this.state = { 
          day: new Date().getDate().toLocaleString()
      }
    }

    receivePlan = () => {
        const plan = <div> { this.state.day } </div>
        return plan 
    }

  render() { 
    return ( 
      <div>
          Here's your plan
          { this.receivePlan() }
      </div> 
    );
  }
}
 
export default TwelveWeeks;