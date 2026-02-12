//=== React Lib && CSS
import React from 'react';
import '../App.css';
//== Compontents 
import AnimatedText from '../Components/AnimatedText';
import GridListComponent from '../Components/GridListComponent'
import MainContentComponent from '../Components/MainContentComponent';
import WebpageTemplate from "../Components/WebpageTemplate";
//== Material UI
import Typography from '@mui/material/Typography';
//== Data
import {listOfProjects} from '../ProjectList.jsx'

// == Description:
// The Projects Page - This page is the project page. This page is the main hub for all the creative projects in progress.
// Project feature either reveals author notes or redirects to another page based on the selected project  

const projCaption = `Welcome to the gallery. Here are the current projects I'm working on.`

const captionStyle = {
  backgroundColor: '#e8f0e8', 
  borderRadius: '4px', 
  border: '2px solid white'
}

const bottomStyle = { 
  marginTop: '20px', 
  backgroundColor: '#e8f0e8', 
  padding: '30px', 
  borderRadius: '4px',
  border: '2px solid white' 
}

function ProjectsPage() {
  return (
    <WebpageTemplate
      mainContent={<MainContentComponent
        title={
          <AnimatedText 
            title={'The Gallery'}
          />
        }
        topSection={    
          <Typography 
            variant="body2" 
            sx={{ 
              fontSize: { xs: '4vw', sm: '2vw' }, // Responsive logic right here
              textAlign: 'center',                // Center-aligns the text
              color: '#0a3e0a',                 // Dark green color for the caption
              py: 2                               // padding-top and padding-bottom
            }}>
              {projCaption}
          </Typography>
          }
          topStyle={captionStyle}
        bottomSection={<GridListComponent projectList={listOfProjects}/>}
        bottomStyle={bottomStyle}/>}/>
  );
}

export default ProjectsPage;
