
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
          <Link to='./'> <img className='apple' src={require('./images/apple2.png')}/></Link>
          </Navbar.Brand>
        </Navbar.Header>
        <p className='top'>Don't Worry !!</p>
        <p className='Utop'>We Are Here to Help</p>
        <Nav pullRight>
          {/* <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem> */}
          <NavDropdown  title="More Information" id="basic-nav-dropdown">
            <Link to='./About'><MenuItem >About Me</MenuItem></Link>
            <Link to='./Testimonials'><MenuItem >Testimonals</MenuItem></Link>
            <Link to='./How'><MenuItem >How Will It Work</MenuItem></Link>
            {/* <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem> */}
          </NavDropdown>
        </Nav>
      </Navbar>;
</div>
    )
  }
  }


export default CustomizedNavbar
