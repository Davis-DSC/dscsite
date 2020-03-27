import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

const Title = styled.h1`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 3rem;
    text-align: center;


    color: #000;
`;



const Linkz = styled.a`
    color: #FFFFFF;
    font-weight: bold;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.46);
    &:hover {
      color: white;
    }
`;

const Styles = styled.div`
    color: #FFFFFF;
    font-weight: bold;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.46);
    &:hover {
      color: white;
    }
`;




export const Header = () => (
  <Styles>


  <Title>DATA SCIENCE CLUB</Title>




  </Styles >

)
