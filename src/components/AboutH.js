import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const Styles = styled.div`
    padding-bottom: 3.5rem;
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
    width: 80%;
    height: auto;
    max-width: 722px;
    padding-top: 1.75rem;

 `;


 const Subpara = styled.h3`
     font-family: IBM Plex Sans;
     font-style: normal;
     font-size: 1.75rem;
     color: #000;
     padding-top: .75rem;
     padding-right: 3.5rem;
     padding-left: 3.5rem;
     padding-bottom: 5rem;
     letter-spacing: 0.03rem;
 `;

const Subtitle = styled.h3`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-size: 2.25rem;
    font-weight:bold;
    color: #000;
    padding-top: 2.5rem;
    padding-right: 2rem;
    padding-left: 2rem;
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



 export const AboutH = () => (

<Styles>
    <Container>

    <Paper elevation={0}>


         <SGrid container>

             <Grid className="righthead" item sm={6}>

            <Paper style = {{background: "#FCFCFC"}} elevation={1}>

             <Subtitle>About</Subtitle>

             <Subpara> We are a passionate community of students
             across many disciplines interested in Data Science.
              We connect UC Davis to industry professionals and
              researchers through our project groups and events.
             </Subpara>

              </Paper>

             </Grid>


            <Grid className="righthead" item sm={6}>
              <Himg src='/header2.png'/>
            </Grid>



        </SGrid>

      </Paper>

      </Container>
  </Styles>










 )
