import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from 'react-bootstrap';

export function MainMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">Home</Link>     
          <Link className="nav-link" to="/paises/">Paises</Link>        
          <Link className="nav-link" to="/about/">About</Link>        
        </Nav>
        <Button variant="outline-success">Login</Button>
      </Navbar.Collapse>
    </Navbar>   
  );
}

export default MainMenu;