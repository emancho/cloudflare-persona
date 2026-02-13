import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const hatTypes = [
  'Fedora',
  'Beanie',
  'Baseball Cap',
  'Top Hat',
  'Bowler',
];

function ComissionForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [hatType, setHatType] = React.useState('');
  const [notes, setNotes] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      name,
      email,
      hatType,
      notes,
    });
    alert('Form submitted! Check the console for the data.');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
        '& .MuiFormControl-root': { m: 1, width: '100%' },
        maxWidth: '500px',
        margin: 'auto',
        padding: 3,
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
      noValidate
      autoComplete="off"
    >
      <Stack spacing={2}>
        <TextField
          required
          id="name"
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          id="email"
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="hat-type-select-label">Hat Type</InputLabel>
          <Select
            labelId="hat-type-select-label"
            id="hat-type-select"
            value={hatType}
            label="Hat Type"
            onChange={(e) => setHatType(e.target.value)}
          >
            {hatTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="notes"
          label="Additional Notes"
          multiline
          rows={4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
}

export default ComissionForm;