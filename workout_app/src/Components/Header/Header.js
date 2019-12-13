import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
              <Nav className="justify-content-end" activeKey="/home">
                  <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2" href="/Today" >Today</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2" href="/month" >This Month</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1" href="/profile" >Profile</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2" href="/Settings" >Settings</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2" href="/Logout" >Logout</Nav.Link>
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