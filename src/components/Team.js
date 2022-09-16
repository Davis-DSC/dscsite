import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const Styles = styled.div`
  padding-top: 5rem;
  padding-bottom: 10rem;
`;

//2rem -> 3rem
const Title = styled.h1`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  padding-bottom: 3rem;
  color: #3846c6;
`;

const Himg = styled.img`
  width: 100%;
  height: auto;
  max-width: 722px;
`;

//1.25 -> 1.5
const Subtitle = styled.h3`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
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
  padding: 0.5rem 0rem;
  color: #000;
`;

const SGrid = styled(Grid)``;

export const Team = () => (
  <Styles>
    <Title>Leadership of 2022-2023</Title>
    
    <Subtitle>Internal Affairs</Subtitle>

    <SGrid container>
      <Grid container spacing={7}>
        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_2021/vish.png" />
            <Name>Aditya Seth</Name>
            <Position>President</Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_2021/isa.png" />
            <Name>Cindy Chen</Name>
            <Position>Vice President</Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_2021/adi.png" />
            <Name>Olivia Yoon</Name>
            <Position>Vice President</Position>
          </Paper>
        </Grid>
        </SGrid>

        <Subtitle>Treasurer</Subtitle>

<SGrid container>
  <Grid container spacing={7}>
    <Grid item xs={3}>
      <Paper elevation={0}>
        <Himg src="/ddsc_2021/vish.png" />
        <Name>Vishnu Rangiah</Name>
        <Position>President</Position>
      </Paper>
    </Grid>

    <Grid item xs={3}>
      <Paper elevation={0}>
        <Himg src="/ddsc_2021/isa.png" />
        <Name>Isabelle Zuroske</Name>
        <Position>Treasurer</Position>
      </Paper>
    </Grid>
    </SGrid>


      <Subtitle>External Affairs</Subtitle>  
      <SGrid container>
        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_2021/nathan.png" />
            <Name>Nathan Chan</Name>
            <Position>Projects Lead</Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_2021/anto.png" />
            <Name>Antonio Pelayo Ramirez</Name>
            <Position>Education Director</Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_2021/sha.png" />
            <Name>Sharon Vien</Name>
            <Position>Social Media Director</Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_2021/sayl.png" />
            <Name>Sandra Lee</Name>
            <Position>Social Media Director</Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_2021/udir.png" />
            <Name>Udirno Chaudhuri</Name>
            <Position>Career & Development Director</Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_2021/shdra.png" />
            <Name>Shraddha Jhingan</Name>
            <Position>Career & Development Director</Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_2021/anch.png" />
            <Name>Anchal Lamba</Name>
            <Position>External Affairs</Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_2021/gau.png" />
            <Name>Gaurav Patanker</Name>
            <Position>External Affairs</Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_2021/ivan.png" />
            <Name>Ivan Yang</Name>
            <Position>External Affairs</Position>
          </Paper>
        </Grid>
      </Grid>
    </SGrid>
  </Styles>
);
