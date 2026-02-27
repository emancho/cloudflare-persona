import { useState } from 'react';
//=== Material UI
import { Container, Stack ,Grid, Box, Typography, Card, CardMedia, CardActionArea, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
//== Components
import ImageDisplaySection from '../Components/ImageDisplaySection'
// === Constants
import {CROCHET_SAMPLES} from '../Constants';

const CrochetSelectScreen = () => {
    const theme = useTheme();

    //=== State Variables
    const [selectedImage, setSelectedImage] = useState(() => {
        const randomIndex = Math.floor(Math.random() * CROCHET_SAMPLES.length);
        return CROCHET_SAMPLES[randomIndex];
    });
    const [showAltImage, setShowAltImage] = useState(false);

    //==== Handler Functions
    const handleImageSelect = (image) => {
        setSelectedImage(image);
        setShowAltImage(false);
    };
    const handleDisplayImageToggle = () => {
        if (selectedImage && selectedImage.srcAlt) {
            setShowAltImage(prev => !prev);
    }};
    const handleDotClick = (isAlt) => {
        setShowAltImage(isAlt);
    };

    //=== The caption for the page
    //const pageCaption = `Check out the things I've Crochet with Human Hands, No AI involved...`

    // Styled CardMedia component for custom height/width
    const StyledCardMedia = styled(CardMedia)({
        height: 150,
        width: 115,
        objectFit: 'cover',
        
        // Modifying height/width based on desktop
        [theme.breakpoints.up('md')]: {
            height: 180,
            width: 150,
        },
    });

    // Displays only src image when alt src isn't included in the data
    const curDisplayImageSrc = showAltImage && selectedImage.srcAlt
        ? selectedImage.srcAlt
        : selectedImage.src;

    return (
        <Container
            maxWidth="lg"
            sx={{
            mt: 3,
            mb: 4,
        }}>
            <Stack direction="column" spacing={4}>
            {/* The Textbox Section */}
                {/* <Box
                    sx={{
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: theme.shape.borderRadius,
                        p: 2.8,
                        backgroundColor: theme.palette.background.paper,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
                    <Typography variant="body1" color="text.primary">
                        {pageCaption}
                    </Typography>
                </Box> */}

                {/* The Section displaying the selected crochet item */}
                <ImageDisplaySection
                    selectedImage={selectedImage}
                    showAltImage={showAltImage}
                    currentDisplayImageSrc={curDisplayImageSrc}
                    handleDotClick={handleDotClick}
                    handleDisplayImageToggle={handleDisplayImageToggle}/>
                
                {/* The Crochet item detail Section */}
                <Box
                    sx={{
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: theme.shape.borderRadius,
                        p: 2.8,
                        backgroundColor: theme.palette.background.paper,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        {selectedImage.alt}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        {selectedImage.description}
                    </Typography>
                </Box>

                {/* The Pattern Preview Section */}
                <Grid sx={{ mt: 4 }}>
                    <Typography variant="h6" component="h3" gutterBottom>
                        Previous Crochet Pieces:
                    </Typography>
                    <Grid container spacing={3}>
                    {CROCHET_SAMPLES.map((image) => (
                        <Grid key={image.id}>
                            <Card 
                                sx={{
                                    border: image.id === selectedImage.id
                                    ? `2px solid ${theme.palette.primary.main}`
                                    : `1px solid ${theme.palette.divider}`,
                                    boxShadow: image.id === selectedImage.id ? theme.shadows[6] : theme.shadows[1],
                                    cursor: 'pointer',
                                    transition: 'box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out',
                                    '&:hover': {
                                    boxShadow: theme.shadows[4],
                                    }
                                }}>
                                <CardActionArea onClick={() => handleImageSelect(image)}>
                                    <StyledCardMedia
                                        component="img"
                                        image={image.src}
                                        alt={image.alt}
                                    />
                                    <Box sx={{ p: 1 }}>
                                    <Typography variant="subtitle2" component="div" noWrap>
                                        {image.alt}
                                    </Typography>
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                    </Grid>
                </Grid>
            </Stack>
        </Container>
    );
};

export default CrochetSelectScreen;