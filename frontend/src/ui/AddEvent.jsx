
import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import {StyledTextField} from './StyledTextField';
import {StyledTime} from './StyledTime';
import StyledSelectField from './StyledSelectField';
import {StyledEventUpload} from './StyledEventUpload';
import { StyledButton } from './StyledButton';
import { StyledMultilineTextField } from './StyledMultilineTextField ';
import { StyledCalender } from './StyledCalender';
import StyledSwitch from '/src/ui/StyledSwitch.jsx';


export default function AddEvent() {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleSwitchChange = (e) => {
      setIsChecked(e.target.checked);
    };
  return (
   
  
    <Box sx={{ padding: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 'bold' }}>Type of Event</Typography>
          <StyledSelectField />
        </Grid>

        <Grid item xs={6}>
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="subtitle1" sx={{ marginBottom: 1, fontWeight: 'bold' }}>Name</Typography>
            <StyledTextField label="Enter your E-mail ID" />
          </Box>
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="subtitle1" sx={{ marginBottom: 1, fontWeight: 'bold' }}>Time</Typography>
            <StyledTime label="Select Time" />
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ marginBottom: 1, fontWeight: 'bold' }}>Virtual Platform</Typography>
            <StyledSelectField label="Virtual Platform" />
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="subtitle1" sx={{ marginBottom: 1, fontWeight: 'bold' }}>Date</Typography>
            <StyledCalender label="Select Date from Calender" />
          </Box>
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="subtitle1" sx={{ marginBottom: 1, fontWeight: 'bold' }}>Event Image</Typography>
            <StyledEventUpload label="Upload your Image here" />
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ marginBottom: 1, fontWeight: 'bold' }}>Event Link</Typography>
            <StyledTextField label="Add Meeting Link here" />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 'bold' }}>Select Report</Typography>
          <StyledSelectField fullWidth />
        </Grid>

        <Grid item xs={6}>
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="subtitle1" sx={{ marginBottom: 1, fontWeight: 'bold' }}>Add Chief Guest Name</Typography>
            <StyledTextField label="Enter Chief Guest Name" />
          </Box>
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="subtitle1" sx={{ marginBottom: 1, fontWeight: 'bold' }}>Upload Chief Guest Image</Typography>
            <StyledEventUpload label="Upload Chief Guest Name" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ marginRight: 70, fontWeight: 'bold' }}>Activate</Typography>
            <StyledSwitch checked={isChecked} onChange={handleSwitchChange}/>  
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="subtitle1" sx={{ marginBottom: 1, fontWeight: 'bold' }}>Add Chief Guest Designation</Typography>
            <StyledTextField label="Enter Chief Guest Designation" />
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ marginBottom: 1, fontWeight: 'bold' }}>Add Description</Typography>
            <StyledMultilineTextField label="Add Description in less than 500 words" rows={4} />
          </Box>
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={6}>
  <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, marginTop: 2 }}>
    <StyledButton name="Cancel" variant="secondary" style={{ width: 'auto' }}>
      Cancel
    </StyledButton>
    <StyledButton name="Save" variant="primary" style={{ width: 'auto' }}>
      Save
    </StyledButton>
  </Box>
</Grid>

    </Grid>
    </Box>
);
}