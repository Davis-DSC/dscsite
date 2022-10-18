import React from 'react'
import styled from 'styled-components';


const Style = styled.div`

`;

const Cals = styled.div`

`;

const Subtitle = styled.h3`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  color: #000;
  padding-top: 2.75rem;
  padding-bottom: 1.5rem;
  letter-spacing: 0.02rem;

  .grade {
    color: #3846c6;
  }
`;


export const Eventpage = () => (
   <div>
        {/* <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%234285F4&ctz=America%2FLos_Angeles&showPrint=0&showTabs=1&showDate=1&showNav=1&showCalendars=0&src=NjU0NDY1MDAzZGRiYzE5ZDA1NThjNjBkYjMyODBiNzVkMWMwNTliMDE1YWNjZDM4MDE4OGJjYzUxMTQxMWMxN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%239E69AF" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>         */}
        <Subtitle> Checkout all of our events listed on our <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">facebook page</a>.        </Subtitle>
        <br/>
    </div>
)