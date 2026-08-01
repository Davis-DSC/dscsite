import React from "react";
import Container from "@mui/material/Container";
import styled from "styled-components";
import { Header } from "./Header";
import { AboutH } from "./AboutH";
import { ConnectH } from "./ConnectH";
import ReactGA from "react-ga";

const TRACKING_ID = "G-KDXMSSG090";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

const Style = styled.div``;

export const Homepage = () => (
  <Style>
    <Header />
    <AboutH />
    <ConnectH />
  </Style>
);
