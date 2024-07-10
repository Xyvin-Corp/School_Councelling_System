import { StyledButton } from "./ui/StyledButton";
import { StyledTextField } from "./ui/StyledTextField"
import { StyledDatePicker as StyledCalender } from "./ui/StyledCalender";
import { StyledEventIcon } from "./ui/StyledEventIcon";
function App() {
  return (
    <>
      <StyledTextField label="firstname"/>
      <StyledTextField label="lastname"/>
      <StyledCalender/>
      <StyledButton name="Primary" variant="primary">Primary Button</StyledButton>
      <StyledButton name="Secondary" variant="secondary">Secondary Button</StyledButton>
      <StyledEventIcon label="Upload your Image here"placeholder="Click icon to upload event"/>
    </>
  )
}

export default App