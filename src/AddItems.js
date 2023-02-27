import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function AddItems() {
  return (
    <Stack spacing={2} direction="row">
      <Button 
      sx={{
        width: 200,
        margin: "auto"}}
        onClick={clickHandler}
        variant="contained">Add Items</Button>
    </Stack>
  );
}