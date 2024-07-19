import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Stack, Grid, Button, styled } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



const StyledDropzone = styled(Box)(({ theme, isDragActive }) => ({
  backgroundColor: '#E0E0E0',
  border: `2px dashed ${isDragActive ? theme.palette.primary.main : '#ccc'}`,
  borderRadius: '8px',
  padding: '20px 20px 80px 20px',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'border 0.24s ease-in-out',
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
}));

const IconBackground = styled(Box)(({ theme }) => ({
  backgroundColor: '#CCDDFF',
  borderRadius: '50%',
  width: '100px',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto 10px',
}));

const UploadIcon = styled(UploadFileIcon)(({ theme }) => ({
  fontSize: '48px',
  color: '#737EAE',
}));

const DropzoneText = styled('p')(({ theme }) => ({
  margin: 0,
  color: '#333',
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  borderRadius: '20px',
  fontFamily: 'Inter',
  width: '100%',
  backgroundColor: '#E0E0E0',
  color: '#4F4F4F',
  boxShadow: 'none',  
  '&:hover': {
    backgroundColor: '#D0D0D0',
    boxShadow: 'none',  
  },
}));
const FileItem = styled(Box)(({ theme }) => ({
  marginBottom: '15px',
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '4px',
  backgroundColor: 'white',
}));

const FileContent = styled(Box)(({ theme }) => ({
  marginTop: '10px',
}));

const FileImage = styled('img')({
  maxWidth: '100%',
  maxHeight: '200px',
  objectFit: 'contain',
});

const Spacer = styled(Box)({
  height: '40px',
});

export default function DropZone() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const newFiles = acceptedFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleDownload = () => {
    if (files.length > 0) {
      const lastFile = files[files.length - 1].file;
      const href = URL.createObjectURL(lastFile);
      const link = document.createElement('a');
      link.href = href;
      link.download = lastFile.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    } else {
      alert("No file uploaded yet!");
    }
  };

  return (
    <>
      <Stack spacing={2}>
        <StyledDropzone {...getRootProps()} isDragActive={isDragActive}>
          <input {...getInputProps()} />
          <IconBackground>
            <UploadIcon />
          </IconBackground>
          <DropzoneText>
            {isDragActive
              ? 'Drop the files here ...'
              : 'Drop your file here to upload or select from storage'}
          </DropzoneText>
        </StyledDropzone>

        {files.length > 0 && (
          <Grid container spacing={2}>
            {files.map((fileObj, index) => (
              <Grid item xs={12} key={index}>
                <FileItem>
                  <div>{fileObj.file.name}</div>
                  <FileContent>
                    {fileObj.file.type.startsWith('image/') ? (
                      <FileImage src={fileObj.preview} alt={fileObj.file.name} />
                    ) : (
                      <div>File type: {fileObj.file.type}</div>
                    )}
                  </FileContent>
                </FileItem>
              </Grid>
            ))}
          </Grid>
        )}
      </Stack>
      
      <Spacer />
      
      <DownloadButton
        variant="contained"
        startIcon={<ArrowDownwardIcon />}
        onClick={handleDownload}
      >
        Download Sample
      </DownloadButton>
    </>
  );
}