import React from "react";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import { Header } from "./Header";
import { AboutH } from "./AboutH";
import { ConnectH } from "./ConnectH";
import ReactGA from "@react-ga/react-ga";

ReactGA.pageview(window.location.pathname + window.location.search);

const Style = styled.div``;

export const Homepage = () => (
  <Style>
    <Header />
    <AboutH />
    <ConnectH />
  </Style>
);
