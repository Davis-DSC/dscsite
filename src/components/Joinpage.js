import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const Styles = styled.div`
  padding-top: 5.5rem;
  padding-bottom: 4rem;
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
  padding-bottom: 1.5rem;
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

export const Join = () => (
  <Styles>
    <Title>How to join as an official member</Title>
    <Subtitle>
      Go to Davis Data Science Club group on UC Davis{" "}
      <a
        href="https://aggielife.ucdavis.edu/feeds?type=club&type_id=39365&tab=home"
        target="_blank"
        rel="noopener noreferrer"
        className="grade"
      >
        {" "}
        Aggie Life{" "}
      </a>{" "}
      website and click the "Join Group" button on the top right corner of Home
      page.
    </Subtitle>

    <Title>How to become an officer</Title>
    <Subtitle>
      We open recruitment application every spring quarter. We will announce
      open positions and application process in our social media, please keep an
      eye out!
    </Subtitle>
  </Styles>
);
