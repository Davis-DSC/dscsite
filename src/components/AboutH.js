import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const Styles = styled.div`
    padding: 4rem 0rem;
`;


const Title = styled.h1`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: left;
    color: #3846C6;
    padding-bottom: 1.5rem;

`;

const Himg = styled.img`
    width: 80%;
    height: auto;
    max-width: 722px;
    align-content:center;

 `;


 const Subpara = styled.h3`
     font-family: IBM Plex Sans;
     font-style: normal;
     font-weight: normal;
     font-size: 1.45rem;
     color: #000;
     padding-top: .75rem;
     padding-bottom: 5rem;
     letter-spacing: 0.03rem;
 `;

const Subtitle = styled.h3`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-size: 3rem;
    font-weight:bold;
    color: #888888;
    padding-top: 2.5rem;
    padding-right: 0rem;
    letter-spacing: 0.02rem;
`;

 const SGrid = styled(Grid)`
    .righthead{
       text-align: right;
    }

    .lefthead{
      justify-content: left;
      text-align: left;
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

    <Paper elevation={0}>

    <Title>Our Club</Title>

         <SGrid container>

             <Grid className="lefthead" item sm={6}>
            <Paper style = {{background: "#"}} elevation={0}>
             <Subtitle>Who We Are</Subtitle>
             <Subpara> We are a small group of students
             that are drawn together by our passion for Data Science and helping our community.
             </Subpara>
              </Paper>
             </Grid>


            <Grid className="righthead" item sm={6}>
              <Himg src='/header2.png'/>
            </Grid>

            <Grid className="lefthead" item sm={6}>
              <Himg src='/header4.png'/>
            </Grid>

            <Grid className="righthead" item sm={6}>
           <Paper style = {{background: "#"}} elevation={0}>
            <Subtitle>What We Do</Subtitle>
            <Subpara> Our club is centered around events that focus on career building and developing Data Science skills.
            We host workshops to help students with R, Python, and other technologies. We invite industry professionals to share their inside look into the field of Data Science.
             </Subpara>
             </Paper>
            </Grid>







        </SGrid>

      </Paper>

   </Styles>










 )
