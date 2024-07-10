import React, { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

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

const ImagePreview = styled(Box)({
  width: '100%',
  height: '200px',
  marginTop: '10px',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  border: '1px solid rgba(0, 0, 0, 0.2)',
  borderRadius: '4px',
});

export const StyledEventUpload = ({ label, placeholder }) => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
      console.log('Selected file:', file.name);
    }
  };

  return (
    <>
      <CustomTextField
        fullWidth
        label={label}
        placeholder={placeholder}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleIconClick}>
                <BackupOutlinedIcon />
              </IconButton>
            </InputAdornment>
          ),
          readOnly: true,
        }}
      />
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        accept="image/*"
      />
      {selectedImage && (
        <ImagePreview style={{ backgroundImage: `url(${selectedImage})` }} />
      )}
    </>
  );
};