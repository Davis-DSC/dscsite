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
    font-size: 1rem;
    color: #000;
    padding-top: 2.75rem;
    padding-bottom: 1.5rem;
    letter-spacing: 0.02rem;
`;



 const SGrid = styled(Grid)`
    .righthead{
      justify-content: left;
      text-align: left;
      padding-top:5.5rem;

     }

     .lefthead{
       justify-content: right;
       align-content: right;
     }

    .headbutton{
      color: white;
      background: linear-gradient(99.56deg, #2E3BAE 3.37%, #BC5555 89.07%);
      font-family: IBM Plex Sans;
      font-style: normal;
      font-size: .8rem;
      font-weight: bold;
      letter-spacing: 0.1rem;

      &:hover {
        background-color: black;
      }

    }

  `;



 export const Header = () => (
<Styles>

    <Paper elevation={0}>


        <SGrid container>



            <Grid className="righthead" item sm={6} elevation={1}>
            <Title>Building a <span className="grade">Data Science</span> Community</Title>

            <Subtitle>We are a team of UC Davis students.</Subtitle>

            <Button className="headbutton" variant="contained" size="large" href="https://www.facebook.com/data.ucd/" target="_blank">
               Learn More >
            </Button>

            </Grid>

            <Grid  className="lefthead" item sm={6}>
              <Himg src='/header3.png'/>
            </Grid>

        </SGrid>

      </Paper>

  </Styles>










 )
