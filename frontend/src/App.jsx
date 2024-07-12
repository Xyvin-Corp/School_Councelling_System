import React from 'react';
import { StyledButton } from "./ui/StyledButton";
import { StyledTextField } from "./ui/StyledTextField";
import { StyledDatePicker as StyledCalender } from "./ui/StyledCalender";
import { StyledTime } from "./ui/StyledTime";
import { StyledMultilineTextField } from './ui/StyledMultilineTextField ';
import { StyledEventUpload } from './ui/StyledEventUpload';
import { userColumns, userData } from "./assets/json/TableData";
import { useState } from "react";
import StyledTable from "./ui/StyledTable";
import StyledSelectField from "./ui/StyledSelectField";
import StyledSwitch from "./ui/StyledSwitch";
import CouncellingCard from './ui/CouncellingCard';
import DescriptionCard from './ui/DescriptionCard';


function App() {
  const [selectedRows, setSelectedRows] = useState([]);
  const handleSelectionChange = (newSelectedIds) => {
    setSelectedRows(newSelectedIds);
    console.log("Selected items:", newSelectedIds);
  };
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleView = (id) => {
    console.log("View item:", id);
  };
  return (
    <>
      <StyledTextField label="firstname" />
      <StyledTextField label="lastname" />
      <StyledCalender />
      <StyledButton name="Primary" variant="primary">
        Primary Button
      </StyledButton>
      <StyledButton name="Secondary" variant="secondary">
        Secondary Button
      </StyledButton>
      <StyledEventUpload
        label="Upload your Image here" 
        placeholder="Click icon to upload event"
      />
      <StyledTime label="Select Time" placeholder="HH:MM"/>
      <StyledMultilineTextField label="Add Description" placeholder="Add description in less than 500 words" rows={6} />
      <StyledTable
        columns={userColumns}
        data={userData}
        onSelectionChange={handleSelectionChange}
        onView={handleView}
      />
      <StyledSelectField options={options} />{" "}
      <StyledSwitch checked={isChecked} onChange={handleSwitchChange} />
      <CouncellingCard></CouncellingCard>
      <DescriptionCard/>
    </>
  );
}

export default App;