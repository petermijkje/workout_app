import React, { Component } from 'react'
import { Button } from 'reactstrap'
import './twelveweeks.css'
import Day from './PlanComponents/Day.js'
import Reps from './PlanComponents/Reps.js'

class TwelveWeeks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      days: [
        // play data
        { id: 1, day: 'Day 1', workoutDay: 'chest' },
        { id: 2, day: 'Day 2', workoutDay: 'shoulders' },
        { id: 3, day: 'Day 3', workoutDay: 'quads' },
        { id: 4, day: 'Day 4', workoutDay: 'biceps' },
        { id: 5, day: 'Day 5', workoutDay: 'triceps' },
        { id: 6, day: 'Day 6', workoutDay: 'lower back' },
        { id: 7, day: 'Day 7', workoutDay: 'hamstrings' },
        { id: 8, day: 'Day 8', workoutDay: 'chest' },
        { id: 9, day: 'Day 9', workoutDay: 'shoulders' },
        { id: 10, day: 'Day 10', workoutDay: 'quads' },
        { id: 11, day: 'Day 11', workoutDay: 'biceps' },
        { id: 12, day: 'Day 12', workoutDay: 'triceps' },
        { id: 13, day: 'Day 13', workoutDay: 'lower back' },
        { id: 14, day: 'Day 14', workoutDay: 'hamstrings' },
        { id: 15, day: 'Day 15', workoutDay: 'chest' },
        { id: 16, day: 'Day 16', workoutDay: 'shoulders' },
        { id: 17, day: 'Day 17', workoutDay: 'quads' },
        { id: 18, day: 'Day 18', workoutDay: 'biceps' },
        { id: 19, day: 'Day 19', workoutDay: 'triceps' },
        { id: 20, day: 'Day 20', workoutDay: 'lower back' },
        { id: 21, day: 'Day 21', workoutDay: 'hamstrings' },
        { id: 22, day: 'Day 22', workoutDay: 'chest' },
        { id: 23, day: 'Day 23', workoutDay: 'shoulders' },
        { id: 24, day: 'Day 24', workoutDay: 'quads' },
        { id: 25, day: 'Day 25', workoutDay: 'biceps' },
        { id: 26, day: 'Day 26', workoutDay: 'triceps' },
        { id: 27, day: 'Day 27', workoutDay: 'lower back' },
        { id: 28, day: 'Day 28', workoutDay: 'hamstrings' }
      ]
    }
  }

  // makes the plan with exercises
  createPlan = () => {
    const { days } = this.state
    const listDays = Object.keys(days).map(day => (
      <div key={days[day].id}>
        <div className="calendar__day__div">
          <Day workoutDay={days[day].workoutDay} />
          <Reps />
          <Day workoutDay={days[day].workoutDay} />
          <Reps />
          <Day workoutDay={days[day].workoutDay} />
          <Reps />
          <Day workoutDay={days[day].workoutDay} />
          <Reps />
          <Day workoutDay={days[day].workoutDay} />
          <Reps />
          <Day workoutDay={days[day].workoutDay} />
          <Reps />
        </div>
      </div>
    ))
    return listDays
  }
  // the fill calendar when a program hasnt been created and the
  fillCalendar = () => {
    const january = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31
    ]
    const february = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28
    ]
    const march = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
    const april = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
    const may = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31
    ]
    const june = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
    const july = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31
    ]
    const august = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31
    ]
    const september = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
    const october = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31
    ]
    const november = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30
    ]
    const december = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31
    ]
    if (new Date().getMonth() === 0) {
      const januaryFill = january.map(number => (
        <div className="calendar__empty__div">{number}</div>
      ))
      return januaryFill
    } else if (new Date().getMonth() === 1) {
      const februaryFill = february.map(number => (
        <div className="calendar__empty__div">{number}</div>
      ))
      return februaryFill
    } else if (new Date().getMonth() === 2) {
      const marchFill = march.map(number => (
        <div className="calendar__empty__div">{number}</div>
      ))
      return marchFill
    } else if (new Date().getMonth() === 3) {
      const aprilFill = april.map(number => (
        <div className="calendar__empty__div">{number}</div>
      ))
      return aprilFill
    } else if (new Date().getMonth() === 5) {
      const mayFill = may.map(number => (
        <div className="calendar__empty__div">{number}</div>
      ))
      return mayFill
    } else if (new Date().getMonth() === 6) {
      const juneFill = june.map(number => (
        <div className="calendar__empty__div">{number}</div>
      ))
      return juneFill
    } else if (new Date().getMonth() === 7) {
      const julyFill = july.map(number => (
        <div className="calendar__empty__div">{number}</div>
      ))
      return julyFill
    } else if (new Date().getMonth() === 8) {
      const augustFill = august.map(number => (
        <div className="calendar__empty__div">{number}</div>
      ))
      return augustFill
    } else if (new Date().getMonth() === 9) {
      const septemberFill = september.map(number => (
        <div className="calendar__empty__div">{number}</div>
      ))
      return septemberFill
    } else if (new Date().getMonth() === 10) {
      const octoberFill = october.map(number => (
        <div className="calendar__empty__div">{number}</div>
      ))
      return octoberFill
    } else if (new Date().getMonth() === 11) {
      const novemberFill = november.map(number => (
        <div className="calendar__empty__div">{number}</div>
      ))
      return novemberFill
    } else if (new Date().getMonth() === 1) {
      const decemberFill = december.map(number => (
        <div className="calendar__empty__div">{number}</div>
      ))
      return decemberFill
    }
  }

  render() {
    return (
      <div>
        <div className="month__and__year">January, 2020</div>
        <div className="twelve__Week__Div__Container">
          <li className="day__of__the_week">Monday</li>
          <li className="day__of__the_week">Tuesday</li>
          <li className="day__of__the_week">Wednesday</li>
          <li className="day__of__the_week">Thursday</li>
          <li className="day__of__the_week">Friday</li>
          <li className="day__of__the_week">Saturday</li>
          <li className="day__of__the_week">Sunday</li>
          {/* {this.createPlan()} */}
          {this.fillCalendar()}
        </div>
        <div className="save__or__reset">
          click here to save your workout
          <Button outline color="primary">
            Click Here to Save it
          </Button>
          Don't like it?
          <Button outline color="danger">
            Click Here to Reset it
          </Button>
        </div>
      </div>
    )
  }
}

export default TwelveWeeks
