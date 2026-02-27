import { Box, useTheme } from '@mui/material';

const ImageDisplaySection = ({
    selectedImage,
    handleDotClick,
    handleDisplayImageToggle,
    currentDisplayImageSrc,
    showAltImage,
    }) => {
        const theme = useTheme(); // This component needs access to the theme
  
        return (
            <Box
               sx={{
                 border: `1px solid ${theme.palette.divider}`,
                 borderRadius: theme.shape.borderRadius,
                 backgroundColor: selectedImage.backgroundColor,
                 minHeight: { xs: 300, md: 400 },
                 p: 2,
                 overflow: 'hidden',
                 position: 'relative', // Establish positioning context for absolute children
                 display: 'flex',      // Make it a flex container to center the image content wrapper
                 alignItems: 'center', // Center vertically
                 justifyContent: 'center', // Center horizontally
                 cursor: selectedImage.srcAlt ? 'pointer' : 'default', // Indicate clickability
               }}
               onClick={handleDisplayImageToggle}>
               {/* === Content (Image) Wrapper === */}
                <Box
                    sx={{
                        position: 'relative', // Establish z-index context for content
                        zIndex: 1, // Ensure content is above the background
                        width: '100%', // Allow img wrapper to fill parent for centering
                        height: '100%',
                        display: 'flex', // Flex container to center the img
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <img
                        src={currentDisplayImageSrc} // Use the dynamically selected image source
                        alt={selectedImage.alt}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                            borderRadius: theme.shape.borderRadius
                        }}/>
                </Box>
               {/* === Dot Indicators for Image Toggle === */}
                {selectedImage.srcAlt && 
                (
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: theme.spacing(2), // Position from top
                            left: '50%', // Center horizontally
                            transform: 'translateX(-50%)', // Adjust for exact horizontal center
                            display: 'flex',
                            gap: theme.spacing(1), // Space between dots
                            zIndex: 2, // Ensure dots are above image and background
                        }}>
                   {/* Dot for Primary Image (src) */}
                   <Box
                     sx={{
                       width: 8,
                       height: 8,
                       borderRadius: '50%', // Make it round
                       backgroundColor: !showAltImage
                         ? theme.palette.primary.main // Highlight if primary is active
                         : theme.palette.grey[400], // Default color
                       cursor: 'pointer',
                       transition: 'background-color 0.2s ease-in-out',
                       '&:hover': {
                         backgroundColor: !showAltImage
                           ? theme.palette.primary.dark
                           : theme.palette.grey[600],
                       }
                     }}
                    onClick={(e) => { e.stopPropagation(); handleDotClick(false); }}/>
                   {/* Dot for Alternate Image (srcAlt) */}
                   <Box
                     sx={{
                       width: 8,
                       height: 8,
                       borderRadius: '50%',
                       backgroundColor: showAltImage
                         ? theme.palette.primary.main // Highlight if alt is active
                         : theme.palette.grey[400],
                       cursor: 'pointer',
                       transition: 'background-color 0.2s ease-in-out',
                       '&:hover': {
                         backgroundColor: showAltImage
                           ? theme.palette.primary.dark
                           : theme.palette.grey[600],
                       }
                     }}
                     onClick={(e) => { e.stopPropagation(); handleDotClick(true); }} // Prevent parent Box click, set alt
                   />
                 </Box>
               )}
            </Box>
        )};

export default ImageDisplaySection;