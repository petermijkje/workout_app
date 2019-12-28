import React, { Component } from 'react'

class Link extends Component {
  render() {
    return (
      <div>
        <div>
          <span>{this.props.link.squat} </span>
          <span>{this.props.link.deadlift} </span>
          <span>{this.props.link.benchpress} </span>
          <span>{this.props.link.shoulderpress} </span>
          <span>{this.props.link.frontsquat} </span>
          {/* <span>{this.props.link.frontsquat} </span> */}
        </div>
      </div>
    )
  }
}

export default Link
