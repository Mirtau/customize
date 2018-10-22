
import React, {Component} from 'react'
import './Navbar.css'
import { Navbar, NavbarBrand, NavbarHeader, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'



class CustomizedNavbar extends Component {

  render() {
    return(
      <div className='header'>
        <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
           <img src={require('./images/apple2.png')}/>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {/* <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem> */}
          <NavDropdown eventKey={3} title="More Information" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>About Me</MenuItem>
            <MenuItem eventKey={3.2}>Testimonals</MenuItem>
            <MenuItem eventKey={3.3}>How Will It Work</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>;
</div>
    )
  }
  }


export default CustomizedNavbar
