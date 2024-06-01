import React from "react";
import styled from "styled-components";
// import AlumniSuccessStories from './AlumniSuccessStories'; // Import the component

const Styles = styled.div`
  padding-top: 4rem;
  padding-bottom: 2rem;
`;

const Title = styled.h1`
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 5rem;
  padding-bottom: 0.5rem;
  color: #000;
`;

const PhotoSection = styled.div`
  margin-bottom: 4rem;
`;

export const News = () => (
  <Styles>
  //   <Title>News</Title>
  {/* //   <AlumniSuccessStories
  //     stories={[
  //       { image: "/ddsc_2021/vish.png", name: "Vishnu Rangiah", description: "Person's experience at DDSC was instrumental in blah blah blah." },
  //       { image: "/ddsc_2021/deckard_barnes.png", name: "Deckard Barnes", description: "Person's experience at DDSC was instrumental in blah blah blah." },
  //       { image: "/ddsc_2021/anch.png", name: "Anchal Lamba", description: "Person's experience at DDSC was instrumental in blah blah blah." },
  //       { image: "/ddsc_2021/anto.png", name: "ANtonio", description: "Person's experience at DDSC was instrumental in blah blah blah." }
  //     ]}
  //   /> */}
  </Styles>
);
