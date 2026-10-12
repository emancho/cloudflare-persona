// import { useState } from 'react';
// import { Box, Button, Alert, Stack, TextField, Typography } from '@mui/material';
// import validator from 'validator';

// //=== Description:
// // The Commission Form - This is the form that users can fill out to submit a comission request.
// // Consisits of name, email, note's fields containing comission data from users.

// function SubmissionForm({title, subtitle, succMessage, inputLabel, numRows, maxLength }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [note, setNote] = useState('');
//   const [showEmailError, setShowEmailError] = useState(false); 
//   const [showNameError, setShowNameError] = useState(false); 
//   const [showSubmissionStatus, setShowSubmissionStatus] = useState(false)
//   const charLength = maxLength;

//   // Function to validate email format
//   const validateEmail = (email) => {
//     return validator.isEmail(email);
//   };

//   // The function that handles how the form data is submitted.
//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     const formData = {
//       name,
//       email,
//       fav_song: note,
//     };
    
//     if (!name.trim()) {
//       setShowNameError(true);
//       return;
//     }else{
//       setShowNameError(false);
//     }
    
//     if (!validateEmail(email)) {
//       setShowEmailError(true);
//       return;
//     } else {
//       setShowEmailError(false);
//     }

//     try {
//       const workerUrl =  "my-newsletter-worker.moderndayprofessional-97c.workers.dev";
//       const response = await fetch(`${workerUrl}/api/users`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setShowSubmissionStatus(true)
//         setTimeout(() => {
//           setShowSubmissionStatus(false);
//         }, 2000);
        
//         setName('');
//         setEmail('');
//         setNote('');
//       } else {
//         const errorText = await response.text();
//         console.error('Server error:', response.status, errorText);
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   const handleEmailChange = (e) => {
//     const newEmail = e.target.value;
//     setEmail(newEmail);
//     if (showEmailError && validateEmail(newEmail)) {
//       setShowEmailError(false);
//     }
//   };

//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '100%' },
//         '& .MuiFormControl-root': { m: 1, width: '100%' },
//         maxWidth: '500px',
//         margin: 'auto',
//         padding: 3,
//         border: '1px solid #ccc',
//         borderRadius: '8px',
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <Stack spacing={2}>
//         <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
//           {title}
//         </Typography>
//          <Typography variant="body1" sx={{ mb: 2 }}>
//           {subtitle} 
//         </Typography>
//         {showSubmissionStatus && (
//           <Alert variant="outlined" severity="success">
//               {succMessage}
//           </Alert>
//         )}
//         <TextField
//           required
//           id="name"
//           label="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           error={showNameError}
//           helperText={showNameError ? 'Please enter your name.' : ''}
//         />
//         <TextField
//           required
//           id="email"
//           label="Email Address"
//           type="email"
//           value={email}
//           onChange={handleEmailChange} 
//           error={showEmailError} 
//           helperText={showEmailError ? 'Please enter a valid email address.' : ''} 
//         />
//         <TextField
//           id="note"
//           label={inputLabel}
//           multiline
//           rows={numRows}
//           value={note}
//           slotProps={{
//             htmlInput: {
//               maxLength: charLength,
//             },
//           }}
//           onChange={(e) => setNote(e.target.value)}
//           helperText={`${note.length}/${charLength}`}
//         />
//         <Button type="submit" variant="contained" sx={{ mt: 2 }}>
//           Submit
//         </Button>
//       </Stack>
//     </Box>
//   );
// }

// export default SubmissionForm;