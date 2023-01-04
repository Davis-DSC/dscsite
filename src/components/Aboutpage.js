import React from "react";
import styled from "styled-components";
import { Mission } from "./Mission";
import { Team } from "./Team";
import ReactGA from "@react-ga/react-ga";

ReactGA.pageview(window.location.pathname + window.location.search);

const Style = styled.div``;

export const Aboutpage = () => (
  <Style>
    <Mission />
    <Team />
  </Style>
);
