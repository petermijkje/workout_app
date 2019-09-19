import React, { Component } from 'react';
import Logo from './logo.png'

export default class CreateYourProfile extends Component {
    state = { 
        age: [],
        sex: [],
        inches: [],
        pounds: [],
     }


     getBasalMetabolicRate = (pounds, inches, age) => {
        const basalMetabolicRate = (66 + (6.2*pounds) + (12.7 * inches) - (6.76 * age))
        const totalPounds = (6.2*pounds)
        const totalInches = (12.7*inches)
        const totalAge = (6.76*age)
        // console.log(totalPounds, totalInches, totalAge)
        console.log(basalMetabolicRate)
    }

    render() { 
        return ( 
        <div>
            {/* what do we need? 
                age, 
                sex, 
                weight, 
                bf?  
            */}
        <img src={Logo}/>
        <input type="number" />
        <input type="" />
        <input type="number" />
        <input type="number" />
            {this.getBasalMetabolicRate()}
        </div> 
        );
    }
}
 