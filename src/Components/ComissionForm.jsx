import { useState } from 'react';
import { Box, Button, Alert, Stack, TextField, Typography } from '@mui/material';
import validator from 'validator';

function ComissionForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [showNameError, setShowNameError] = useState(false);
  const [showSubmissionStatus, setShowSubmissionStatus] = useState(false);
  const [submitting, setSubmitting] = useState(false);       
  const [submitError, setSubmitError] = useState('');        
  const charLength = 300;

  const validateEmail = (email) => validator.isEmail(email);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (submitting) return;                                   
    setSubmitError('');                                       

    // Validate name
    if (!name.trim()) {
      setShowNameError(true);
      return;
    }
    setShowNameError(false);

    // Validate email
    if (!validateEmail(email)) {
      setShowEmailError(true);
      return;
    }
    setShowEmailError(false);

    const formData = { name, email, note };
    setSubmitting(true);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSubmissionStatus(true);
        setTimeout(() => setShowSubmissionStatus(false), 2000);
        setName('');
        setEmail('');
        setNote('');
      } else {
          const errorText = await response.text();
          console.error('Server error:', response.status, errorText);
          setSubmitError('Submission failed. Please try again later.');
      }
    } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitError('Network error. Please check your connection and try again.'); 
    } finally {
        setSubmitting(false);                                   
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    // FIX 3: also clear error when field is emptied
    if (showEmailError && (newEmail === '' || validateEmail(newEmail))) {
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

        {/* FIX 2: user-visible error alert */}
        {submitError && (
          <Alert severity="error" onClose={() => setSubmitError('')}>
            {submitError}
          </Alert>
        )}

        {showSubmissionStatus && (
          <Alert variant="outlined" severity="success">
            Request Sent!!
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
          onChange={handleEmailChange}
          error={showEmailError}
          helperText={showEmailError ? 'Please enter a valid email address.' : ''}
        />
        <TextField
          id="note"
          label="What would you like commissioned? (300 characters max)"
          multiline
          rows={4}
          value={note}
          slotProps={{ htmlInput: { maxLength: charLength } }}
          onChange={(e) => setNote(e.target.value)}
          helperText={`${note.length}/${charLength}`}
        />

        {/* FIX 1: disable + relabel while submitting */}
        <Button type="submit" variant="contained" disabled={submitting} sx={{ mt: 2 }}>
          {submitting ? 'Sending...' : 'Submit'}
        </Button>
      </Stack>
    </Box>
  );
}

export default ComissionForm;