//=== Material UI Icon buttons
import Typography from '@mui/material/Typography';
//=== Components
import AnimatedText from '../Components/AnimatedText';
import MainContentComponent from '../Components/MainContentComponent';
import RetroTV from '../Components/TVCompontent';
import WebpageTemplate from "../Components/WebpageTemplate";
//== Bump Station Source
import {BUMP_STATION_LIST} from '../Constants'

// == Description:
// Homepage - This page is dedicated to the throwaway beats. This page contains the tracks I've created whether 
// complete or incomplete.

const projCaption = `Welcome to Bump Station! Listen to song snippets that I've been working on.`
const captionStyle = {
  backgroundColor: '#e8f0e8', 
  borderRadius: '4px', 
  border: '2px solid white',
}
const bottomStyle = { 
  marginTop: '20px', 
}

function BumpsPage(){

    return (
        <WebpageTemplate
        mainContent={
            <MainContentComponent
            title={
                <AnimatedText 
                title={'Bump Station'}/>
            }
            topSection={
            <Typography 
                variant="body2" 
                sx={{ 
                fontSize: { xs: '4vw', sm: '2vw' }, // Responsive logic right here
                textAlign: 'center',                // Center-aligns the text
                color: '#0a3e0a',                 // Dark green color for the caption
                py: 2,                              // padding-top and padding-bottom
                }}>
                {projCaption}
            </Typography>

            }
            topStyle={captionStyle}
            bottomSection={(<RetroTV children={BUMP_STATION_LIST} />)}  
            bottomStyle={bottomStyle}
        />
        }
        />
  );
}

export default BumpsPage