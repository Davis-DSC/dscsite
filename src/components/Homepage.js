import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Infocard from './Infocard';

const Mainhead = styled.div`
    padding-top: 80px;
    padding-left: 90px;
    padding-right: 90px;
    border-bottom: 2px solid #fff;
`;

const Title = styled.h1`
    font-family: IBM plex sans;
    font-style: normal;
    font-weight: bold;
    font-size: 3.5rem;
    line-height: 5rem;
    text-align: left;
    color: #FFFFFF;
    text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.46);
`;

const TitleC = styled.h1`
    margin-top: -10px;
    font-family: IBM plex sans;
    font-style: normal;
    font-weight: bold;
    font-size: 3.5rem;
    line-height: 5rem;
    text-align: left;
    color: #FFFFFF;
    text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.46);
`;

const Comment = styled.p`
    font-family: IBM plex sans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 150%;
    padding-top: 80px;
    padding-bottom: 90px;

    text-align: right;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.46);
`;


const Linkz = styled.a`
    color: #FFFFFF;
    font-weight: bold;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.46);
    &:hover {
      color: white;
    }
`;

const Line = styled.div`
    position: absolute;
    width: 1250px;
    height: 0px;
    left: 101px;
    top: 552px;

    background: #FFFFFF;
    border: 2px solid #FFFFFF;
`;


export const Homepage = () => (
  <Container>
    <Mainhead>
          <Title>Welcome to Davis</Title>
          <TitleC>Data Science Club</TitleC>
          <Comment>We aim to help our community using Data Science.</Comment>

   </Mainhead>
   <Infocard name="About" section={["Our site is currently under construction stay connected with us on  ",
            <Linkz
              className="App-link"
              href="https://www.facebook.com/data.ucd/"
              target="_blank"
              rel="noopener noreferrer">
              Facebook.
            </Linkz>
  ]} />


  </Container>

)
