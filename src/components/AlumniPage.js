import React from "react";
import styled from "styled-components";
import { AlumCompanies } from "./AlumCompanies";
import { AlumniTeam } from "./AlumniTeam";
import ReactGA from "react-ga";
import {AlumniSuccessStories} from "./AlumniSuccessStories";

const TRACKING_ID = "G-KDXMSSG090";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

const Style = styled.div``;

export const AlumniPage = () => (
  <Style>
    <AlumCompanies />
    <AlumniSuccessStories />
    <AlumniTeam />
  </Style>
);