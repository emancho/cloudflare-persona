//== React Lib
import React from 'react';
//== Material UI
import { CardMedia } from "@mui/material";

/*
Component Description:
    ArtistImage :- The component containing my image for the About Me page
*/

function ArtistImage({path, altDesc, w, h}){
    return(
        <CardMedia
            component="img"
            sx={{ width: w ,height: h, objectFit: "contain" }}
            image={path}
            alt={altDesc}
      />
    );
}

export default ArtistImage;