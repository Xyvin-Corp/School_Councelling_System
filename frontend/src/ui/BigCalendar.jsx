import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box } from "@mui/material";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: "Big Meeting",
      start: new Date(2024, 6, 19),
      end: new Date(2024, 6, 24),
    },
    {
      title: "Vacation",
      start: new Date(2024, 6, 27),
      end: new Date(2024, 6, 30),
    },
  ]);

  return (
    <Box >
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        
        style={{ height: 500 }}
      />
    </Box>
  );
};

export default BigCalendar;
