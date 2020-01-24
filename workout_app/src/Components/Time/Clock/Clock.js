import React from 'react'
import './clock.css'

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hours: new Date().toLocaleString(),
      minutes: new Date().toLocaleString()
    }
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.intervalID)
  }
  tick() {
    this.setState({
      hours: new Date().getHours().toLocaleString(),
      minutes: new Date().getMinutes().toLocaleString()
    })
  }
  render() {
    const { hours, minutes } = this.state
    if (minutes < 10) {
      return `${hours}:0${minutes}`
    }
    return (
      <div className="app__clock">
        <p>Hello, User</p>
        {hours}:{minutes}
      </div>
    )
  }
}
