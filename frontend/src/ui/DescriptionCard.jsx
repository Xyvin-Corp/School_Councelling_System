import React from 'react'
import { Stack } from '@mui/material'
import Box from '@mui/material'
export default function DescriptionCard() {
  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Box>
    </>
  )
}
