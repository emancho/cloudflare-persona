//=== Assests
import techBro from './assets/techbro_drac.png';
import girlDdance from './assets/proj1.png';
import radioShow from './assets/radio_cover.png';

// Location of Project Details for Gallery Page
// img - path of image, 
// projTitle - the title of the project,
// projDesc - the description of the project,
// projAction - the action of the projct [redirect/popup],
// projResponse - the location of the page to redirect to or author notes

const R2_DOMAIN = 'https://r2.eddwithoutthewar.com/';

//===== Radio Show Dets
export const listOfProjects = [
    {
        id:1,
        img:  `${radioShow}`,
        projTitle:'EDDPerience Radio',
        projDesc: 'Tune in to your friendly neighborhood radio host, DJ Eddperience. This project is where I share songs I listen to in the form of a radio show. This project will be a series, so expect updated episodes in the future!',
        projAction:'REDIRECT',
        projResponse: '/radio' 
    },
    {
        id:2,
        img: `${techBro}`,
        projTitle:'Tech Bro Dracula',
        projDesc: `This project is a script I'm working on using Dracula's public domain. The premise is that Dracula is struggling to survive in a world filled with modern-day technology and apps, making it challenging to suck blood while staying incognito. To avoid dying from starvation, Dracula reluctantly embraces the very thing he hates—technology—and transforms into a Tech Bro to satisfy his hunger.`,
        projAction:'POPUP',
        projResponse:`${R2_DOMAIN}tbd_rough_draft.pdf`
    },
    {
        id:3,
        img: `${techBro}`,
        projTitle:'Crochet Corner',
        projDesc: "I enjoy making crochet projects especially of the cat ear shapped variety. Check out some pieces I've made and if you like what you see I do COMMISSIONS!!",
        projAction:'REDIRECT',
        projResponse:`/crochet`
    },
    {
        id:4,
        img: `${girlDdance}`,
        projTitle:'The Gals Just Want to Dance',
        projDesc: 'This will be a music project that will consist of tracks produced by me. The project is planned to have 6 or more songs that will be inspired by multiple genres (Funk, Disco, R&B, House, Etc). Album cover is based on a true story.',
        projAction:'OTHER',
        projResponse: `Author notes: One of the inspirations behind making this album is based on a convo I had with a friend about the state of music in clubs. I wanted to go beyond making a playlist and make my own music that women can dance to. Even Though I never made music in my life, I'm good at this
         music shit. I don't have a release date, but please be patient :D`
    },

];

