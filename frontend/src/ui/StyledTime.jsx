import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const CustomTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.2)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.2)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.2)',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(0, 0, 0, 0.2)',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'rgba(0, 0, 0, 0.2)',
  },
  '& .MuiInputBase-input::placeholder': {
    color: 'rgba(0, 0, 0, 0.2)',
    opacity: 1,
  },
  '& .MuiInputBase-input::label': {
    color: 'rgba(0, 0, 0, 0.2)',
    opacity: 1,
  },
}));

const FullWidthTimePicker = styled(TimePicker)({
  width: '100%',
});

export const StyledTime = ({ label, placeholder }) => {
  const [selectedTime, setSelectedTime] = React.useState(null);

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    console.log('Selected time:', time);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <FullWidthTimePicker
        label={label}
        value={selectedTime}
        onChange={handleTimeChange}
        renderInput={(params) => (
          <CustomTextField
            {...params}
            placeholder={placeholder}
          />
        )}
      />
    </LocalizationProvider>
  );
};