import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

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
}));

export const StyledMultilineTextField = ({ label, placeholder, rows = 4 }) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log('Text changed:', event.target.value);
  };

  return (
    <CustomTextField
      label={label}
      placeholder={placeholder}
      multiline
      rows={rows}
      value={value}
      onChange={handleChange}
      variant="outlined"
      fullWidth
    />
  );
};