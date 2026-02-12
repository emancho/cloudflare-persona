//=== React Lib && CSS
import React, { useRef, useState, useCallback, useMemo } from 'react';
import _ from 'lodash';
import '../App.css';
//== Components 
import AnimatedText from '../Components/AnimatedText';
import MainContentComponent from '../Components/MainContentComponent';
import WebpageTemplate from "../Components/WebpageTemplate";
import TrackControlComponent from '../Components/TrackControlComponent'
import RadioList from '../Components/RadioListComponent'
//== Data
import { RADIO_EP_TRACKLIST, RADIO_EP_INFO } from '../Constants'

// == Description:
// The Radio Page - This page is the Radio Show page. This page has the location of all radio episodes.
// Consists of the related episode's image, playtime bar, playback buttons and list of songs within the radio show. 

function RadioPage() {
  // The initial track representing the most recent radio episode
  const totalTracks = useMemo(() => RADIO_EP_INFO.length, []);
  const initTrack = totalTracks - 1;

  // The list of epispdes passed into the dropdown 
  const epList = _.map(RADIO_EP_INFO, ({ id, epTitle }) => ({ id, epTitle }))
  
  // states
  const [trackIndex, setTrackIndex] = useState(initTrack);
  const [currentTrack, setCurrentTrack] = useState(RADIO_EP_INFO[initTrack]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [curTrackList, setCurTrackList] = useState(RADIO_EP_TRACKLIST[initTrack]);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [initialSelect, setTrack] = useState(false); 
  
  // Mutable ref objects tied to the audio and progress bar
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  // The function that handles the changing of the episodes using the dropdown
  const handleTrackSelect = useCallback((event) => {
    // Get the ID of the selected track from the dropdown event
    const selectedTrackId = event.target.value;

    // Find the index of the selected track in your main data array
    const newTrackIndex = RADIO_EP_INFO.findIndex(track => track.id === selectedTrackId);

    // If the track is found, update all the relevant states
    if (newTrackIndex !== -1) {
      setTrackIndex(newTrackIndex);
      setCurrentTrack(RADIO_EP_INFO[newTrackIndex]);
      setCurTrackList(RADIO_EP_TRACKLIST[newTrackIndex]);
      setTrack(true)
    }
  }, []); 

  // Memoize event handlers to prevent unnecessary re-renders
  const handleNext = useCallback(() => {
    // When hitting the next button on the last episode, navigate to the first episode
    if (trackIndex >= totalTracks - 1) {
      setTrackIndex(0);
      setCurrentTrack(RADIO_EP_INFO[0]);
      setCurTrackList(RADIO_EP_TRACKLIST[0]);
    } else {
      const nextIndex = trackIndex + 1;
      setTrackIndex(nextIndex);
      setCurrentTrack(RADIO_EP_INFO[nextIndex]);
      setCurTrackList(RADIO_EP_TRACKLIST[nextIndex]);
    }
    
    // Plays the next ep of the Radio Show when the play button is in pause state 
    if (audioRef.current && audioRef.current.paused) { 
      setIsPlaying(true);
    }
  }, [trackIndex, totalTracks, audioRef]);

  const handlePrev = useCallback(() => {
    // Condition that doesn't allow going below the first track due to out of bounds
    if (trackIndex <= 0) return;
    
    // Shifts current episode to the previous track
    const prevIndex = trackIndex - 1;
    setTrackIndex(prevIndex);
    setCurrentTrack(RADIO_EP_INFO[prevIndex]);
    setCurTrackList(RADIO_EP_TRACKLIST[prevIndex]);
    
    // Plays the previous ep of the Radio Show when the play button is in pause state
    if (audioRef.current && audioRef.current.paused) { 
      setIsPlaying(true);
    }
  }, [trackIndex, audioRef]);

  const jumpToTimestamp = useCallback((timestamp) => {
    // Only proceed if timestamp is a valid number
    if (audioRef.current && typeof timestamp === 'number' && !isNaN(timestamp)) {
      // Set the current time of the audio to the timestamp
      audioRef.current.currentTime = timestamp;
      
      // Update progress bar value
      if (progressBarRef.current) {
        progressBarRef.current.value = timestamp;
      }
      
      // Update time progress state
      setTimeProgress(timestamp);
      
      // If paused, start playing
      if (audioRef.current.paused) {
        setIsPlaying(true);
      }
    }
  }, [audioRef, progressBarRef]);

  return (
    <WebpageTemplate
      mainContent={
        <MainContentComponent
          title={
            <AnimatedText 
              title={'EDD-Perience Radio'}
            />
          }
          topSection={      
            <TrackControlComponent
              currentTrack={currentTrack}
              trackIndex={trackIndex}
              trackList={epList}
              initSelect={initialSelect}
              onTrackChange={handleTrackSelect}
              audioRef={audioRef}
              setDuration={setDuration}
              progressBarRef={progressBarRef}
              handleNext={handleNext}
              handlePrev={handlePrev}
              timeProgress={timeProgress}
              duration={duration}
              setTimeProgress={setTimeProgress}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          }
          bottomSection={            
          <RadioList 
            listOfEpisodes={curTrackList.radioTrackList} 
            onTrackClick={jumpToTimestamp}
            currentTime={timeProgress}
          />
          }
        />
      }
    />
  );
}

export default RadioPage;