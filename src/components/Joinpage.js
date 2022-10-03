import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { FaAngleRight } from "react-icons/fa";

//Everything from Mission

const Styles = styled.div`
  padding-top: 5.5rem;
  padding-bottom: 4rem;
`;

//From Team
const Title = styled.h1`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  padding-bottom: 2rem;
  color: #3846c6;
  padding-top: 3rem;
`;

const Himg = styled.img`
  width: 100%;
  height: auto;
  max-width: 722px;
`;

const Description = styled.h3`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  color: #000;
  padding-top: 2.5rem;
  padding-bottom: 1rem;
  letter-spacing: 0.02rem;
  margin-bottom: 3rem;
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

export const Joinpage = () => (
  <Styles>
    <Title>How to join as an official member</Title>
    <Description>
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
    </Description>

    <Title>How to become an officer</Title>
    <Description>
      We open recruitment application every spring quarter. We will announce
      open positions and application process in our social media, please keep an
      eye out!
    </Description>

    <Title>Frequently asked questions</Title>
    <Description>
      <FaAngleRight /> Do I need experience to apply to be an officer? {"\n"}
      We are open to all majors, years, and experience levels, so do not
      hesitate to apply! Yet, for Technical Team officer, programming and
      statistical knowledge is preferred.
    </Description>
  </Styles>
);

/* const data = [
{
  question: 'Do I need experience to join as an officer?',
  answer: 
  'We are open to all majors, years, and experience levels, so do not hesitate to apply! Yet, for Technical Team officer, programming and statistical knowledge is preferred',
}

]*/
