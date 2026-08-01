import React from "react";
import styled from "styled-components";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Styles = styled.div`
  padding-top: 4rem;
  padding-bottom: 2rem;
`;

const Title = styled.h1`
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 4rem;
  // padding-bottom: 0.5rem;
  text-align: center;
  color: #000;
`;

const PhotoSection = styled.div`
  margin-bottom: 4rem;
`;

const Legend = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  margin-left: -45%;
  width: 90%;
  border-radius: 10px;
  background: #000;
  color: #fff;
  padding: 10px;
  font-size: 1.5rem; /* Increased font size */
  text-align: center;
  opacity: 0.25;
  transition: opacity 0.35s ease-in-out;

  @media screen and (max-width: 768px) {
    font-size: 0.5rem; /* Dynamic sizing for mobile */
  }

  &:hover {
    opacity: 1;
  }
`;

const PicturesEventV2 = ({ images }) => {

  const imageStyle = {
    // marginBottom: '-100px' // Adjust this value to your preference
  };

  return (
    <PhotoSection>
    <div style={{ transform: 'scale(0.75)', transformOrigin: 'center center'}}>
      <Carousel showArrows={true} showThumbs={true}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={image.caption} />
            {/* <img style={{ width: "70%", height: "auto" }} src={image.url} alt={image.caption} /> */}
            <Legend> {image.caption}</Legend>
            {/* <p className="legend"style={captionStyle}>{image.caption}</p> */}
          </div>
        ))}
      </Carousel>
      </div>
    </PhotoSection>
  );
};


export const Pictures = () => (
  <Styles>
    <Title>Pictures</Title>
    <PicturesEventV2
    // 4:3 ratio for images
      images={[
        { url: "/EventPictures/award_s24_v7.jpg", caption: "UC Davis Statistics Department Citation 2023-2024"},
        { url: "/EventPictures/officer_team_23-24.jpg", caption: "Officer Team for the 2023-2024 school year"},
        { url: "/EventPictures/s24_proj4.jpg", caption: "Spring 2024 Project Presentations"},
        { url: "/EventPictures/s24_proj3.jpg", caption: "Spring 2024 Project Presentations"},
        { url: "/EventPictures/s24_proj2.jpg", caption: "Spring 2024 Project Presentations"},
        { url: "/EventPictures/s24_proj1.jpg", caption: "Spring 2024 Project Presentations"},
        { url: "/EventPictures/s24_networking_night.jpg", caption: "Spring 2024 Networking Night with Industry Guests from Intel, SoFi, Delta Dental, and more."},
        { url: "/EventPictures/w24_TimeSeries.jpg", caption: "Winter 2024 Project Presentations: Time Series Forecasting for Predicting Air Traffic"},
        { url: "/EventPictures/w24_SEO.jpg", caption: "Winter 2024 Project Presentations: Search Engine Optimization"},
        { url: "/EventPictures/w24_housing.jpg", caption: "Winter 2024 Project Presentations: California Housing Market Analysis"},
        { url: "/EventPictures/gm1_f23_c.jpg", caption: "First General Meeting of 2023-2024"},
        { url: "/EventPictures/award_22-23.jpg", caption: "UC Davis Statistics Department Citation 2022-2023"},
        { url: "/EventPictures/gm1_f22_c.jpg", caption: "First General Meeting of 2022-2023"},
        { url: "/EventPictures/award_21-22_v2.jpg", caption: "UC Davis Statistics Department Citation 2021-2022"},
        { url: "/EventPictures/officers_21-22.jpg", caption: "Officer Team for the 2021-2022 school year"},
      ]}
    />
  </Styles>
);
