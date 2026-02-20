//=== React Lib
import _ from 'lodash';
//== Components
import AnimatedText from '../Components/AnimatedText';
import MainContentComponent from '../Components/MainContentComponent';
import WebpageTemplate from "../Components/WebpageTemplate";
import CommissionForm from '../Components/ComissionForm';
import CrochetSelectScreen from '../Components/CrochetSelectScreen'

// == Description:
// The Crochet Page - This page is the page listing my crochet hat pieces and a contact form for a comissions. 
// Consisits of pictured hats, title, and interest form

const crochetCaption = `Welcome to the Crochet Corner. This is where I will be posting my crochet pieces. 
If you're interested in a custom piece, there's a form waiting for you below and I'll get back to you as soon as possible. `

const captionStyle = {
  backgroundColor: '#e8f0e8', 
  borderRadius: '4px', 
  border: '2px solid white'
}

function CrochetPage() {
  return (
    <WebpageTemplate 
        mainContent={
        <MainContentComponent 
            title={<AnimatedText title={'Crochet Corner'}/>}
            topSection={ <CrochetSelectScreen/>}
            topStyle={""}
            bottomSection={<CommissionForm/>}  
            bottomStyle={""}
        />
    }
    />
  );  
}

export default CrochetPage;