import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  padding-top: 5rem;
  // padding-bottom: 5rem;
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

const CompanyLogosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CompanyLogo = styled.img`
  width: calc(100% / 7 - 20px); /* Calculate the width for 6 logos per row */
  height: auto; /* Maintain aspect ratio */
  object-fit: contain;
  margin: 10px;
  padding: 0.5rem;
  @media screen and (max-width: 48rem) {
    width: calc(100% / 4 - 20px); /* Adjust for smaller screens */
  }
`;

export const AlumCompanies = () => (
  <Styles>
    <Title>Where We Work</Title>
    <Subtitle>
      We are proud to showcase some of the renowned companies where our past officers have built their careers as interns and employees.
    </Subtitle>
    <CompanyLogosContainer>
      {/* Replace with the actual paths to your company logos */}
      <CompanyLogo src="company_logos/amazon.jpeg" alt="Amazon" />
      <CompanyLogo src="company_logos/apple.png" alt="Apple" />
      <CompanyLogo src="company_logos/capital_one.png" alt="CapitalOne" />
      <CompanyLogo src="company_logos/hpe.png" alt="HPE" />
      <CompanyLogo src="company_logos/intel.png" alt="Intel" />
      <CompanyLogo src="company_logos/chevron.png" alt="Chevron" />
      <CompanyLogo src="company_logos/walmart2.png" alt="Walmart" />
      <CompanyLogo src="company_logos/pwc.png" alt="PwC" />
      <CompanyLogo src="company_logos/deloitte.png" alt="Deloitte" />
      <CompanyLogo src="company_logos/stanford.png" alt="Stanford" />
      <CompanyLogo src="company_logos/thermo_fisher2.png" alt="Thermo Fisher" />
      <CompanyLogo src="company_logos/brg.png" alt="BRG" />
      <CompanyLogo src="company_logos/aaa.jpeg" alt="AAA" />
    </CompanyLogosContainer>
  </Styles>
);
