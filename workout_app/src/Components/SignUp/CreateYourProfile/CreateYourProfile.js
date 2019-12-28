import React, { Component } from 'react'
import { FormGroup, Label, Input, Button } from 'reactstrap'

export default class CreateYourProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: '',
      male: true,
      inches: '',
      pounds: '',
      value: 'select',
      activity: 0,
      goal: ''
    }
    this.handleChangeAge = this.handleChangeAge.bind(this)
    this.handleChangeHeight = this.handleChangeHeight.bind(this)
    this.handleChangeWeight = this.handleChangeWeight.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleToggleClick = this.handleToggleClick.bind(this)
    this.handleChangeGoal = this.handleChangeGoal.bind(this)
  }
  // male and female harris benedict equation functions (original equation)
  getBasalMetabolicRateMale = () => {
    //Men BMR = 66 + ( 6.2 × weight in pounds ) + ( 12.7 × height in inches ) – ( 6.76 × age in years )
    const { pounds, inches, age } = this.state
    let basalMetabolicRate = 0
    basalMetabolicRate += 66 + 6.2 * pounds + 12.7 * inches - 6.76 * age
    return Math.round(basalMetabolicRate)
  }

  getBasalMetabolicRateWoman = () => {
    //Women BMR = 655.1 + ( 4.35 × weight in pounds ) + ( 4.7 × height in inches ) - ( 4.7 × age in years )
    const { pounds, inches, age } = this.state
    let basalMetabolicRate = 0
    basalMetabolicRate += 655.1 + 4.35 * pounds + 4.7 * inches - 4.7 * age
    return Math.round(basalMetabolicRate)
  }

  // handle changes functions
  handleToggleClick() {
    this.setState(state => ({
      male: !state.male
    }))
  }

  handleChangeAge(event) {
    this.setState({
      age: event.target.value
    })
  }

  handleChangeHeight(event) {
    this.setState({
      inches: event.target.value
    })
  }

  handleChangeWeight(event) {
    this.setState({
      pounds: event.target.value
    })
  }

  activityHandleChange(e) {
    this.setState({
      activity: e.target.value
    })
  }

  handleChangeGoal(event) {
    this.setState({
      goal: event.target.value
    })
  }

  handleSubmit(event) {
    alert(
      `current age: ` +
        this.state.age +
        `current height:` +
        this.state.inches +
        `current weight:` +
        this.state.pounds
    )
    event.preventDefault()
  }
  //toggles between male and female if you click button
  render() {
    const male = this.state.male
    if (male) {
      return (
        <div>
          <Button outline color="primary" onClick={this.handleToggleClick}>
            MALE
          </Button>
          <br />
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
              <Label for="exampleSelect">choose your activity type</Label>
              <Input
                type="select"
                name="select"
                id="exampleSelect"
                onChange={this.activityHandleChange.bind(this)}
                value={this.state.activity}
              >
                <option value="0">Select Your Activity</option>
                <option value="1.2">Sedentary</option>
                <option value="1.375">Light Active</option>
                <option value="1.55">Moderately Active</option>
                <option value="1.725">Very Active</option>
                <option value="1.9">Extra Active</option>
              </Input>
            </FormGroup>
          </form>
          <FormGroup>
            <Label for="exampleSelect">Choose your repetition type</Label>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              onChange={this.handleChangeGoal.bind(this)}
              value={this.state.goal}
            >
              <option>Power</option>
              <option>Strength</option>
              <option>Endurance</option>
            </Input>
          </FormGroup>
          Basal Metabolic Rate: <b>{this.getBasalMetabolicRateMale()}</b> TDEE:{' '}
          <b>
            {Math.round(this.getBasalMetabolicRateMale() * this.state.activity)}
          </b>
        </div>
      )
    } else
      return (
        <div>
          <Button
            style={{ backgroundColor: 'pink' }}
            outline
            color="secondary"
            onClick={this.handleToggleClick}
          >
            FEMALE
          </Button>
          <br />
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
              <Input
                type="select"
                name="select"
                id="exampleSelect"
                onChange={this.activityHandleChange.bind(this)}
                value={this.state.activity}
              >
                <option value="0">Select Your Activity</option>
                <option value="1.2">Sedentary</option>
                <option value="1.375">Light Active</option>
                <option value="1.55">Moderately Active</option>
                <option value="1.725">Very Active</option>
                <option value="1.9">Extra Active</option>
              </Input>
            </FormGroup>
          </form>
          <FormGroup>
            <Label for="exampleSelect">Choose your repetition type</Label>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              onChange={this.handleChangeGoal.bind(this)}
              value={this.state.goal}
            >
              <option>Power</option>
              <option>Strength</option>
              <option>Endurance</option>
            </Input>
          </FormGroup>
          Basal Metabolic Rate: <b>{this.getBasalMetabolicRateWoman()}</b> TDEE:{' '}
          <b>
            {Math.round(
              this.getBasalMetabolicRateWoman() * this.state.activity
            )}
          </b>
        </div>
      )
  }
}
