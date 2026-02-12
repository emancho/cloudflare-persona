//== Material UI
import { Box, Typography } from '@mui/material';

/*
Component Description:
    MainContentComponent :- This component represents the layout of the main component for WebpageTemplate. Uses a Box container
    to stack the title at the top and optional sections below with their associated style.
*/

const MainContentComponent = ({ title, topSection, topStyle={marginTop: '20px'}, bottomSection, bottomStyle={marginTop: '20px'}}) => {
  return (
    <Box sx={{ width: '100%' }}>
      {/* Title Section */}
      {title && (
        <Typography 
          variant="h4" 
          gutterBottom
          sx={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            border: '5px solid #ffffff',                      // Subtle border around the text
            padding: '5px 20px',                             // Padding inside the border (top/bottom) (left/right)
            borderRadius: '8px',                              // Rounded corners for the border
            display: 'inline-block',                          // Ensures the border wraps tightly around the text
            background: '#ffffff',
          }}
          >
          {title}
        </Typography>
      )}
      
      {/* Main Section */}
      {(topSection) && (
        <Box sx={topStyle}>
          {topSection}
        </Box>
      )}
      
      {/* Optional Section */}
      {(bottomSection)  && (
        <Box sx={bottomStyle}>
          {bottomSection}
        </Box>
      )}
    </Box>
  );
};

export default MainContentComponent;
