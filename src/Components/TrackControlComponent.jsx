//== React Lib
import React, { memo} from 'react';
import _ from 'lodash';
//== Material UI
import { Grid, FormControl, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
//== Components
import DisplayTrack from './DisplayTrack';
import ProgressBar from './ProgressBar';
import Controls from './Controls';

/*
Component Description:
    TrackControlComponent :- This component is a combination of the DisplayTrack, ProgressBar, and Controls components
*/

// The sx prop for the Display Track  
const RadioContentDisplay = {
  display: 'flex',
  justifyContent: 'center',  // Centers horizontally
  alignItems: 'center',      // Centers vertically
  width: '100%',             // Ensures the Grid item takes the full width
  textAlign: 'center',       // Optional: Centers text if needed
  marginTop: '20px', 
  backgroundColor: '#e8f0e8', 
  borderRadius: '4px',
  border: '2px solid white' 
};

// The sx prop for the progress bar section
const ProgressBarSectionStyle = {
  padding: '40px 0',  // Adjust the value '20px' as needed for top and bottom padding
};

//=== The style utlity for the Select component in the Dropdown selection
const StyledTrackSelect = styled(Select)(({ theme }) => ({
  backgroundColor: '#e8f0e8',
  borderRadius: '14px',
  '&:hover': {
    backgroundColor: '#eeeeee',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
    borderWidth: '2px',
  },
  '.MuiSelect-icon': {
    color: theme.palette.primary.main,
  },
}));

// The style ultity for the MenuItem component in the Dropdown selection
const StyledTrackMenuItem = styled(MenuItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: '#e8f1e8',
  },
  '&.Mui-selected': {
    backgroundColor: '#c0d9c0',
    fontWeight: theme.typography.fontWeightMedium,
    '&:hover': {
       backgroundColor: '#c0d9c0'
    }
  },
}));

// Memoize the component to prevent unnecessary re-renders
const TrackControlComponent = memo(({
  currentTrack,
  trackIndex,
  trackList,
  initSelect,
  onTrackChange,
  audioRef,
  setDuration,
  duration,
  progressBarRef,
  timeProgress,
  setTimeProgress,
  handleNext,
  handlePrev,
  isPlaying,
  setIsPlaying
}) => {

  // Handles loading the metadata (such as duration) once the audio file is ready
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    if (progressBarRef.current) {
      progressBarRef.current.max = seconds;
    }
  };

  // Handles track end behavior
  const onEnded = () => {
    if (audioRef.current) {
      audioRef.current.pause();  // Pause the audio
      audioRef.current.currentTime = 0;  // Reset the track to the beginning
      setIsPlaying(false);  // Update play/pause state
    }
  };

  return (
    <>
      {/* The actual audio element controlling playback */}
      <audio
        ref={audioRef}
        src={currentTrack.src}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
      />

      {/* Section for the Dropdown menu */}
      <Grid sx={{ width: '100%', padding: '10px 0' }}>
        <FormControl fullWidth>
          <StyledTrackSelect
            id="track-select"
            value={currentTrack.id}
            onChange={onTrackChange}
            displayEmpty
            renderValue={() => {
              // If nothing is selected (initial state), show the placeholder.
              if (!initSelect) {
                return 'Select An Episode';
              }

              // Once an item is selected, display its actual text.
              return `Ep.${currentTrack.id}: ${currentTrack.epTitle}`;
            }}
          >
            {_.map(trackList, (ep) => (
              <StyledTrackMenuItem
                key={ep.id}
                value={ep.id}
              >
                {"Ep." + ep.id + " : " + ep.epTitle}
              </StyledTrackMenuItem>
            ))}
          </StyledTrackSelect>
        </FormControl>
      </Grid>

      {/* Display Track Section */}
      <Grid sx={RadioContentDisplay}>
        <DisplayTrack currentTrack={currentTrack} />
      </Grid>

      {/* Progress Bar Section */}
      <Grid sx={ProgressBarSectionStyle}>
        <ProgressBar
          progressBarRef={progressBarRef}
          audioRef={audioRef}
          timeProgress={timeProgress}
          duration={duration}
        />
      </Grid>

      {/* Radio Controls Section */}
      <Grid id="radioControl_section">
        <Controls
          trackIndex={trackIndex}
          audioRef={audioRef}
          progressBarRef={progressBarRef}
          duration={duration}
          setTimeProgress={setTimeProgress}
          handleNext={handleNext}
          handlePrev={handlePrev}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </Grid>
    </>
  );
});

export default TrackControlComponent;