import React from 'react'
import BuildingStrength from './Chart/BuildingStrength'
import BodyPercentageChart from './Chart/BodyPercentageChart'

export default class Chart extends React.Component {
  constructor() {
    super()
    this.state = {
      bodypercentagechart: true
    }
    this.handlePercentageChartChange = this.handlePercentageChartChange.bind(
      this
    )
  }

  changeCharts = () => {
    const { bodypercentagechart } = this.state
    if (bodypercentagechart === true) {
      return <BodyPercentageChart />
    } else return <BuildingStrength />
  }

  handlePercentageChartChange() {
    const newChart = this.state.bodypercentagechart === true ? false : true
    this.setState({ bodypercentagechart: newChart })
  }

  render() {
    return (
      <div onClick={this.handlePercentageChartChange}>
        {this.changeCharts()}
      </div>
    )
  }
}
