import React from "react";
import styled from "styled-components";
import { Pictures } from "./Pictures";
import ReactGA from "react-ga";

const TRACKING_ID = "G-KDXMSSG090";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

const Style = styled.div``;

export const PicturesPage = () => (
  <Style>
    <Pictures />
  </Style>
);