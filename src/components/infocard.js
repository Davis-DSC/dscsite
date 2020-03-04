import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Info = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  border-bottom: 2px solid #fff;

  .col-sm-5{
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 1.8rem;
    color: #FFFFFF;
    left: 80px;
    text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
  }

  .col-sm-6 {
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    text-align: right;
    left:10px;
    color: #FFFFFF;
  }

`;

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;




class Infocard extends React.Component {
   render() {
      return (
        <Container>
          <Info>
                <Row>
                 <Col sm={5}>{this.props.name}</Col>
                 <Col sm={6}>{this.props.section}</Col>
               </Row>
          </Info>
        </Container>
      );
   }
}

export default Infocard;
