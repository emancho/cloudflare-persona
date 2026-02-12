//=== Components
import AnimatedText from '../Components/AnimatedText';
import ArtistImage from '../Components/ArtistImage';
import MainContentComponent from '../Components/MainContentComponent';
import WebpageTemplate from "../Components/WebpageTemplate";
//=== Material UI
import Typography from '@mui/material/Typography';
//== Assets
import aboutMeImg from '../assets/AboutMeImg.png';

// == Description:
// The About Me Page - This Page consist of a very attractive face and a little bit of background on the owner of the website

// The Bio of the About Me Page
const aboutText = `I am Ed__d w/o the War, a Cameroonian-American born on the East Coast with a passion to create since childhood. 
  From an early age, I made comic books, wrote short stories, created rough draft scripts for movies I never filmed, and drew random
  characters inspired by either my favorite animated shows or the world around me. Unfortunately, as I got older, the creating stopped
  and any new idea would figuratively collect dust due to "growing up"...and honestly, I wasn't a fan of that. 
  As I enter my 30s, I'm still getting older, but the passion to create is still there. So as I rediscover my creative side again 
  (with the power of "trying" on my side), I want to use this website as a place to display my creative projects and share them with the world. 
  Also, be sure to join my newsletter on the Contact Page for future updates.`;

// Styling for the top section
const topSectionStyle = {
  display: 'flex',            // Enables flexbox layout
  justifyContent: 'center',    // Centers content horizontally
  alignItems: 'center',        // Centers content vertically
  marginBottom: '25px',        // Keeps the existing margin-bottom
};

// Styling for the bottom section
const bottomStyle = { 
  marginTop: '20px', 
  backgroundColor: '#e8f0e8', 
  padding: '10px', 
  borderRadius: '4px',
  border: '2px solid white'
}

function AboutPage() {
  return (
    <WebpageTemplate
      mainContent={
        <MainContentComponent
          title={
            <AnimatedText 
              title={'Behind the Artist'}/>
          }
          topSection={
            <ArtistImage 
              path={aboutMeImg}
              altDesc={"A very attractive man smiling very attractively."}
              w={280}
              h={300} 
            />
          }
          topStyle={topSectionStyle}
          bottomSection={
            <Typography variant="body" color="#000000">
              {aboutText}
            </Typography>
          }
          bottomStyle={bottomStyle}
        />
      }
    />
  );  
}

export default AboutPage;
