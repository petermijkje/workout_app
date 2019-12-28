import React from 'react'
import { Component } from 'react'
import { Nav } from 'react-bootstrap'
import './Header.css'
import TwelveWeeks from '../../Components/Plan/TwelveWeeks.js'
import { 
  Calendar,
  Activity,
  Home,
  Settings,
  LogOut,
  User
} from 'react-feather'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header__div">
              <Nav className="justify-content-end" activeKey="/home">
                  <Nav.Item>
                    <Nav.Link href="/home" >Home <Home/></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2" href="/Today" >Today <Activity /></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2" href="/month" component={TwelveWeeks}>This Month <Calendar /></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1" href="/profile" >Profile <User /></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2" href="/Settings" >Settings <Settings /></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2" href="/Logout" >Logout <LogOut /></Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
                  </Nav.Item>
                </Nav>
            </div>
         );
    }
}
 
export default Header;