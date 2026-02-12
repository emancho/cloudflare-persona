//== React Libs
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//== Material UI
import { Card, Box, CardMedia, CardContent, Typography, CardActions, Button, Stack } from '@mui/material';

/*
Component Description:
    ProjectCardComponent :- This component displays the data containing the details of a project
     entry on the projects page. Also responsible for the feature that allows users to see author
     notes of a project or redirect to another webpage.
*/

function ProjectCardComponent({
    minWid = 275,
    img,
    projTitle,
    projDesc,
    projAction,
    projResponse 
}) {
    const navigate = useNavigate();
    const [showDetails, setShowDetails] = useState(false);

    const handleButtonClick = () => {
        if (projAction === 'REDIRECT') {
            navigate(projResponse);
        } else {
            setShowDetails(!showDetails);
        }
    };

    const displayMessage = showDetails ? projResponse : projDesc;
    const buttonLabel = projAction === 'REDIRECT' ? 'GO' : (showDetails ? 'BACK' : 'MORE');

    return (
        <Card sx={{ minWidth: minWid }}>
            <Box border="3px solid #000000" overflow="hidden">
                <CardMedia
                    sx={{
                        position: 'relative',
                        width: '100%',
                        paddingTop: '107%',
                        overflow: 'hidden',
                    }}
                    component="div"
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                </CardMedia>
            </Box>
            <CardContent>
                <Stack spacing={2}>
                    <Typography variant="h4" color="#000000" sx={{ textDecoration: 'underline' }}>
                        {projTitle}
                    </Typography>
                    <Typography variant="body1" color="#000000">
                        {displayMessage}
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions>
                <Button size="large" onClick={handleButtonClick}>
                    {buttonLabel}
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCardComponent;
