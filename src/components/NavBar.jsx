import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import './Navbar.css'
import AuthContext from '../context/Authcontext';




const NavBar = () => {
    const { isLoggedIn, logoutHandler } = useContext(AuthContext);
  return (
    <Navbar bg="light" expand="lg">
  <Navbar.Brand >Mail Box</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to='/'>Inbox</Nav.Link>
      <Nav.Link as={Link} to='/'>Sent</Nav.Link>
      <Nav.Link as={Link} to='/composemail' >Compose</Nav.Link>
      <NavDropdown title="Action" id="basic-nav-dropdown">
        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
        <NavDropdown.Item >Login</NavDropdown.Item>
        {/* <NavDropdown.Item >Something</NavDropdown.Item> */}
        
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavBar