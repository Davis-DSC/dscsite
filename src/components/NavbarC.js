import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    padding-top: 2rem;
    padding-bottom: 3rem;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.25rem;
   }

  a, .navbar-brand, .navbar-nav .nav-link {
     color: black;
     margin-right: 4.5rem;
     padding: 0 0.75rem;

    &:hover {
      color: grey;
    }
  }

  .navbar-brand{
    margin-right: 4.5rem;
     padding-bottom: 1rem;
  }

  .navbar-light .navbar-toggler{
    border-color: transparent;
    padding-bottom: 1rem;
  }

  .navbar-collapse{
    text-align: left;
    padding: 0.5rem 1rem;
  }

`;


export const NavbarC = () => (
  <Styles>

    <Navbar expand="lg">

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="mx-auto">

            <Navbar.Brand href="/">
            <img
                   src="/favicon.ico"
                   width="30"
                   height="30"
                   className="d-inline-block align-top"
                   alt="React Bootstrap logo"
                 />
            </Navbar.Brand>

            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="projects">Projects</Nav.Link>
            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link href="join" style = {{margin: "0"}} >Join</Nav.Link>
        </Nav>

      </Navbar.Collapse>


    </Navbar>

  </Styles >

)
