import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';


import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import ChatIcon from '@mui/icons-material/Chat';

const Styles = styled.div`
    padding: 3.5rem 0rem;
    background-color: #FFF;
 `;


const Title = styled.h1`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 3rem;
    text-align: left;
    color: #000;
    padding-bottom: .25rem;
    padding-top: 2rem;
`;

const Himg = styled.img`
    width: 100%;
    height: auto;
    max-width: 722px;
    padding-bottom: 0rem;
 `;


 const Subtitle = styled.h3`
     font-family: IBM Plex Sans;
     font-style: normal;
     font-size: 1.25rem;
     color: #000;
     padding: 1.75rem 0rem;
     letter-spacing: 0.02rem;
 `;


 const SGrid = styled(Grid)`
    .righthead{
      justify-content: left;
      text-align: left;
    }

    .headbutton{
      color: white;
      background: linear-gradient(99.56deg, #2E3BAE 3.37%, #BC5555 89.07%);;
      font-family: IBM Plex Sans;
      font-style: normal;
      font-size: 1.3rem;
      font-weight: bold;
      letter-spacing: 0.1rem;
      margin: 8.5rem 2rem;

      &:hover {
        background-color: black;
      }

    }

    .headbutton2{
      color: white;
      background: linear-gradient(99.56deg, #2E3BAE 3.37%, #BC5555 89.07%);;
      font-family: IBM Plex Sans;
      font-style: normal;
      font-size: .9rem;
      font-weight: bold;
      letter-spacing: 0.1rem;
      margin-top: .4rem;
      padding: .5rem;
      margin-left: .75rem;

      &:hover {
        background-color: black;
      }

    }

    .MuiInputLabel-outlined,.MuiFormHelperText-contained, .MuiOutlinedInput-input{
      font-family: IBM Plex Sans;
      font-style: normal;
      font-size:1rem;

    }

    .MuiFormHelperText-root{
      margin-top: .45rem;
    }

    .MuiOutlinedInput-input{
      padding-top: 1.15rem;
      padding-bottom: 1.15rem;
      padding-right: 5rem;
      padding-left: .65rem;
    }

    .email{
      padding-bottom: 1.75rem;
    }

    .emailb{
      display: flex
      justify-content: center;
      text-align: center;
      padding-bottom:1.5rem;
        }



    .MuiFormControl-marginNormal{
      margin-top:0rem;
    }

    .buttongroup{
      padding-top:.25rem;

    }

    .iconz{
      font-size:2rem;


    }






  `;



export const ConnectH = () => (

    <Styles>



                <SGrid container >

                <Grid className="righthead" item sm={6}>
                <Title>Stay updated with us.</Title>

                <Subtitle>
                        Join our discord to stay updated about our events, workshops, and other data science resources. </Subtitle>



                  <ButtonGroup size="large" className="buttongroup" aria-label="large outlined button group">

                      <IconButton href="https://www.facebook.com/data.ucd/" target="_blank" aria-label="Facebook">
                       <FacebookIcon className="iconz" />
                       </IconButton>

                       <IconButton href="https://www.instagram.com/data.ucd/" target="_blank" aria-label="Instagram">
                       <InstagramIcon className="iconz" />
                       </IconButton>

                       <IconButton href="https://discord.com/invite/TvEc7ca" target="_blank" aria-label="Discord">
                       <ChatIcon className="iconz" />
                       </IconButton>

                       <IconButton href="https://github.com/Davis-Data-Science-Club" target="_blank" aria-label="Github">
                       <GitHubIcon className="iconz"/>
                       </IconButton>

                        <IconButton href="https://www.linkedin.com/company/davisdsc/" target="_blank" aria-label="LinkedIn">
                        <LinkedInIcon className="iconz"/>
                        </IconButton>

                      <IconButton href="mailto:team@davisdsc.com?" target="_top" aria-label="Email">
                      <MailOutlineIcon className="iconz"/>
                      </IconButton>


                      <IconButton href="https://www.youtube.com/channel/UCXZPSQnLX1qLw-N19HKXKaA?view_as=subscriber" target="_blank" aria-label="Youtube">
                      <YouTubeIcon className="iconz"/>
                      </IconButton>


                   </ButtonGroup>


                </Grid>



                <Grid className="righthead" item sm={6}>


                       <div className="emailb" >


                      <Button
                        className = "headbutton"
                        variant="contained"
                        href="https://discord.com/invite/TvEc7ca"
                        target="_blank"
                        rel="noopener noreferrer"
                      > Subscribe
                      </Button>




{/*
                <TextField
                     id="outlined-basic"
                     label="Enter Email"
                     helperText="We will never share your email."
                     margin="normal"
                     variant="outlined"

                      />



                     <Button
                       className = "headbutton2"
                       variant="contained"
                       endIcon={<SendIcon />}> Send
                     </Button>
*/}


                     </div>

                     <br />




                </Grid>

            </SGrid>




       </Styles>







 )
