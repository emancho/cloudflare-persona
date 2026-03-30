import { useState } from 'react';
import { Box, Button, Alert, Stack, TextField, Typography } from '@mui/material';
import validator from 'validator';

//=== Description:
// The Commission Form - This is the form that users can fill out to submit a comission request.
// Consisits of name, email, note's fields containing comission data from users.

function ComissionForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [showEmailError, setShowEmailError] = useState(false); 
  const [showNameError, setShowNameError] = useState(false); 
  const [showSubmissionStatus, setShowSubmissionStatus] = useState(false)
  const charLength = 300;

  // Function to validate email format
  const validateEmail = (email) => {
    return validator.isEmail(email);
  };

  // The function that handles how the form data is submitted.
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Object containing commission data
    const formData = {
      name,
      email,
      note,
    };
    // Validate name before proceeding
    if (!name.trim()) {
      setShowNameError(true);
      return;
    }else{
      setShowNameError(false);
    }
    // Validate email before proceeding
    if (!validateEmail(email)) {
      setShowEmailError(true);
      return;
    } else {
      setShowEmailError(false);
    }

    try {
      const response = await fetch('functions/api/submit.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSubmissionStatus(true)
        setTimeout(() => {
          setShowSubmissionStatus(false);
        }, 2000);
        // Clears form after successful submission
        setName('');
        setEmail('');
        setNote('');
      } else {
        const errorText = await response.text();
        console.error('Server error:', response.status, errorText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    // Hide the error alert as soon as the user starts typing after an error
    if (showEmailError && validateEmail(newEmail)) {
      setShowEmailError(false);
    }
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
        <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
          Commission Form
        </Typography>
         <Typography variant="body1" sx={{ mb: 2 }}>
          Interested in getting somthing crochet'd? Make a request and I'll get back to you as soon as possible! 
        </Typography>
        {/* The Alertbox showing submission success */}
        {showSubmissionStatus && (
          <Alert variant="outlined" severity="success">
              {`Request Sent!!`}
          </Alert>
        )}
        <TextField
          required
          id="name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={showNameError}
          helperText={showNameError ? 'Please enter your name.' : ''}
        />
        <TextField
          required
          id="email"
          label="Email Address"
          type="email"
          value={email}
          onChange={handleEmailChange} // Use the new handler
          error={showEmailError} // Apply error styling
          helperText={showEmailError ? 'Please enter a valid email address.' : ''} // Display helper text
        />
        <TextField
          id="note"
          label="What would you like commissioned? (300 characters max)"
          multiline
          rows={4}
          value={note}
          slotProps={{
            htmlInput: {
              maxLength: charLength,
            },
          }}
          onChange={(e) => setNote(e.target.value)}
          helperText={`${note.length}/${charLength}`}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
}

export default ComissionForm;
