//== Material UI
import { Box } from '@mui/material';
//== Components
import ArtistImage from './ArtistImage';  
import ArtistTitle from './ArtistTitle'; 
import PlaylistNavButton from './NavButtons'; 

/*
Component Description:
    HomePageMainContent :- This component represents the layout of the Artist Playlist incliuding the image, title and 
    play nav buttonsThe page consist of similar layout to a music player.
*/

const HomePageMainContent = ({ imagePath, imageAlt, buttons }) => {
    const responsiveImageSizes = {
        xs: { width: 200, height: 300 },  // Smaller size for extra-small screens (e.g., phones)
        sm: { width: 250, height: 350 },  // Medium size for small screens
        md: { width: 300, height: 400 },  // Larger size for medium screens and up
    };
    
    return (
        <>
            {/* Profile image section */}
            <Box sx={{ 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    marginBottom: '20px' }}>
                    <ArtistImage 
                        path={imagePath} 
                        altDesc={imageAlt}
                        w={responsiveImageSizes} 
                />
            </Box>

            {/* Title + Artist Name section */}
            <Box sx={{ 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    marginBottom: '20px' }}>
                <ArtistTitle />
            </Box>

            {/* Navigation buttons section */}
            <Box sx={{ 
                    width: '100%', 
                    display: 'flex',
                    justifyContent: 'center',
                    transform: 'scale(1.3)',
                    }}>
                <PlaylistNavButton buttonData={buttons} />
            </Box>
        </>
    );
};

export default HomePageMainContent;
