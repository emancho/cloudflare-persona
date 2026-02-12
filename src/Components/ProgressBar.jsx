//== React imports
import React, { memo, useCallback, useMemo } from 'react';
//== CSS
import '../App.css'

/*
Component Description:
    ProgressBar :- This component displays progress bar used in the radio show RadioDisplayComponent
*/

// Memoize formatTime function since it doesn't depend on component state
const formatTime = (time) => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(time % 60);
    const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formatMinutes}:${formatSeconds}`;
  }
  return '00:00';
};

const ProgressBar = memo(({
  progressBarRef,
  audioRef,
  timeProgress,
  duration,
}) => {
  // Optimize handleProgressChange using useCallback
  const handleProgressChange = useCallback(() => {
    if (audioRef?.current && progressBarRef?.current) {
      audioRef.current.currentTime = progressBarRef.current.value;
    }
  }, [audioRef, progressBarRef]);

  // Memoize formatted times to prevent recalculation on re-renders
  const formattedTimeProgress = useMemo(() => formatTime(timeProgress), [timeProgress]);
  const formattedDuration = useMemo(() => formatTime(duration), [duration]);

  return (
    <div className="progress-bar-section">
      <span className="time current">{formattedTimeProgress}</span>
      <input
        type="range"
        ref={progressBarRef}
        className="progress-bar"
        defaultValue="0"
        onChange={handleProgressChange}
      />
      <span className="time">{formattedDuration}</span>
    </div>
  );
});

export default ProgressBar;