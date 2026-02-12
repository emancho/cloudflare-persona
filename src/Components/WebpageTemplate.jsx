//== Material UI
import { Grid, Box, Typography, Stack } from '@mui/material';
//== Components
import NavBar from './NavBar';
import AnimatedBanner from './AnimatedBanner';
//== Constant
import { bannerTexts } from '../Constants'

/*
Component Description:
    WebpageTemplate :- THIS IS THE MAIN PARENT COMPONENT.  
*/

const WebpageTemplate = ({bannerDisplay=false, mainContent}) => {

    const gridContainerStyles = {
        minHeight: '100vh',        // Ensures the Stack container takes up at least the full height of the viewport
    };
    
    // The Style for the Header
    const headerStyles = {
        width: '100%',              // Ensures the header spans the full width of its container
        padding: '20px',            // Adds 20px of padding inside the header to create space around its content
        backgroundColor: '#3f51b5', // Sets the background color of the header to a dark blue (#3f51b5)
        color: '#fff',              // Sets the text color inside the header to white (#fff) for contrast against the dark background
        textAlign: 'center',        // Centers the text horizontally within the header
        overflow: 'hidden',         // Ensure the text doesn't overflow out of the container
        whiteSpace: 'nowrap'        // Prevent the text from wrapping
    };
    
    // The Style for the Footer
    const footerStyles = {
        flex: '1',              // Ensures the footer spans the full width of its container
        padding: '10px',            // Adds 10px of padding inside the footer to create space around its content
        backgroundColor: '#3f51b5', // Sets the background color of the footer to a dark blue (#3f51b5)
        color: '#fff',              // Sets the text color inside the footer to white (#fff) for contrast against the dark background
        textAlign: 'center',        // Centers the text horizontally within the footer
        marginTop: 'auto',          // Pushes the footer to the bottom of its container, ensuring it stays at the bottom of the page
    };
    
    // The Style for the Main Content Area
    const mainContentStyles = {
        padding: '20px',               // Adds 20px of padding inside the content area to create space around its content
        backgroundColor: '#c5d7cd',    // Sets the background color of the content area to a light shade of green (#c5d7cd)
        borderRadius: '10px',          // Rounds the corners of the content area with a radius of 10px for a softer look
        width: {
            xs: '90%',                // 100% width on extra-small screens (phones)
            sm: '70%',                 // 70% width on small screens
            md: '70%',                 // 70% width on medium and larger screens
        },
        maxWidth: '600px',             // Limits the maximum width of the content area to 800px, preventing it from becoming too wide on larger screens
        boxSizing: 'border-box',       // Ensures that the padding is included in the width calculation, preventing overflow
        textAlign: 'center',           // Centers the text horizontally within the content area
        margin: '20px auto',           // Centers the content area horizontally within its parent container by applying equal left and right margins
        display: 'flex',               // Sets the content area to use Flexbox for layout, enabling flexible alignment and distribution of its child elements
        flexDirection: 'column',       // Arranges the child elements inside the content area in a vertical column (from top to bottom)
        justifyContent: 'center',      // Vertically centers the content within the content area
        alignItems: 'center',          // Horizontally centers the content within the content area
    };

    return (
        <>
        <Stack sx={gridContainerStyles}>
            {/*=== Header ===*/}
            {/*== Section containing the banner ==*/}
            <Grid size={12}>
                {
                    (bannerTexts && bannerDisplay) ? (
                        <Box sx={headerStyles}>
                            <AnimatedBanner/>
                        </Box>
                ) : null
                }
            </Grid>

            {/*=== Section containing the main content of the webpage ===*/}
            <Grid 
                container 
                spacing={2} 
                size={{ 
                    flexGrow: 1,                // Make this Grid item grow to fill available space in the Stack
                    padding: '20px',            // Padding for the main content section
                    justifyContent: 'center',   // Center content horizontally within the grid container
                    alignItems: 'center',       // Center content vertically within the grid container
                    display: 'flex',            // Ensure this Grid acts as a flex container for its children for justifyContent/alignItems to work
                    flexDirection: 'column',    // Or 'row' depending on desired internal layout
                }}
            >
                <Grid size={{xs:12, md:12}}>
                    <Box sx={mainContentStyles}>
                        {mainContent}
                    </Box>
                </Grid>
            </Grid>

            {/*=== Footer Segment ===*/}
            <Grid size={12}>
                <Box sx={footerStyles}>
                    <Typography variant="body2">© 2026 Ed__d w/o the War. All rights reserved.</Typography>
                </Box>
            </Grid>
        </Stack>
    </>
    );
}

export default WebpageTemplate;
