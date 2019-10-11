import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const arrayOfActivity = [
    {
      number: 1.2,
      activity: 'sedentary'    
    },
    {
      number: 1.375,
      activity: 'Light Active'    
    },
    {
      number: 1.55,
      activity: 'Moderately Active'    
    },
    {
      number: 1.725,
      activity: 'Very Active'    
    },
    {
      number: 1.9,
      activity: 'Extra Active'    
    },
  ];

export default class CreateYourProfile extends Component {
    constructor(props){
        super(props)
        this.state = { 
            age: '',
            male: true,
            inches: '',
            pounds: '',
            value: 'select',
            TDEE: 'select Activity'
        }
        this.handleChangeAge = this.handleChangeAge.bind(this)
        this.handleChangeHeight = this.handleChangeHeight.bind(this)
        this.handleChangeWeight = this.handleChangeWeight.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    getBasalMetabolicRateMale = () => {
        //Men BMR = 66 + ( 6.2 × weight in pounds ) + ( 12.7 × height in inches ) – ( 6.76 × age in years )
         const { pounds, inches, age } = this.state
         let basalMetabolicRate = 0
         basalMetabolicRate += (66 + (6.2 * pounds) + (12.7 * inches) - (6.76 * age))
         return Math.round(basalMetabolicRate)
    }

    getBasalMetabolicRateWoman = () => {
        //Women BMR = 655.1 + ( 4.35 × weight in pounds ) + ( 4.7 × height in inches ) - ( 4.7 × age in years ) 
        const { pounds, inches, age } = this.state
        let basalMetabolicRate = 0
        basalMetabolicRate += (655.1 + (4.35 * pounds) + (4.7 * inches) - (4.7 * age))
        return Math.round(basalMetabolicRate)
    }

    handleToggleClick() {
        this.setState(state => ({
          male: !state.male
        }));
      }

    getTotalDailyEnergyExpenditure = (bmr, activity) => {
        this.state.sedentary = 1.2
        console.log()
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
    let options = arrayOfActivity.map((data) =>
                <option onChange={this.change}
                    key={data.number}
                    value={data.number}
                >
                    {data.activity}
                </option>
            );
        if (male){
            return (
                <div>
                    <button onClick={this.handleToggleClick}>
                        MALE
                    </button>
                    <br />
                    Basal Metabolic Rate: <b>{this.getBasalMetabolicRateMale()}</b> TDEE: <b>{this.state.TDEE}</b>
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
                        <FormGroup>
                            <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="select" id="exampleSelect">
                            {options}
                            </Input>
                        </FormGroup>
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
                    Basal Metabolic Rate: <b>{this.getBasalMetabolicRateWoman()}</b> TDEE: <b>{this.state.TDEE}</b>
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
                        <FormGroup>
                            <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="select" id="exampleSelect">
                            {options}
                            </Input>
                        </FormGroup>
                    </form>
                </div>
            )
    }
}
