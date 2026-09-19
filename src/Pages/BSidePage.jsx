//=== Material UI Icon buttons
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext'; 
// import SkipPrevIcon from '@mui/icons-material/SkipPrevious';
//=== Components
import AnimatedText from '../Components/AnimatedText';
import MainContentComponent from '../Components/MainContentComponent';
import WebpageTemplate from "../Components/WebpageTemplate";
//== Assets

// == Description:
// Homepage - This page is dedicated to the throwaway beats. This page contains the tracks I've created whether 
// complete or incomplete.

function BsidePage(){

    return (
        <WebpageTemplate
        mainContent={
            <MainContentComponent
            title={
                <AnimatedText 
                title={'B Side'}/>
            }
            topSection={(<p>TOP</p>)}
            topStyle={null}
            bottomSection={(<p>BOTTOM</p>)}  
            bottomStyle={null}
        />
        }
        />
  );
}

export default BsidePage