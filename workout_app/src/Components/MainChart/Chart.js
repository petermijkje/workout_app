import React from 'react'
import BuildingStrength from './Chart/BuildingStrength'
import BodyPercentageChart from './Chart/BodyPercentageChart'
import './chart.css'

export default class Chart extends React.Component {
  constructor() {
    super()
    this.state = {
      bodypercentagechart: false
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
      <div
        onClick={this.handlePercentageChartChange}
        className="charts__container"
      >
        <BodyPercentageChart />
        <BuildingStrength />
      </div>
    )
  }
}
