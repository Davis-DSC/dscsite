import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const Styles = styled.div`
  padding-top: 2rem;
  padding-bottom: 1rem;
`;

const Title = styled.h1`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 5rem;
    color: #000;


.grade{

  color: #3846C6;

}


 `;

const Himg = styled.img`
    width: 100%;
    height: auto;
    max-width: 722px;
 `;


const Subtitle = styled.h3`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 1.25rem;
    color: #000;
    padding-top: 2.75rem;
    padding-bottom: 2rem;
    letter-spacing: 0.02rem;
`;



 const SGrid = styled(Grid)`
    .righthead{
      justify-content: right;
      text-align: right;
      padding-left: .3rem;
     }

     .lefthead{
       padding-top:4.5rem;

       justify-content: left;
       align-content: left;

     }

    .headbutton{
      color: white;
      background: linear-gradient(99.56deg, #2E3BAE 3.37%, #BC5555 89.07%);
      font-family: IBM Plex Sans;
      font-style: normal;
      font-size: 1rem;
      font-weight: bold;
      letter-spacing: 0.1rem;

      &:hover {
        background-color: black;
      }

    }

  `;



 export const Header = () => (
<Styles>



        <SGrid container>



            <Grid className="lefthead" item sm={5} elevation={1}>
            <Title>Building a <span className="grade">Data Science</span> Community</Title>

            <Subtitle>We are a team of UC Davis students.</Subtitle>

            <Button className="headbutton" variant="contained" size="large" href="https://www.facebook.com/data.ucd/" target="_blank" rel="noopener noreferrer">
               Learn More
            </Button>

            </Grid>

            <Grid  className="righthead" item sm={7}>
              <Himg src='/header3.png'/>
            </Grid>

        </SGrid>


  </Styles>










 )
