import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';



const Styles = styled.div`
    padding-bottom: 3.5rem;
    padding-top: 2.5rem;
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
     font-size: 1.75rem;
     color: #000;
     padding-top: 3.25rem;
     padding-right: 2rem;
     padding-left: 2rem;
     padding-bottom: 1.5rem;
     letter-spacing: 0.02rem;

     .email{

       padding-bottom:0rem;
     }


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

    .MuiInputLabel-outlined,.MuiFormHelperText-contained, .MuiOutlinedInput-input{
      font-family: IBM Plex Sans;
      font-style: normal;

    }

    .MuiFormHelperText-root{
      margin-top: .45rem;
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
                </Grid>

                <Grid  className="righthead" item sm={4}>

                  <Himg src='/data2.gif'/>

                </Grid>

                <Grid className="righthead" item sm={4}>

                <Subtitle className="email" >Join our mailing list.</Subtitle>

                <TextField
                     id="outlined-basic"
                     label="Enter Email"
                     helperText="We will never share your email."
                     margin="normal"
                     variant="outlined"  />

                     <Button
                       variant="contained"
                       color="primary">

                       Send
                     </Button>


                </Grid>

            </SGrid>



          </Paper>

          </Container>
      </Styles>







 )
