import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color:  ;
    border-bottom: 2px solid #fff;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    font-family:  ;
    color: ;
    margin-left: 5.5rem;
    &:hover {
      color:  ;
    }
  }
`;

export const NavbarC = () => (
  <Styles>

  <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="/">DSC</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="join">Apply</Nav.Link>
          <Nav.Link href="team">Team</Nav.Link>
      </Nav>
    </Navbar.Collapse>
      </Container>
  </Navbar>

  </Styles >

)
