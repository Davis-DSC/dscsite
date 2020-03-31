import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';


import SendIcon from '@material-ui/icons/Send';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import YouTubeIcon from '@material-ui/icons/YouTube';


const Styles = styled.div`
    padding-bottom: 3.5rem;
    padding-top: 0rem;
    background-color: #FFF;
 `;


const Title = styled.h1`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 2.25rem;
    text-align: center;
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
     font-size: 1.65rem;
     color: #000;
     padding: 1.75rem 2rem;

     letter-spacing: 0.02rem;
 `;


 const SGrid = styled(Grid)`
    .righthead{
      justify-content: center;
      text-align: center;
    }

    .headbutton{
      color: white;
      background: linear-gradient(99.56deg, #001C84 3.37%, #BC5555 89.07%);;
      font-family: IBM Plex Sans;
      font-style: normal;
      font-size: .9rem;
      font-weight: bold;
      letter-spacing: 0.1rem;

      &:hover {
        background-color: black;
      }

    }

    .headbutton2{
      color: white;
      background: linear-gradient(99.56deg, #001C84 3.37%, #BC5555 89.07%);;
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
        <Container>

            <Paper  style = {{background: "#FCFCFC"}} elevation={1}>

              <Title> Connect with us </Title>

                <SGrid container >

                <Grid className="righthead" item sm={4}>
                <Subtitle>
                        Please reach out to us for any information
                         and connect with us on social media.</Subtitle>



                  <ButtonGroup size="large" className="buttongroup" aria-label="large outlined button group">

                      <IconButton href="https://www.facebook.com/data.ucd/" target="_blank" aria-label="Facebook">
                       <FacebookIcon className="iconz" />
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

                <Grid  className="righthead" item sm={4}>

                  <Himg src='/data2.gif'/>

                </Grid>

                <Grid className="righthead" item sm={4}>

                <Subtitle  >Join our mailing list.</Subtitle>

                       <div className="emailb" >


                      <Button
                        className = "headbutton"
                        variant="contained"
                        href="https://mailchi.mp/1510cbd1c7f7/dscmail"
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



          </Paper>

          </Container>
      </Styles>







 )
