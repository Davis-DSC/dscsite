import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
   }

  a, .navbar-brand, .navbar-nav .nav-link {
    font-family:  ;
    color: ;

    margin-left: 5.5rem;

    &:hover {
      color: ;
    }
  }

  .navbar-brand{
    margin-left:0;
    margin-right:0;

  }

  .navbar-light .navbar-toggler{
    border-color: transparent;
  }

  .navbar-collapse{
    text-align: end;
    padding-right: 1rem;


  }




`;




export const NavbarC = () => (
  <Styles>

    <Navbar expand="lg">


      <Navbar.Brand href="/">
      <img
             src="/favicon.ico"
             width="30"
             height="30"
             className="d-inline-block align-top"
             alt="React Bootstrap logo"
           />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="mr-auto">
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="projects">Projects</Nav.Link>
            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link className="linkz" href="join">Join</Nav.Link>
        </Nav>

      </Navbar.Collapse>


    </Navbar>

  </Styles >

)
