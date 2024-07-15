import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import BookAppointmentForm from '../../components/BookAppointmentForm'

const BookAppointment = () => {

  return (
    <>
      <Box padding={"30px"} bgcolor={"#FFFFFF"}>
        <Typography variant="h4" color={"#4A4647"}>
          Book Appointment/ New Appointment
        </Typography>
      </Box>
    <Grid padding={5} marginRight={25} marginTop={-1} marginLeft={-1}>
      <BookAppointmentForm/>
    </Grid>
            
     

    </>
  );
};

export default BookAppointment;
