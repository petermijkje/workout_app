import React from 'react'
import { Component } from 'react'
import './Header.css'
import { Calendar, Activity, Home, Settings, LogOut, User } from 'react-feather'

class Header extends Component {
  state = {}
  render() {
    return (
      <div className="vertical-menu">
        <a href="/Home" className="active">
          Home <Home />
        </a>
        <a href="/Today">
          Today <Activity />
        </a>
        <a href="/thismonth">
          This Month <Calendar />
        </a>
        <a href="/profile">
          Profile <User />
        </a>
        <a href="settings">
          Settings <Settings />
        </a>
        <a href="/logout">
          Logout <LogOut />
        </a>
      </div>
    )
  }
}

export default Header
