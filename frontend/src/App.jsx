import React from 'react';
import { StyledButton } from "./ui/StyledButton";
import { StyledTextField } from "./ui/StyledTextField"
import { StyledDatePicker as StyledCalender } from "./ui/StyledCalender";
import { StyledTime } from "./ui/StyledTime";
import { StyledMultilineTextField } from './ui/StyledMultilineTextField ';
import { StyledEventUpload } from './ui/StyledEventUpload';
function App() {
  return (
    <>
      <StyledTextField label="firstname"/>
      <StyledTextField label="lastname"/>
      <StyledCalender/>
      <StyledButton name="Primary" variant="primary">Primary Button</StyledButton>
      <StyledButton name="Secondary" variant="secondary">Secondary Button</StyledButton>
      <StyledEventUpload label="Upload your Image here" placeholder="Click icon to upload event"/>
      <StyledTime label="Select Time" placeholder="HH:MM"/>
      <StyledMultilineTextField label="Add Description" placeholder="Add description in less than 500 words" rows={6} />
    </>
  )
}

export default App;