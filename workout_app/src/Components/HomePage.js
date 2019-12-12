import React from 'react';
import { Button } from 'reactstrap'
import '../App.css';
import SignIn from './SignIn/SignIn.js'
import TwelveWeeks from '../../src/Components/Plan/TwelveWeeks.js'
import Clock from '../../src/Components/Time/Clock/Clock.js'
import CreateYourProfile from '../../src/Components/SignUp/CreateYourProfile/CreateYourProfile.js'
import * as CanvasJSReact from '../canvasjs.react'
import { CanvasJS } from '../canvasjs.react';
import { CanvasJSChart} from '../canvasjs.react';

class HomePage extends React.Component {
    constructor(){
        super()
        this.state = {isLoggedIn: true}
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
      }

    handleLoginClick() {
        this.setState({isLoggedIn: true})
    }  

render (){
  const bodyChart = {
    title: {
      text: "Weekly output per body part"
    },
    data: [{				
              type: "doughnut",
              dataPoints: [
                  { label: "Abs",  y: 10  },
                  { label: "Shoulders", y: 15  },
                  { label: "Chest", y: 25  },
                  { label: "Legs",  y: 30  },
                  { label: "Back",  y: 28  }
              ]
     }]
 }
    const isLoggedIn = this.state.isLoggedIn
    if (isLoggedIn) {
      return (
        <div className="App">
          <CanvasJSChart options = {bodyChart} />
          <Clock />
            <CreateYourProfile />
            <br />
            <TwelveWeeks />
            <Button onClick={this.handleLogoutClick} color="secondary" size="lg">Click here to logout</Button>
          </div>
      )
    } else return (
        <div>
           <SignIn />
        </div>
    );
  }
}

export default HomePage;
