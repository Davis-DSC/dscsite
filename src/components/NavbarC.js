import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Button } from "react-bootstrap";
import styled from "styled-components";
import Container from "@mui/material/Container";

const Styles = styled.div`
  .navbar {
    padding-top: 2rem;
    padding-bottom: 3rem;
    padding-left: 0rem;
    padding-right: 0rem;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.25rem;
  }

  a,
  .navbar-nav .nav-link {
    color: black;
    margin-right: 4.5rem;

    &:hover {
      color: grey;
    }
  }

  .navbar-brand {
    margin-right: 4.5rem;
    font-style: normal;
    font-weight: bold;
    font-size: 1.4rem;
  }

  .navbar-light .navbar-toggler {
    border-color: transparent;
    padding-bottom: 1rem;
  }

  .navbar-collapse {
    text-align: left;
  }

  img {
    margin-bottom: 0.2rem;
    margin-right: 0.3rem;
  }
`;

export const NavbarC = () => (
  <Styles>
    <Container>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand href="/">
            <img
              src="/favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-bottom"
              alt="React Bootstrap logo"
            />{" "}
            DATA SCIENCE CLUB
          </Navbar.Brand>

          <Nav className="ml-auto align-bottom">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/event">Event</Nav.Link>
            <Nav.Link href="/join">Join</Nav.Link>
            <Nav.Link href="/pictures">Pictures</Nav.Link>
            <Nav.Link href="/alumni">Alumni</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </Styles>
);
