//=== Material UI Icon buttons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext'; 
import SkipPrevIcon from '@mui/icons-material/SkipPrevious';
//=== Components
import HomePageMainContent from '../Components/HomePageMainContent'
import WebpageTemplate from "../Components/WebpageTemplate";
//== Assets
import HomepageImg from '../assets/HomepageImgv4.gif';

// == Description:
// Homepage - This page is the home page. This page contains the component layout that is similar to a music player. The
// navigation buttons leads to other webpages [PrevButton - Contact page, PlayButton - About Me page, NextButton - Projects page]

function HomePage(){
  /* An array of button objects. The icon represents the button type and the link is the page the button directs to */
  const navButtons = [
    { icon: SkipPrevIcon, link: '/contact' },
    { icon: PlayArrowIcon, link: '/about' },
    { icon: SkipNextIcon, link: '/projects' },
  ];

  return (
    <WebpageTemplate
      bannerDisplay={true}
      mainContent={
          <HomePageMainContent
            imagePath={HomepageImg} 
            imageAlt={"Blurred gif of my cute self."}
            imageWidth={500} 
            imageHeight={600}
            buttons= {navButtons}
          />
      }
    />
  );
}

export default HomePage