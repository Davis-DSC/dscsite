
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Container from '@material-ui/core/Container';
import { Carousel } from 'react-bootstrap';

 import styled from 'styled-components';

 const Styles = styled.div`


     .carousel {
      text-align: center;
      height: 160px;
      line-height: 160px;
      background: #364d79;
      overflow: hidden;
    }

    .carousel-item h3 {
      color: #fff;
    }



 `;




export const CarouselMain = () => (
<Styles>
  <Carousel indicators={false}>
     <Carousel.Item>
        <h3>1</h3>
      </Carousel.Item>
      <Carousel.Item>
        <h3>2</h3>
      </Carousel.Item>
      <Carousel.Item>
        <h3>3</h3>
      </Carousel.Item>
      <Carousel.Item>
        <h3>4</h3>
      </Carousel.Item>
  </Carousel>
</Styles>


 )
