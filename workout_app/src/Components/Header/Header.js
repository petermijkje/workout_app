import React from 'react'
import { Component } from 'react'
import './Header.css'
import { Calendar, Home, Settings, LogOut, User } from 'react-feather'

class Header extends Component {
  state = {
    name: 'Peter'
  }
  render() {
    const { name } = this.state
    return (
      <div className="vertical-menu">
        <div className="active">Hello, {name}</div>
        <a href="/Today">
          Home <Home />
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
