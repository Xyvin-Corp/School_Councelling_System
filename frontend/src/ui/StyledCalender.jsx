import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const CustomTextField = styled(TextField)(({ theme }) => ({
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
}));

export const StyledDatePicker = ({ label, onChange, placeholder }) => {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (onChange) {
      onChange(date);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={selectedDate}
        onChange={handleDateChange}
        slotProps={{
          textField: {
            placeholder: placeholder,
            fullWidth: true,
          },
        }}
        renderInput={(params) => <CustomTextField {...params} />}
      />
    </LocalizationProvider>
  );
};