//== Libs
import React, { memo, useMemo } from "react";
//== Material UI
import { 
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Box,
    ListSubheader } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
//== CSS
import '../App.css';

/*
Component Description:
    RadioList :- This component displays the list of songs used in the current radio episode. Using the 
    listOfEpisodes paramter (which is a list of objects { song title and artist credit } )
*/

// Styles extracted for better performance
const listStyles = {
  width: '100%',
  border: 'solid',
  bgcolor: 'background.paper',
};

const subheaderStyles = {
  textAlign: 'center',
  fontSize: '36px',
  backgroundColor: '#f0f0f0',
  padding: '10px',
  border: '2px solid #000000',
};

const listItemStyles = {
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: '#000000',
  borderBottom: 'none',
  borderLeft: 'none',
  borderRight: 'none',
};

// Create a memoized song item component
// In SongItem component
const SongItem = memo(({ episode, onTrackClick, currentTime }) => {
    // Check if this track has a valid timestamp
    const hasTimestamp = typeof episode.timestamp === 'number' && !isNaN(episode.timestamp);
    
    // Only enable click functionality if there's a valid timestamp
    const handleClick = () => {
      if (hasTimestamp && typeof onTrackClick === 'function') {
        onTrackClick(episode.timestamp);
      }
    };
  
    // Determine if this track is currently playing
    const isCurrentlyPlaying = hasTimestamp && 
      currentTime >= episode.timestamp && 
      (episode.nextSongTimestamp ? currentTime < episode.nextSongTimestamp : true);
  
    return (
      <ListItem
        key={episode.id}
        sx={{
          ...listItemStyles,
          backgroundColor: isCurrentlyPlaying ? '#e8f4e8' : 'transparent',
        }}
      >
        <ListItemAvatar 
          onClick={hasTimestamp ? handleClick : undefined}
          style={{ 
            cursor: hasTimestamp ? 'pointer' : 'default',
            transition: 'all 0.2s ease',
            // Increase touch target size slightly for mobile
            padding: hasTimestamp ? '4px' : '0',
            margin: hasTimestamp ? '-4px' : '0',
            borderRadius: '50%',
          }}
          className={hasTimestamp ? "track-button-avatar" : ""}
          title={hasTimestamp ? "Play this track" : ""}
        >
          <Avatar sx={{ 
            backgroundColor: isCurrentlyPlaying ? '#4caf50' : hasTimestamp ? '#f5f5f5' : '#e0e0e0',
            // Add a subtle shadow for clickable icons to make them look like buttons
            boxShadow: hasTimestamp ? '0px 2px 4px rgba(0, 0, 0, 0.2)' : 'none',
            // Slight elevation for currently playing
            transform: isCurrentlyPlaying ? 'translateY(-2px)' : 'none',
            transition: 'all 0.2s ease',
          }}>
            <PlayArrowIcon color={isCurrentlyPlaying ? "white" : hasTimestamp ? "action" : "disabled"} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={episode.songTitle}
          secondary={episode.artistCredit}
        />
      </ListItem>
    );
  });

// Memoize the entire RadioList component to prevent unnecessary re-renders

const RadioList = memo(({ listOfEpisodes, onTrackClick, currentTime }) => {
    // Only enhance tracks that have valid timestamps
    const enhancedEpisodes = useMemo(() => {
      // First identify which tracks have timestamps
      const tracksWithTimestamps = listOfEpisodes.filter(
        track => typeof track.timestamp === 'number' && !isNaN(track.timestamp)
      );
      
      // Sort them by timestamp for easier processing
      const sortedTracksWithTimestamps = [...tracksWithTimestamps].sort(
        (a, b) => a.timestamp - b.timestamp
      );
  
      // Now enhance all episodes, adding nextSongTimestamp only for those with timestamps
      return listOfEpisodes.map(episode => {
        // Skip tracks without timestamps
        if (typeof episode.timestamp !== 'number' || isNaN(episode.timestamp)) {
          return episode;
        }
  
        // Find position in sorted timestamp array
        const index = sortedTracksWithTimestamps.findIndex(t => t.id === episode.id);
        
        // Get next timestamp if available
        const nextSongTimestamp = index < sortedTracksWithTimestamps.length - 1 
          ? sortedTracksWithTimestamps[index + 1].timestamp 
          : null;
        
        return {
          ...episode,
          nextSongTimestamp
        };
      });
    }, [listOfEpisodes]);

    // Check if any of the episodes have timestamps
    const hasAnyTimestamps = useMemo(() => {
        return listOfEpisodes.some(
            track => typeof track.timestamp === 'number' && !isNaN(track.timestamp)
    );
    }, [listOfEpisodes]);
  
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <List
                sx={listStyles}
                subheader={
                <>
                    <ListSubheader
                    component="div"
                    sx={subheaderStyles}
                    >
                    Track List
                    </ListSubheader>
                    {hasAnyTimestamps && (
                    <ListSubheader
                        component="div"
                        sx={{
                        textAlign: 'center',
                        fontSize: '15px',
                        backgroundColor: '#fefefe',
                        fontStyle: 'italic',
                        padding: '6px',
                        color: '#666',
                        }}
                    >
                        ~ Tap Play Button to skip to the track ~
                    </ListSubheader>
                    )}
                </>
                }
            >
            {enhancedEpisodes.map(episode => (
                <SongItem 
                key={episode.id} 
                episode={episode} 
                onTrackClick={onTrackClick}
                currentTime={currentTime}
                />
            ))}
            </List>
        </Box>
    );
  });

export default RadioList;