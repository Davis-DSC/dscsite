import React from 'react'
import styled from 'styled-components';
import Calendar from "@ericz1803/react-google-calendar";
import { TramRounded } from '@material-ui/icons';

const CALENDAR_API_KEY = process.env.REACT_APP_CALENDAR_API_KEY;

const Style = styled.div`
  padding-top: 2rem;
  padding-bottom: 3rem;

 `;

 let calendars = [
    { calendarId: "654465003ddbc19d0558c60db3280b75d1c059b015accd380188bcc511411c17@group.calendar.google.com", },
 ]

 let styles = {
    //you can use object styles (no import required)
    calendar: {
      borderWidth: "3px", //make outer edge of calendar thicker
    },

    tooltip: {
        borderWidth: "3px",
        opacity: 1
    },



  };

export const Eventpage = () => (

   <Style>
        <div>
            <Calendar 
                apiKey={CALENDAR_API_KEY} 
                calendars={calendars}
                styles={styles}
                showFooter={true}
            />
        </div>
   </Style>

)
