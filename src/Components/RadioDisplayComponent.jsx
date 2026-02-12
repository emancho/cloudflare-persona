//== React Lib
import React from "react";
//== Material UI
import { Box, Typography } from '@mui/material';

/*
Component Description:
    RadioDisplay :- This component displays the Cover Image and Title of the current radio show episode
*/

function RadioDisplay( {imgUrl, epTitle, altDescrip} ){

    return(
        <Box>
            <img src={imgUrl} alt={altDescrip} style={{ width: '100%' }} />
            <Typography variant="h4" align="center">{epTitle}</Typography>
        </Box>
    );
}

export default RadioDisplay;