import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const Styles = styled.div`
  padding-top: 15rem;
  padding-bottom: 4rem;
`;

const Title = styled.h1`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: left;
  color: #3846c6;
  padding-bottom: 1.5rem;
`;

const Himg = styled.img`
  width: 80%;
  height: auto;
  max-width: 722px;
  align-content: center;
`;

const Subpara = styled.h3`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.45rem;
  color: #000;
  padding-top: 0.75rem;
  padding-bottom: 5rem;
  letter-spacing: 0.03rem;
`;

const Subtitle = styled.h3`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-size: 3rem;
  font-weight: bold;
  color: #888888;
  padding-top: 2.5rem;
  padding-right: 0rem;
  letter-spacing: 0.02rem;
`;

const SGrid = styled(Grid)`
  .righthead {
    text-align: right;
    padding-bottom: 2rem;
  }

  .lefthead {
    justify-content: left;
    text-align: left;
    padding-bottom: 2rem;
  }

  .headbutton {
    color: white;
    background: linear-gradient(99.56deg, #001c84 3.37%, #bc5555 89.07%);
    font-family: IBM Plex Sans;
    font-style: normal;
    font-size: 0.9rem;
    font-weight: bold;
    letter-spacing: 0.1rem;

    &:hover {
      background-color: black;
    }
  }
`;

export const AboutH = () => (
  <Styles>
    <Title>Our Club</Title>

    <SGrid container>
      <Grid className="lefthead" item sm={6}>
        <Paper style={{ background: "#" }} elevation={0}>
          <Subtitle>Who We Are</Subtitle>
          <Subpara>
            {" "}
            We are a group of students that were brought together by our passion
            for Data Science and helping our community.
          </Subpara>
        </Paper>
      </Grid>

      <Grid className="righthead" item sm={6}>
        <Himg src="/header2.png" />
      </Grid>

      <Grid className="lefthead" item sm={6}>
        <Himg src="/header4.png" />
      </Grid>

      <Grid className="righthead" item sm={6}>
        <Paper style={{ background: "#" }} elevation={0}>
          <Subtitle>What We Do</Subtitle>
          <Subpara>
            {" "}
            Our club is centered around career building and developing Data
            Science skills. We host workshops to help students with R, Python,
            and other related technologies. We also invite industry
            professionals to share their inside look into the field of Data
            Science.
          </Subpara>
        </Paper>
      </Grid>
    </SGrid>
  </Styles>
);
