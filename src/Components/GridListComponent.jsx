//== Libs
import React from 'react';
//== Material UI - Use Grid2 (the new standard)
import Grid from '@mui/material/Grid';
//== Components
import ProjectCardComponent from './ProjectCardComponent';

/*
Component Description:
GridListComponent :- Component that represents the list of projects on the project page using the list of
projects passed in the parameter
*/


const GridListComponent = ({ projectList }) => {
  return (
    <Grid 
      container 
      spacing={5} 
      justifyContent="center"
      alignItems="center"
    >
      {projectList.map((project, index) => (
        <Grid
          key={project.projTitle || index} // Use a unique property as key
          sx={{ 
            display: 'flex', 
            justifyContent: 'center' 
          }} 
        >
          <ProjectCardComponent
            img={project.img}
            imgTitle={project.imgTitle}
            projTitle={project.projTitle}
            projDesc={project.projDesc}
            projAction={project.projAction}
            projResponse={project.projResponse}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridListComponent;