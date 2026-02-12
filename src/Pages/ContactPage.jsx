//=== React Lib
import React from 'react';
import _ from 'lodash';
//== Components
import AnimatedText from '../Components/AnimatedText';
import HoverableCardMedia from '../Components/HoverableCardMedia'
import MainContentComponent from '../Components/MainContentComponent';
import WebpageTemplate from "../Components/WebpageTemplate";
//== Material UI
import { Button, Typography, Container, Grid, Card } from '@mui/material';
//== Constants
import {
  VINYL_LIST
} from '../Constants'

// The styling of the top and bottom sections
const sectionStyle = { 
  marginTop: '20px', 
  backgroundColor: '#e8f0e8', 
  padding: '10px', 
  borderRadius: '4px', 
  border: '2px solid white'
}

// Section for the Newsletter Option
const NewsletterSection = () => {
  return (
    <Container sx={{ textAlign: 'center', paddingTop: '20px', paddingBottom: '50px' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Join the Newsletter!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.location.href = 'https://forms.gle/vPYRvZFx1ixtdFvp7'}
        sx={{
          fontSize: '25px', // Larger font size
          padding: '10px 20px', // More padding
        }}
      >
        sign up
      </Button>
    </Container>
  );
};

// Section for the vinyls representing my socials
const SocialLinksSection = () => {
  return (
    <Container sx={{ padding: '10px 0' }}>
      {/* Section containing the title Typography */}
      <Typography 
        variant="h3" 
        align="center" 
        gutterBottom
      >
        Social Links
      </Typography>

      {/* The Grid containing the vinyls */}
      <Grid container spacing={2} justifyContent="center">
        {_.map(VINYL_LIST, (obj) => (
          <Grid key={obj.name}>
            <Card>
              <HoverableCardMedia
                name={obj.name}
                path={obj.path}
                altPath={obj.altPath}
                descipt={obj.descipt}
                webref={obj.webref}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

// == Description:
// The Contact Page - This page is the contact page. This page is where my socials and subscription link is located. 

function ContactPage() {
  return (
    <WebpageTemplate
      mainContent={
        <MainContentComponent
          title={
            <AnimatedText 
              title={'Contact Me'}/>
          }
          topSection={<NewsletterSection/>}
          topStyle={sectionStyle}
          bottomSection={<SocialLinksSection/>}  
          bottomStyle={sectionStyle}
        />
      }
    />
  );  
}

export default ContactPage;