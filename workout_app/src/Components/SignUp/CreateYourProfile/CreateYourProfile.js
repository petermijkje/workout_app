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

    getTotalDailyEnergyExpenditure = (bmr, activity) => {
        const sedentary = 1.2
        const lightlyActive = 1.375
        const moderatelyActive = 1.55
        const veryActive = 1.725
        const extraActive = 1.9
        console.log(bmr*activity)
    }

    render() { 
        return ( 
        <div>
            {this.getBasalMetabolicRate(200, 66, 28)}
            {this.getTotalDailyEnergyExpenditure(1954, 1.5)}
        </div> 
        );
    }
}
 