import React, { Component } from 'react' 

class StatisticsForCharts extends Component {
    state = {  

    }
    showResults = () => {
        const data = [
          { name: 'Legs', value: 400 }, //33.33%
          { name: 'Chest', value: 300 }, //25%
          { name: 'Shoulders', value: 300 }, //25%
          { name: 'Abs', value: 200 }, //16.67
        ];
        const newData = Object.keys(data).map((item) =>
          <div >
          {data[item].name} - 
           {Math.round(data[item].value * 100 / 1200)}%
          </div>
        )
        return newData
      }
    render() { 
        return (
            <div>
                Here are your results
                {this.showResults()}
            </div>
          );
    }
}
 
export default StatisticsForCharts;



