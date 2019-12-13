import React from 'react'
import BuildingStrength from './Chart/BuildingStrength'
import BodyPercentageChart from './Chart/BodyPercentageChart'

export default class Chart extends React.Component {
    constructor(){
        super()
        this.state = {
            bodypercentagechart: false,
        }
    }
    render (){
        const bodypercentagechart = this.state.bodypercentagechart
        if (bodypercentagechart){
        return <BuildingStrength />
        } else return <BodyPercentageChart />
    }
}