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
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #3846c6;
  text-align: center;
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
  text-align: center;
`;

const Name = styled.h1`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.35rem;
  padding-top: 1rem;
  color: #000;
`;

const OfficersImg = styled.img`
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
  transition: transform 0.3s ease; /* Add transition for smooth animation */
  &:hover {
    color: #0077b5;
    transform: scale(1.2); /* Increase size on hover */
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
    <OfficersImg src={imageUrl} alt={name} />
    <NameContainer>
      {name}
      {linkedinUrl && (
        <LinkedInIcon href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </LinkedInIcon>
      )}
    </NameContainer>
    <Position>{position}</Position>
    <Position>{position2}</Position>
  </OfficerContainer>
);

export const AlumniTeam = () => (
    <Styles>
    <Title>Past Officers</Title>

    <Subtitle>
    Meet the exceptional individuals who have served as officers in our organization. 
    These dedicated officers have not only contributed to our success during their tenure but continue to inspire us with their achievements beyond their roles.
    </Subtitle>

  <OfficersGrid>
    <Officer 
      imageUrl="/ddsc_23-24/a_seth_cropped_v3.jpg" 
      name="Aditya Seth" 
      position="President (2022-2024)"
      position2="Technical Team (2021-2022)"
      linkedinUrl="https://www.linkedin.com/in/aditya-seth-b93a561a0/"
    />
    <Officer 
      // imageUrl="/ddsc_23-24/cindy_ch.png" 
      // imageUrl="/ddsc_23-24/cindy_ch_v2.jpg"
      // imageUrl="/ddsc_23-24/cindy_ch_v3.jpg"
      imageUrl="/ddsc_23-24/cindy_ch_blurred.jpg"
      name="Cindy Chen" 
      position="Vice President (2022-2024)" 
      position2="Social Media (2021-2022)" 
      linkedinUrl="https://www.linkedin.com/in/cindy-chen-141354223/"
    />
    <Officer 
      imageUrl="/ddsc_23-24/malia_pandes.jpg" 
      name="Malia Pandes" 
      position="Career & Development (2023-2024)" 
      linkedinUrl="https://www.linkedin.com/in/malia-pandes/"
    />
    <Officer 
      imageUrl="/ddsc_23-24/kotoha_t.png" 
      name="Kotoha Togami" 
      position="Social Media (2023-2024)" 
      linkedinUrl="https://www.linkedin.com/in/kotoha-togami111/"
    />
    
  </OfficersGrid>
  <OfficersGrid>
    <Officer 
      imageUrl="/ddsc_23-24/claire_hsieh.png" 
      name="Claire Hsieh" 
      position="Social Media (2023-2024)" 
      linkedinUrl="https://www.linkedin.com/in/claire-hsieh-539456174/"
    />
    <Officer 
      imageUrl="/ddsc_23-24/nisha_th.png" 
      name="Nisha Thiagaraj" 
      position="Education Lead (2023-2024)"
      linkedinUrl="https://www.linkedin.com/in/nisha-thiagaraj/"
    />   
    <Officer 
    imageUrl="/ddsc_22-23/o_yoon.jpeg" 
    name="Olivia Yoon" 
    position="Vice President (2021-2023)"
    linkedinUrl="https://www.linkedin.com/in/olivia-yoon/"
  />
  <Officer 
    imageUrl="/ddsc_22-23/s_jhingan.jpeg" 
    name="Shraddha Jhingan" 
    position="Career & Development (2021-2023)"
    linkedinUrl="https://www.linkedin.com/in/shraddha-jhingan/"
  />
  </OfficersGrid>

  <OfficersGrid>
  <Officer 
      imageUrl="/ddsc_22-23/a_rajpal.jpeg" 
      name="Arya Julka Rajpal" 
      position="Career & Development (2022-2023)"
      linkedinUrl="https://www.linkedin.com/in/arya-julka-rajpal-612308195/"
    />
    <Officer 
      imageUrl="/ddsc_22-23/k_arukala.jpeg" 
      name="Krithin Arukala" 
      position="External Affairs (2022-2023)"
      linkedinUrl="https://www.linkedin.com/in/krithinarukala/"
    />
    <Officer 
      imageUrl="/ddsc_22-23/k_guanzon.jpeg" 
      name="Kyle Guanzon" 
      position="External Affairs (2022-2023)"
      linkedinUrl="https://www.linkedin.com/in/kyleguanzon/"
    />
    <Officer 
      imageUrl="/ddsc_22-23/s_vinnakota.jpeg" 
      name="Siddarth Vinnakota" 
      position="Technical Team (2021-2023)"
      linkedinUrl="https://www.linkedin.com/in/siddarth-vinnakota-974741150/"
    />
  </OfficersGrid>

  <OfficersGrid>
    <Officer 
      imageUrl="/ddsc_22-23/r_siddique.jpeg" 
      name="Ruqayyah Siddique" 
      position="Social Media (2022-2023)"
      linkedinUrl="https://www.linkedin.com/in/ruqayyah-siddique-3b0614189/"
    />
    <Officer 
      imageUrl="/ddsc_22-23/s_monga_v3.jpeg" 
      name="Smarpan Monga" 
      position="Social Media (2022-2023)"
      linkedinUrl="https://www.linkedin.com/in/smarpan-monga2173/"
    />
    <Officer 
      imageUrl="/ddsc_22-23/a_zhang.jpeg" 
      name="Amy Zhang" 
      position="Social Media (2022-2023)"
      linkedinUrl="https://www.linkedin.com/in/amy-zhang-5ba1901bb/"
    />
    <Officer 
      imageUrl="ddsc_2021/mason_dr.png" 
      name="Mason Del Rio" 
      position="Technical Team (2021-2022)"
      linkedinUrl="https://www.linkedin.com/in/masondelrio/"
    />
  </OfficersGrid>


  <OfficersGrid>
    <Officer 
      imageUrl="/ddsc_22-23/n_liu.jpeg" 
      name="Nathan Liu" 
      position="Technical Team (2021-2022)"
      linkedinUrl="https://www.linkedin.com/in/nathan-liu-655j/"
    />
    <Officer 
      imageUrl="/ddsc_22-23/n_kaluvai.jpeg" 
      name="Nirmal Kaluvai" 
      position="Technical Team (2021-2022)"
      linkedinUrl="https://www.linkedin.com/in/nirmal-kaluvai/"
    />
    <Officer 
      imageUrl="/ddsc_22-23/d_wang.jpeg" 
      name="Ru Han Wang" 
      position="Technical Team (2022-2023)"
      linkedinUrl="https://www.linkedin.com/in/ruhan-wang-3b946b175/"
    />
    <Officer 
      imageUrl="/ddsc_22-23/a_travers.jpeg" 
      name="Aurora Travers" 
      position="Technical Team (2022-2023)"
      linkedinUrl="https://www.linkedin.com/in/aurora-travers-813b621b5/"
    />
  </OfficersGrid>


  <OfficersGrid>
    <Officer 
      imageUrl="/ddsc_22-23/j_sheth.jpeg" 
      name="Jenisa Sheth" 
      position="Technical Team (2022-2023)"
      linkedinUrl="https://www.linkedin.com/in/jenisa-sheth/"
    />
    <Officer 
      imageUrl="/ddsc_22-23/l_barrett.jpeg" 
      name="Lukas Barrett" 
      position="Technical Team (2022-2023)"
      linkedinUrl="https://www.linkedin.com/in/lukas-barrett-4a068119b/"
    />
    <Officer 
      imageUrl="/ddsc_22-23/v_huang.jpg" 
      name="Vincent Huang" 
      position="Technical Team (2022)"
      linkedinUrl="https://www.linkedin.com/in/vinhuang/"
    />
    <Officer 
      imageUrl="/ddsc_22-23/a_wu.jpeg" 
      name="Wun-Syuan (Allie) Wu" 
      position="Technical Team (2022-2023)"
      linkedinUrl="https://www.linkedin.com/in/wun-syuan-wu/"
    />
  </OfficersGrid>


  <OfficersGrid>
    <Officer 
      imageUrl="ddsc_2021/vish.png" 
      name="Vishnu Rangiah" 
      position="President (2021-2022)"
      linkedinUrl="https://www.linkedin.com/in/vishnu-rangiah/"
    />
    <Officer 
      imageUrl="ddsc_2021/anch.png" 
      name="Anchal Lamba" 
      position="External Affairs (2021-2022)"
      linkedinUrl="https://www.linkedin.com/in/anchalamba/"
    />
    <Officer 
      imageUrl="ddsc_2021/antonio.png" 
      name="Antonio Pelayo" 
      position="Technical Team (2021-2022)"
    />
    <Officer 
      imageUrl="ddsc_2021/sayl.png" 
      name="Sandra Lee" 
      position="Social Media (2021-2022)"
      linkedinUrl="https://www.linkedin.com/in/sandra-lee-sy/"
    />
  </OfficersGrid>


  <OfficersGrid>
    <Officer 
      imageUrl="ddsc_2021/udir.png" 
      name="Udirno Chaudhuri" 
      position="Career & Development (2021-2022)"
      linkedinUrl="https://www.linkedin.com/in/udirno/"
    />
    <Officer 
      imageUrl="no_pic.jpg" 
      name="Ayush Gupta" 
      position="External Affairs (2021-2022)"
      // linkedinUrl=""
    />
    <Officer 
      imageUrl="ddsc_2021/deckard_barnes.png" 
      name="Deckard Barnes" 
      position="Career & Development (2021-2022)"
      linkedinUrl="https://www.linkedin.com/in/deckard-barnes/"
    />
    <Officer 
      imageUrl="ddsc_2021/sha.png" 
      name="Sharon Vien" 
      position="Social Media (2020-2021)"
      linkedinUrl="https://www.linkedin.com/in/sharonvien/"
    />
  </OfficersGrid>

  <OfficersGrid>
    <Officer 
      imageUrl="ddsc_2021/isa.png" 
      name="Isabelle Zuroske" 
      position="Treasurer (2020-2021)"
      linkedinUrl="https://www.linkedin.com/in/isabellezuroske/"
    />
    <Officer 
      imageUrl="ddsc_2021/gau.png" 
      name="Gaurav Patanke" 
      position="External Affairs (2020-2021)"
      linkedinUrl="https://www.linkedin.com/in/gaurav-patanker/"
    />
    <Officer 
      imageUrl="ddsc_2021/adi.png" 
      name="Aditya Kallepalli" 
      position="Internal Affairs (2020-2021)"
      linkedinUrl="https://www.linkedin.com/in/adityakallepalli/"
    />
    <Officer 
      imageUrl="ddsc_2021/ivan.png" 
      name="Ivan Yang" 
      position="External Affairs (2020-2021)"
      linkedinUrl="https://www.linkedin.com/in/igyang/"
    />
  </OfficersGrid>
  <OfficersGrid>
    <Officer 
      imageUrl="ddsc_2021/nathan.png" 
      name="Nathan Chan" 
      position="Projects Lead (2020-2021)"
      linkedinUrl="https://www.linkedin.com/in/nathanjchan/"
    />
    <Officer 
      imageUrl="no_pic.jpg" 
      name="Oliver Hannoui" 
      position="President (2020-2021)"
      linkedinUrl="https://www.linkedin.com/in/oliver-hannaoui/"
    />
    <Officer 
      imageUrl="no_pic.jpg" 
      name="Kideok Kwon" 
      position="Career & Development (2020-2021)"
      linkedinUrl="https://www.linkedin.com/in/kideok-kwon/"
    />
    <Officer 
      imageUrl="no_pic.jpg" 
      name="Nilay Varshnay" 
      position="Treasurer (2020-2021)"
      linkedinUrl="https://www.linkedin.com/in/nilay-varshney/"
    />
  </OfficersGrid>

  <OfficersGrid>
  <Officer 
      imageUrl="old/patrick_s.jpg" 
      name="Patrick Soong" 
      position="Career & Development (2020-2021)"
      linkedinUrl="https://www.linkedin.com/in/ppsoong/"
    />
  </OfficersGrid>

  </Styles>
);
