import React, { Component } from 'react';
import Logo from './logo.png'

export default class CreateYourProfile extends Component {
    constructor(props){
        super(props)
        this.state = { 
            age: '',
            sex: [],
            inches: '',
            pounds: '',
        }
        this.handleChangeAge = this.handleChangeAge.bind(this)
        this.handleChangeHeight = this.handleChangeHeight.bind(this)
        this.handleChangeWeight = this.handleChangeWeight.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

     getBasalMetabolicRate = (weight, height, years) => {
         const pounds = this.state.pounds
         const inches = this.state.inches
         const age = this.state.age
        const basalMetabolicRate = (66 + (6.2 * pounds) + (12.7 * inches) - (6.76 * age))
        const totalPounds = (6.2*pounds)
        const totalInches = (12.7*inches)
        const totalAge = (6.76*age)
        // console.log(totalPounds, totalInches, totalAge)
        return basalMetabolicRate
    }

    getTotalDailyEnergyExpenditure = (bmr, activity) => {
        const sedentary = 1.2
        const lightlyActive = 1.375
        const moderatelyActive = 1.55
        const veryActive = 1.725
        const extraActive = 1.9
        console.log(bmr*activity)
    }

    handleChangeAge(event){
        this.setState({age: event.target.value})
    }

    handleChangeHeight(event){
        this.setState({inches: event.target.value})
    }

    handleChangeWeight(event){
        this.setState({pounds: event.target.value})
    }

    handleSubmit(event) {
        alert(
            `current age: ` + this.state.age +
            `current height:` + this.state.inches +
            `current weight:` + this.state.pounds 
            )
    
        event.preventDefault()
    }

    render() { 
        return ( 
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Age:
                    <input 
                        type="text" 
                        pattern="[0-9]*" 
                        value={this.state.age}
                        onChange={this.handleChangeAge} 
                    />
                    Height (inches):
                    <input
                        type="text"
                        pattern="[0-9]*"
                        value={this.state.inches}
                        onChange={this.handleChangeHeight}
                    />
                    Weight (pounds):
                    <input
                        type="text"
                        pattern="[0-9]*"
                        value={this.state.pounds}
                        onChange={this.handleChangeWeight}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
                {this.getBasalMetabolicRate()}
        </div> 
        );
    }
}
 