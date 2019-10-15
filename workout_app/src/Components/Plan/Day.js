import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../../../src/Components/Plan/twelveweeks.css'
import exerciseLibrary from '../../../src/exerciseLibrary/data/exerciseLibrary.json' 

class Day extends Component {
  constructor(){
    super()
      this.state = { 
      }
    }

    //if the parent renders a specific day, the JSON can 
    //match and return specific information pertaining to that day.

    
    render() { 
    return ( 
      <div className="day__div">
        {exerciseLibrary[3].exerciseName}
      </div> 
    );
  }
}
 
export default Day;