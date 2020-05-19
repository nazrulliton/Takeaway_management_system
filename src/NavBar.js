import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const NavBar = (props) => {
  return (
    <header>
      

    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"><img src="/logos/lucky_chen.png" alt="Logo" height="100px" width="100px"/>
</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="NavLi"  href="/">Home</Nav.Link>
          <Nav.Link className="NavLi" href="/inventory">Inventory</Nav.Link>
          <Nav.Link className="NavLi" href="/suppliers">Suppliers</Nav.Link>
          <Nav.Link className="NavLi" href="/dashboard">Stats</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </header>
  )
}

export default NavBar;
