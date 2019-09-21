import React, { Component } from 'react';
import Logo from './logo.png'

export default class CreateYourProfile extends Component {
    constructor(props){
        super(props)
        this.state = { 
            age: '',
            male: true,
            inches: '',
            pounds: '',
        }
        this.handleChangeAge = this.handleChangeAge.bind(this)
        this.handleChangeHeight = this.handleChangeHeight.bind(this)
        this.handleChangeWeight = this.handleChangeWeight.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    getBasalMetabolicRateMale = (weight, height, years) => {
         const {pounds, inches, age} = this.state
         //Men BMR = 66 + ( 6.2 × weight in pounds ) + ( 12.7 × height in inches ) – ( 6.76 × age in years )
         const basalMetabolicRate = (66 + (6.2 * pounds) + (12.7 * inches) - (6.76 * age))
        return basalMetabolicRate
    }

    getBasalMetabolicRateWoman = (weight, height, years) => {
        //Women BMR = 655.1 + ( 4.35 × weight in pounds ) + ( 4.7 × height in inches ) - ( 4.7 × age in years ) 
        const pounds = this.state.pounds
        const inches = this.state.inches
        const age = this.state.age
        const basalMetabolicRate = (655.1 + (4.35 * pounds) + (4.7 * inches) - (4.7 * age))

    }

    // getTotalDailyEnergyExpenditure = (bmr, activity) => {
    //     const sedentary = 1.2
    //     const lightlyActive = 1.375
    //     const moderatelyActive = 1.55
    //     const veryActive = 1.725
    //     const extraActive = 1.9
    //     console.log(bmr*activity)
    // }

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
    const male = this.state
        if (male){
            return (
                <div> 
                    {this.getBasalMetabolicRateMale()}
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
                </div>
            ) 
        } else return (
            <div> 
            {this.getBasalMetabolicRateMale()}
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
        </div>
        )
        return ( 
        <div>
        </div> 
        );
    }
}
 