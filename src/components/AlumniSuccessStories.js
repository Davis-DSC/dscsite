import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import React from "react";
import styled from "styled-components";

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Styles = styled.div`
  padding-top: 4rem;
  padding-bottom: 2rem;
`;

const Title = styled.h1`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
  padding-top: 2rem;
  // padding-bottom: 3rem;
  color: #3846c6;
  text-align: center;
`;

const PhotoSection = styled.div`
  margin-bottom: 4rem;
`;

// Styles

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const Subtitle = styled.h3`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  color: #000;
  padding-top: 2rem;
  padding-bottom: 1.5rem;
  letter-spacing: 0.02rem;
  text-align: center;
`;

// Alumni Success Stories Component
const SuccessStories = ({ stories }) => (
  <PhotoSection>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
      pagination={{ clickable: true }}
      centeredSlides={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {stories.map((story, index) => (
        <SwiperSlide key={index}>
          <Card>
            <Image src={story.image} alt={story.name} />
            <Description>{story.description} <br /> <br /> {story.name}</Description>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  </PhotoSection>
);

export const AlumniSuccessStories = () => (
  <Styles>
    <Title>Alumni Success Stories </Title>
    <Subtitle>Discover how DDSC helped our alumni succeed after graduating from UC Davis.</Subtitle>
    <SuccessStories
      stories={[
        { image: "/ddsc_2021/vish.png", name: "Vishnu Rangiah", description: "Person's experience at DDSC was instrumental in blah blah blah." },
        { image: "/ddsc_2021/deckard_barnes.png", name: "Deckard Barnes", description: "Person's experience at DDSC was instrumental in blah blah blah." },
        { image: "/ddsc_2021/anch.png", name: "Anchal Lamba", description: "Person's experience at DDSC was instrumental in blah blah blah." },
        { image: "/ddsc_2021/anto.png", name: "ANtonio", description: "Person's experience at DDSC was instrumental in blah blah blah." }
      ]}
    />
  </Styles>
);
