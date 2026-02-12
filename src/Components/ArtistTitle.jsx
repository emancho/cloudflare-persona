import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

/*
Component Description:
    ArtistImage :- The component containing the Title and Sub-Title used in the Home page 
*/

function ArtistTitle(){
    return (
        <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
                {'The Journey of an Artist'}
            </Typography>
            <Typography variant="boby1" color="text.secondary" component="div">
                {'Ed___d w/o the war'}
            </Typography>
        </CardContent>
    );
}

export default ArtistTitle;