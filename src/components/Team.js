import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { FaLinkedin } from 'react-icons/fa';



const Styles = styled.div`
  padding-top: 5rem;
  padding-bottom: 10rem;
`;

//2rem -> 3rem -> 2.5
const Title = styled.h1`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
  padding-bottom: 3rem;
  color: #3846c6;
`;

const Himg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  @media screen and (max-width: 48rem) {
    width: 120px;
    height: 120px;
  }
`;


// const PastOfficersImg = styled.img`
//   width: 250px;
//   height: 250px;
//   object-fit: cover;
//   border-radius: 50%;
//   @media screen and (max-width: 48rem) {
//     width: 120px;
//     height: 120px;
//   }
// `;

// 25% vs 75%

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

// const Position = styled.h3`
//   font-family: IBM Plex Sans;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 1rem;
//   padding: 0.5rem 0rem;
//   color: #000;
// `;

const SGrid = styled(Grid)``;

// const LinkedInIcon = styled.a`
//   color: #0e76a8;
//   font-size: 1.5rem;
//   margin-left: 10px;
//   &:hover {
//     color: #0077b5;
//   }
// `;

const PastOfficersImg = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  @media screen and (max-width: 48rem) {
    width: 120px;
    height: 120px;
  }
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Position = styled.div`
  font-size: 1rem;
  color: grey;
`;

const LinkedInIcon = styled.a`
  color: #0e76a8;
  font-size: 1.5rem;
  margin-left: 10px;
  padding-bottom: 0.4rem;
  &:hover {
    color: #0077b5;
  }
`;

const OfficerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20px;
  flex: 1 1 calc(25% - 40px); /* Flex-grow, flex-shrink, flex-basis */
  box-sizing: border-box;
`;

const OfficersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Officer = ({ imageUrl, name, position, position2, linkedinUrl }) => (
  <OfficerContainer>
    <PastOfficersImg src={imageUrl} alt={name} />
    <NameContainer>
      {name}
      <LinkedInIcon href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </LinkedInIcon>
    </NameContainer>
    <Position>{position}</Position>
    <Position>{position2}</Position>
  </OfficerContainer>
);

// export default Officer;


export const Team = () => (
  <Styles>

  <Title>Past Officers</Title>
  <OfficersGrid>
    <Officer 
      imageUrl="/ddsc_23-24/a_seth_cropped_v3.jpg" 
      name="Aditya Seth" 
      position="President (2022-2024)"
      position2="Technical Team (2021-2022)"
      linkedinUrl="https://www.linkedin.com/in/aditya-seth-b93a561a0/"
    />
    <Officer 
      imageUrl="/ddsc_22-23/c_chen.jpeg" 
      name="Cindy Chen" 
      position="Vice President (2022-2024)" 
      position2="Social Media (2021-2022)" 
      linkedinUrl="https://www.linkedin.com/in/cindy-chen-141354223/"
    />
    <Officer 
      imageUrl="" 
      name="Malia Pandes" 
      position="Career & Development (2023-2024)" 
      linkedinUrl=""
    />
    <Officer 
      imageUrl="" 
      name="Kotoha Togami" 
      position="Social Media (2023-2024)" 
      linkedinUrl=""
    />
  </OfficersGrid>
  <OfficersGrid>
    <Officer 
      imageUrl="" 
      name="Claire Hsieh" 
      position1="Social Media (2023-2024)" 
      linkedinUrl=""
    />
    <Officer 
      imageUrl="" 
      name="Nisha Thiagaraj" 
      position="Education Lead (2023-2024)"
      linkedinUrl=""
    />
    <Officer 
      imageUrl="" 
      name="Malia Pandes" 
      position="Career & Development (2023-2024)" 
      linkedinUrl=""
    />
    <Officer 
      imageUrl="" 
      name="Kotoha Togami" 
      position="Social Media (2023-2024)" 
      linkedinUrl=""
    />
  </OfficersGrid>



    
    {/* <SGrid container>
      <Grid container spacing={7}>
        <Grid item xs={3}>
          <Paper elevation={0}>
            <PastOfficersImg src="/ddsc_23-24/a_seth_cropped_v2.jpg" />
            <Name>Aditya Seth
              <LinkedInIcon href={"https://www.linkedin.com/in/aditya-seth-b93a561a0/"} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </LinkedInIcon>
            </Name>
            <Position>President : 2022-2024</Position>
          </Paper>
        </Grid>
      </Grid>
    </SGrid> */}

    <Title>Leadership of 2022-2023</Title>

    <Subtitle>Internal Affairs</Subtitle>

    <SGrid container>
      <Grid container spacing={7}>
        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/a_seth.png" />
            <Name>Aditya Seth</Name>
            <Position>President & Technical Team Director</Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/c_chen.jpeg" />
            <Name>Cindy Chen</Name>
            <Position>Vice President & Social Media Director</Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/o_yoon.jpeg" />
            <Name>Olivia Yoon</Name>
            <Position>Vice President</Position>
          </Paper>
        </Grid>
      </Grid>
    </SGrid>

    <Subtitle>Treasurer</Subtitle>

    <SGrid container>
      <Grid container spacing={7}>
        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/v_shome.jpeg" />
            <Name>Vivek Shome</Name>
            <Position></Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/l_chang.png" />
            <Name>Lucas Chang</Name>
            <Position></Position>
          </Paper>
        </Grid>
      </Grid>
    </SGrid>

    <Subtitle>External Affairs</Subtitle>
    <SGrid container>
      <Grid container spacing={7}>
        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/o_gonzalez.png" />
            <Name>Omar Mora-Gonzalez</Name>
            <Position></Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/a_lobo.jpeg" />
            <Name>Aatish Lobo</Name>
            <Position></Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/k_arukala.jpeg" />
            <Name>Krithin Arukala</Name>
            <Position></Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/k_guanzon.jpeg" />
            <Name>Kyle Guanzon</Name>
            <Position></Position>
          </Paper>
        </Grid>
      </Grid>
    </SGrid>

    <Subtitle>Career & Development</Subtitle>
    <SGrid container>
      <Grid container spacing={7}>
        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/s_jhingan.jpeg" />
            <Name>Shraddha Jhingan</Name>
            <Position>Career & Development Director</Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/a_rajpal.jpeg" />
            <Name>Arya Julka Rajpal</Name>
            <Position></Position>
          </Paper>
        </Grid>
      </Grid>
    </SGrid>

    <Subtitle>Social Media</Subtitle>
    <SGrid container>
      <Grid container spacing={7}>
        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/r_siddique.jpeg" />
            <Name>Ruqayyah Siddique</Name>
            <Position>Social Media Director</Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/c_hsieh.png" />
            <Name>Claire Hsieh</Name>
            <Position></Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/s_monga.jpeg" />
            <Name>Smarpan (Summer) Monga</Name>
            <Position></Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/a_zhang.jpeg" />
            <Name>Amy Zhang</Name>
            <Position></Position>
          </Paper>
        </Grid>
      </Grid>
    </SGrid>

    <Subtitle>Technical Team</Subtitle>
    <SGrid container>
      <Grid container spacing={7}>
        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/s_vinnakota.jpeg" />
            <Name>Siddarth Vinnakota</Name>
            <Position>Technical Team Director</Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/n_liu.jpeg" />
            <Name>Nathan Liu</Name>
            <Position></Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/n_kaluvai.jpeg" />
            <Name>Nirmal Kaluvai</Name>
            <Position></Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/d_wang.jpeg" />
            <Name>Ru Han (Dave) Wang</Name>
            <Position></Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/a_travers.jpeg" />
            <Name>Aurora Travers</Name>
            <Position></Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/j_sheth.jpeg" />
            <Name>Jenisa Sheth</Name>
            <Position></Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/l_barrett.jpeg" />
            <Name>Lukas Barrett</Name>
            <Position></Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/j_choi.png" />
            <Name>Joshua choi</Name>
            <Position></Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/v_huang.jpg" />
            <Name>Vincent huang</Name>
            <Position></Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/a_wu.jpeg" />
            <Name>Wun-Syuan (Allie) Wu</Name>
            <Position></Position>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={0}>
            <Himg src="/ddsc_22-23/j_mema.jpeg" />
            <Name>John Mema</Name>
            <Position></Position>
          </Paper>
        </Grid>
      </Grid>
    </SGrid>
  </Styles>
);
