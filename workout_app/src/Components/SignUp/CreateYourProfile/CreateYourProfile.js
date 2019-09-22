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
            activity: ['sedentary', 'lightlyActive', 'moderatelyActive', 'veryActive', 'extraActive'],
        }
        this.handleChangeAge = this.handleChangeAge.bind(this)
        this.handleChangeHeight = this.handleChangeHeight.bind(this)
        this.handleChangeWeight = this.handleChangeWeight.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    getBasalMetabolicRateMale = (weight, height, years) => {
        //Men BMR = 66 + ( 6.2 × weight in pounds ) + ( 12.7 × height in inches ) – ( 6.76 × age in years )
         const { pounds, inches, age } = this.state
         let basalMetabolicRate = 0
         basalMetabolicRate += (66 + (6.2 * pounds) + (12.7 * inches) - (6.76 * age))
        return basalMetabolicRate
    }

    getBasalMetabolicRateWoman = (weight, height, years) => {
        //Women BMR = 655.1 + ( 4.35 × weight in pounds ) + ( 4.7 × height in inches ) - ( 4.7 × age in years ) 
        const { pounds, inches, age } = this.state
        let basalMetabolicRate = 0
        basalMetabolicRate += (655.1 + (4.35 * pounds) + (4.7 * inches) - (4.7 * age))
        return basalMetabolicRate
    }

    handleToggleClick() {
        this.setState(state => ({
          male: !state.male
        }));
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
    const male = this.state.male
        if (male){
            return (
                <div>
                    <button onClick={this.handleToggleClick}>
                        MALE
                    </button>
                    <br />
                    Basal Metabolic Rate: <b>{this.getBasalMetabolicRateMale()}</b>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Age:
                        <input 
                            type="text" 
                            pattern="[0-9]*" 
                            value={this.state.age}
                            onChange={this.handleChangeAge} 
                        /><br />
                            Height (inches):
                        <input
                            type="text"
                            pattern="[0-9]*"
                            value={this.state.inches}
                            onChange={this.handleChangeHeight}
                        /><br />
                            Weight (pounds):
                        <input
                            type="text"
                            pattern="[0-9]*"
                            value={this.state.pounds}
                            onChange={this.handleChangeWeight}
                        />
                        </label><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            ) 
        } 
            else return (
                <div>                             
                    <button onClick={this.handleToggleClick}>
                        FEMALE                 
                    </button>
                    <br />
                    Basal Metabolic Rate: <b>{this.getBasalMetabolicRateWoman()}</b>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Age:
                        <input 
                            type="text" 
                            pattern="[0-9]*" 
                            value={this.state.age}
                            onChange={this.handleChangeAge} 
                        /><br />
                            Height (inches):
                        <input
                            type="text"
                            pattern="[0-9]*"
                            value={this.state.inches}
                            onChange={this.handleChangeHeight}
                        /><br />
                            Weight (pounds):
                        <input
                            type="text"
                            pattern="[0-9]*"
                            value={this.state.pounds}
                            onChange={this.handleChangeWeight}
                        />
                        </label><br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )
            return (
                <div>          
                </div>
        )
    }
}
