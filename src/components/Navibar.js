import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';



const Styles = styled.div`
  .navbar {
    background-color: #050505;
    border-bottom: 2px solid #fff;

  }
  a, .navbar-brand, .navbar-nav .nav-link {
    font-family: IBM Plex Sans;

    color: #fff;
    margin-left: 5.5rem;
    &:hover {
      color: white;
    }
  }
`;

export const Navibar = () => (
  <Styles>
    <Navbar expand="lg">
      <Container>
      <Navbar.Brand href="/">DSC</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto"></Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  </Styles >
)
