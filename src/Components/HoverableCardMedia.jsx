//=== React Libs
import React, { useState } from 'react';
//== Material UI
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

/*
Component Description:
    HoverableCardMedia :- Component used for the Contact Layout Vinyl section of the Contact Me
    page
*/

function HoverableCardMedia({name, path, altPath, descipt, webref}) {
  // Used to track the state of card to be hovered 
  const [isHovered, setIsHovered] = useState(false);
  
  // Handle touch events for mobile devices
  const handleTouchStart = () => {
    setIsHovered(true);
  };
 // Handles when touch has ended
  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 2000); // Keep the effect for 2 seconds or adjust as needed
  };


  return (
      <Grid container spacing={4} justifyContent="center">
        {/* Single Card */}
        <Grid>
          <Card
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <CardActionArea onClick={() => {window.location.href = webref} }>
              <CardMedia
                component="img"
                image={isHovered 
                        ? altPath  // Image when hovered
                        : path } // Default image
                alt={descipt}
                sx={{ height: 240, width: 240, transition: 'transform 0.3s ease' }}
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
  );
}

export default HoverableCardMedia;
