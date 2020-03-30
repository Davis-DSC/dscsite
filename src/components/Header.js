import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const Styles = styled.div`
    padding-bottom: 4.5rem;
`;



const Title = styled.h1`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    text-align: center;
    color: #000;
`;

const Himg = styled.img`
    width: 100%;
    height: auto;
    max-width: 722px;
 `;


const Subtitle = styled.h3`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-size: 1.75rem;
    color: #000;
    padding-top: 3rem;
    padding-right: 4.5rem;
    padding-left: 4.5rem;
    padding-bottom: 2rem;
    letter-spacing: 0.02rem;
`;

 const SGrid = styled(Grid)`
    .righthead{
      justify-content: center;
      text-align: center;
     }

    .headbutton{
      color: white;
      background: linear-gradient(99.56deg, #001C84 3.37%, #BC5555 89.07%);;
      font-family: IBM Plex Sans;
      font-style: normal;
      font-size: .9rem;
      font-weight: bold;
      letter-spacing: 0.1rem;

      &:hover {
        background-color: black;
      }

    }

  `;



 export const Header = () => (
<Styles>
    <Container>

    <Paper elevation={0}>



        <Title> DATA SCIENCE CLUB </Title>

        <SGrid container>

            <Grid  className="righthead" item sm={6}>
              <Himg src='/header3.png'/>
            </Grid>

            <Grid className="righthead" item sm={6}>
            <Subtitle>UC Davis’s student
            organization dedicated to fostering
            a Data Science Community.</Subtitle>
            <Button className="headbutton" variant="contained" size="large" href="https://www.facebook.com/data.ucd/" target="_blank">
               Learn More
            </Button>
            </Grid>

        </SGrid>

      </Paper>

      </Container>
  </Styles>










 )
