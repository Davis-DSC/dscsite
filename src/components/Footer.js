import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    padding-top: 1.5rem;
    padding-bottom: 1.75rem;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: .75rem;
    background-color: #313D67;
   }

  a, .navbar-nav .nav-link {
     color: ghostwhite;
     margin-right: 4.5rem;
     padding: 0 0.75rem;

    &:hover {
      color: grey;
    }
  }

`;


export const Footer = () => (
  <Styles>

    <Navbar expand="lg">
        <Nav className="mx-auto">
             <Nav.Link href="/" style = {{margin: "0"}} >© 2020 Davis Data Science Club. All rights reserved.</Nav.Link>
        </Nav>
    </Navbar>

  </Styles >

)
