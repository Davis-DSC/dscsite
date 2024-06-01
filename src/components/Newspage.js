import React from "react";
import styled from "styled-components";
import { News } from "./News";
import ReactGA from "react-ga";

const TRACKING_ID = "G-KDXMSSG090";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

const Style = styled.div``;

export const Newspage = () => (
  <Style>
    <News />
  </Style>
);