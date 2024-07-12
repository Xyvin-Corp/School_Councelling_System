import React from 'react';
import { Typography, Stack, Box } from '@mui/material';

export default function CounsellingTypeCard() {
  return (
   
        <Stack direction="row" justifyContent="space-between">
          <Box>
            <Typography variant="h5" gutterBottom>
              Counselling Type
            </Typography>
            <Typography variant="h5" gutterBottom>
              Experience level
            </Typography>
            <Typography variant="h5" gutterBottom>
              No: of Sessions
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" gutterBottom>
              <Box
                component="span"
                sx={{
                  border: '2px solid #2196f3',
                  borderRadius: '20px',
                  padding: '4px 8px',
                  display: 'inline-block',
                }}
              >
                Behavioral Counselling
              </Box>
            </Typography>
            <Typography variant="h5" gutterBottom>
              Intermediate
            </Typography>
            <Typography variant="h5" gutterBottom>
              5
            </Typography>
          </Box>
        </Stack>
    
  );
};
