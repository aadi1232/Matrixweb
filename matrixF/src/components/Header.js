import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink for active class handling
import './Header.css'; // Custom CSS file for styling

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="navbar-brand-custom">
            <span className="site-name">Matrix</span>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/about" className="nav-item-custom" activeClassName="active">
              About
            </NavLink>
            <NavLink to="/resources" className="nav-item-custom" activeClassName="active">
              Resources
            </NavLink>
            <NavLink to="/assignments" className="nav-item-custom" activeClassName="active">
              Assignments & Scores
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
