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
        img: `${girlDdance}`,
        projTitle:'The Gals Just Want to Dance',
        projDesc: 'This project is a music album of tracks that women wanna dance to. The album is planned to have 6 or more songs and will be inspired by multiple genres (Funk, Disco, R&B, House, Etc). Album cover is based on a true story and is one of my inspirations behind making this album.',
        projAction:'POPUP',
        projResponse: `Author notes: I don't have a release date, so please be patient. I have a vision of what I want the album to be like and working on making it a reality!! Just wait on it while I learn Music Theory :D`
    },
    {
        id:3,
        img: `${techBro}`,
        projTitle:'Tech Bro Dracula',
        projDesc: `This project is a script I'm working on using Dracula's public domain. The premise is that Dracula is struggling to survive in a world filled with modern-day technology and apps, making it challenging to suck blood while staying incognito. To avoid dying from starvation, Dracula reluctantly embraces the very thing he hates—technology—and transforms into a Tech Bro to satisfy his hunger.`,
        projAction:'POPUP',
        projResponse:`Author notes: Currently working on the rough draft pilot script. Will post when completed...33 pages done so far!`
    },
];

