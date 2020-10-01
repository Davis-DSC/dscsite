import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const Styles = styled.div`
  padding-top: 5rem;
  padding-bottom: 10rem;
`;

const Title = styled.h1`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    padding-bottom: 3rem;
    color: #3846C6;
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
    padding-bottom: 1.5rem;
    letter-spacing: 0.02rem;
`;

const Name = styled.h1`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.35rem;
    padding-top: 1rem;
    color: #000;
 `;

const Position = styled.h3`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    padding: .5rem 0rem;
    color: #000;
`;



 const SGrid = styled(Grid)`


  `;



 export const Team = () => (
<Styles>


      <Title>Leadership</Title>

      <SGrid container>



      <Grid container spacing={7}>

          <Grid item xs={3}>
            <Paper elevation={0}>
                <Himg src='/vish.png'/>
                <Name>Vishnu Rangiah</Name>
                <Position>President</Position>
            </Paper>
          </Grid>


          <Grid item xs={3}>
            <Paper elevation={0}>
                <Himg src='/isa.png'/>
                <Name>Isabelle Zuroske</Name>
                <Position>Treasurer</Position>
            </Paper>
          </Grid>


          <Grid item xs={3}>
            <Paper elevation={0}>
                <Himg src='/kid.png'/>
                <Name>Kideok Kwon</Name>
                <Position>Career & Development</Position>
            </Paper>
          </Grid>


          <Grid item xs={3}>
            <Paper elevation={0}>
                <Himg src='/adi.png'/>
                <Name>Aditya Kallepalli</Name>
                <Position>Projects</Position>
            </Paper>
          </Grid>


          <Grid item xs={3}>
            <Paper elevation={0}>
                <Himg src='/pat.png'/>
                <Name>Patrick Soong</Name>
                <Position>Career & Development</Position>
            </Paper>
          </Grid>

    </Grid>

        </SGrid>


  </Styles>










 )
