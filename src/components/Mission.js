import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const Styles = styled.div`
  padding-top: 4rem;
  padding-bottom: 2rem;
`;

const Title = styled.h1`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 5rem;
  padding-bottom: 0.5rem;

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
  font-weight: bold;
  font-size: 1.5rem;
  color: #000;
  padding-top: 2.75rem;
  padding-bottom: 1rem;
  letter-spacing: 0.02rem;

  .grade {
    color: #3846c6;
  }
`;

const SGrid = styled(Grid)`
  .righthead {
    justify-content: right;
    text-align: right;
    padding-left: 0.3rem;
  }

  .lefthead {
    padding-top: 4.5rem;

    justify-content: left;
    align-content: left;
  }

  .headbutton {
    color: white;
    background: linear-gradient(99.56deg, #2e3bae 3.37%, #bc5555 89.07%);
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

export const Mission = () => (
  <Styles>
    <Title>Our Mission</Title>
    <Subtitle>
      We are on a mission to foster a supportive community centered around
      developing technical skill sets, career building through industry guest
      speakers, and enhancing student body engagement.
    </Subtitle>
  </Styles>
);
