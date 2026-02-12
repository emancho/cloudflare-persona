//== React Libs
import { 
  useState, 
  useEffect, 
  useRef, 
  useCallback,
  memo
} from 'react';
//== Playback icons
import {
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';
import { CgPlayForwards } from "react-icons/cg";
import { CgPlayBackwards } from "react-icons/cg";

//== Volume icons
import {
  IoMdVolumeHigh,
  IoMdVolumeOff,
  IoMdVolumeLow,
} from 'react-icons/io';
//== Data
import {
  PLAYBACK_BUTTON_SIZE, 
  VOLUME_BUTTON_SIZE
} from '../Constants'
//== Components
import {Box, Grid, Typography, Stack} from '@mui/material';

/*
Component Description:
  Controls :- Component that represents the controls (Playback and Volume) for the radio page.
*/

// Memoized controls to prevent unnecessary re-renders
const Controls = memo(({
  trackIndex,
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  handleNext,
  handlePrev,
  isPlaying,
  setIsPlaying
}) => {
  const [volume, setVolume] = useState(100);
  const [muteVolume, setMuteVolume] = useState(false);
  const playAnimationRef = useRef();

  // The function responsible for swapping between play and pause 
  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, [setIsPlaying]);

  // Optimize the repeat function with useCallback to prevent recreating on every render
  const repeat = useCallback(() => {
    if (audioRef.current && progressBarRef.current) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime;
      progressBarRef.current.style.setProperty(
        '--range-progress',
        `${(progressBarRef.current.value / duration) * 100}%`
      );
      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  // Manage play state effect
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.play();
      playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      audioRef.current.pause();
      if (playAnimationRef.current) {
        cancelAnimationFrame(playAnimationRef.current);
      }
    }
    
    // Cleanup function to cancel animation frame when component unmounts
    return () => {
      if (playAnimationRef.current) {
        cancelAnimationFrame(playAnimationRef.current);
      }
    };
  }, [isPlaying, audioRef, repeat]);

  // Handle volume changes
  useEffect(() => {
    if (!audioRef.current) return;
    
    audioRef.current.volume = volume / 100;
    audioRef.current.muted = muteVolume;
  }, [volume, audioRef, muteVolume]);

  // Memoized handler for volume toggle
  const toggleMute = useCallback(() => {
    setMuteVolume(prev => !prev);
  }, []);

  // Memoized handler for volume change
  const handleVolumeChange = useCallback((e) => {
    setVolume(e.target.value);
  }, []);

  // Get appropriate volume icon based on current volume
  const VolumeIcon = muteVolume || volume < 5 
    ? IoMdVolumeOff 
    : volume < 40 
      ? IoMdVolumeLow 
      : IoMdVolumeHigh;

  return (
    <Stack spacing={1} justifyContent="center">
      <Grid>
        <Box display="flex" alignItems="center" justifyContent="center">
        
        {/* Previous Button */}
          <Box mr={5} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="body1" mb={1} align="center">
              Previous
            </Typography>
            <button onClick={handlePrev} disabled={trackIndex === 0}>
              <CgPlayBackwards size={PLAYBACK_BUTTON_SIZE} />
            </button>
            <Typography variant="body1" mt={1} align="center">
              Episode
            </Typography>
          </Box>

        {/* Play/Pause Button */}
          <Box display="flex" flexDirection="column" alignItems="center">
            <button onClick={togglePlayPause}>
              {isPlaying ? (
                <IoPauseSharp size={PLAYBACK_BUTTON_SIZE + 20} />
              ) : (
                <IoPlaySharp size={PLAYBACK_BUTTON_SIZE + 20} />
              )}
            </button>
          </Box>

        {/* Next Button */}
          <Box ml={5} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="body1" mb={1} align="center">
              Next
            </Typography>
            <button onClick={handleNext}>
              <CgPlayForwards size={PLAYBACK_BUTTON_SIZE} />
            </button>
            <Typography variant="body1" mt={1} align="center">
              Episode
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* Mute Button and Volume Slider */}
      <Grid size={12} style={{ textAlign: 'center', marginTop: '10px' }}>
        <button onClick={toggleMute}>
          <VolumeIcon size={VOLUME_BUTTON_SIZE} />
        </button>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={handleVolumeChange}
          style={{
            background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`,
            marginLeft: '10px',
            verticalAlign: 'middle',
          }}
        />
      </Grid>
    </Stack>
  );
});

export default Controls;