import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    padding-top: 1.5rem;
    padding-bottom: 1.75rem;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.15rem;
    background-color: #313D67;
   }

  a, .navbar-nav .nav-link {
     color: ghostwhite;


    &:hover {
      color: grey;
    }
  }

  .navbar-brand{
    font-weight: bold;
    font-size: 1.5rem;
    color: ghostwhite;

    &:hover {
      color: ghostwhite;
    }

  }

  img{
    margin-bottom: .2rem;
    margin-right:.2rem;

  }

  .terms {
    color: grey;
  }

  .Title{
    font-weight: bold;
    font-size: 1.35rem;
    &:hover {
      color: ghostwhite;
    }


  }



`;

const SGrid = styled(Grid)`
   padding-bottom: 3rem;
   padding-top: 1rem;
   text-align: left;
justify-content:  ;eft;

 `;





export const Footer = () => (
  <Styles>

    <Navbar expand="lg">
    <Container>
        <SGrid container>
            <Grid item sm={6} elevation={0}>
            <Navbar.Brand  href="/">
                <img
                       src="/favicon6.png"
                       width="30"
                       height="30"
                       className="d-inline-block align-bottom"
                       alt="React Bootstrap logo"
                     /> {' '} DATA SCIENCE CLUB
            </Navbar.Brand>
            </Grid>

            <Grid   item sm={2}>
                  <Nav.Link className="Title" href="/" style = {{margin: "0"}} >General</Nav.Link>
                  <Nav.Link href="/about" style = {{margin: "0"}} >About</Nav.Link>
                  <Nav.Link href="https://www.facebook.com/data.ucd/" target="_blank" rel="noopener noreferrer" style = {{margin: "0"}} >Events</Nav.Link>
                  <Nav.Link href="https://team344737.typeform.com/to/nTDYl2" target="_blank" rel="noopener noreferrer" style = {{margin: "0"}} >Join</Nav.Link>
                  <Nav.Link href="/pictures" style = {{margin: "0"}} >Pictures</Nav.Link>
                  <Nav.Link href="/alumni" style = {{margin: "0"}} >Alumni</Nav.Link>
            </Grid>

            <Grid   item sm={2}>
                  <Nav.Link className="Title" href="/" style = {{margin: "0"}} >Social Media</Nav.Link>
                  <Nav.Link href="https://www.facebook.com/data.ucd/" target="_blank" rel="noopener noreferrer" style = {{margin: "0"}} >Facebook</Nav.Link>
                  <Nav.Link href="https://www.instagram.com/data.ucd/" target="_blank" rel="noopener noreferrer" style = {{margin: "0"}} >Instagram</Nav.Link>
                  <Nav.Link href="https://www.linkedin.com/company/davisdsc" target="_blank" rel="noopener noreferrer" style = {{margin: "0"}} >Linkedin</Nav.Link>
                  <Nav.Link href="https://github.com/Davis-Data-Science-Club/" target="_blank" rel="noopener noreferrer" style = {{margin: "0"}} >Github</Nav.Link>
                  <Nav.Link href="https://discord.com/invite/TvEc7ca" target="_blank" rel="noopener noreferrer" style = {{margin: "0"}} >Discord</Nav.Link>
            </Grid>

            <Grid   item sm={2}>
                  <Nav.Link className="Title" href="/" style = {{margin: "0"}} >Contact</Nav.Link>
                  <Nav.Link href="mailto:team@davisdsc.com?" target="_blank" rel="noopener noreferrer" style = {{margin: "0"}} >team@davisdsc.com</Nav.Link>
            </Grid>
        </SGrid>

        <Nav.Link href="/" style = {{margin: "0"}} className="terms">© 2020 Davis Data Science Club. All rights reserved.</Nav.Link>



        </Container>
    </Navbar>

  </Styles >

)
