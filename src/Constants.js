// Static Imports
import tokVinyl from './assets/tok_vinyl.png';
import tokVinylCase from './assets/tok_vinyl_case_only.png';
import instaVinyl from './assets/insta_vinyl.png';
import instaVinylCase from './assets/insta_vinyl_case_only.png';

const R2_DOMAIN = 'https://r2.eddwithoutthewar.com/';
//=======================================================
// Radio Playback Buttons
export const PLAYBACK_BUTTON_SIZE = 45;

// Radio Playback Buttons
export const VOLUME_BUTTON_SIZE = 18;

// The Information containing each episode
export const RADIO_EP_INFO = [
    {
      id: 1,
      title:'Episode 1:',
      src: R2_DOMAIN + 'RadioEp1.mp3',
      epTitle: 'Trusting the process',
      thumbnail: R2_DOMAIN + 'radio_ep1.png', 
      alt:'A sideway containing pink hue color flowers on green grass. Displays artist watermark and the title: Ep.1'
    },  
    {
      id: 2,
      title:'Episode 2:',
      src: R2_DOMAIN + 'RadioEp2.mp3',
      epTitle: 'All About Love',
      thumbnail: R2_DOMAIN + 'radio_ep2.png',
      alt:'A display of white petaled flowers with bee landed on one of them. Displays artist watermark and the title: Ep.2'
    },
    {
      id: 3,
      title:'Episode 3:',
      src: R2_DOMAIN + 'RadioEp3.mp3',
      epTitle: 'Can I Get An Amen',
      thumbnail: R2_DOMAIN + 'radio_ep3.png',
      alt:'A display of church with a blue sky filled with white clouds. There is a sun in the sky with sunshades and the prayer hand emoji, surrounded by a halo crown. Displays artist watermark and the title: Ep.3'
    }, 
    {
      id: 4,
      title:'Episode 4:',
      src: R2_DOMAIN + 'RadioEp4.mp3',
      epTitle: 'Things Gon Be Aight',
      thumbnail: R2_DOMAIN + 'radio_ep4.png',
      alt:'A display of pink hued flowers after a rainy day. Displays artist watermark and the font "Episode" with a pink hued flame with the number 4 representing the fourth episode.'
    },
    {
      id: 5,
      title:'Episode 5:',
      src: R2_DOMAIN + 'RadioEp5.mp3',
      epTitle: 'Blue Eyed Soul White Dragon',
      thumbnail: R2_DOMAIN + 'radio_ep5.png',
      alt:'Modified version of the Blue Eyes White Dragon from YuGiOh. Displays Card of the Dragon with black shades and a bass guitar.'
    },
    {
      id: 6,
      title:'Episode 6:',
      src: R2_DOMAIN + 'RadioEp6.mp3',
      epTitle: 'High School of Rock',
      thumbnail: R2_DOMAIN + 'radio_ep6.png',
      alt:'Edited a highschool photo of myself. Has me with green flame hair, red shades and red scarf with white stars and an easter egg with Rawr XD on the paper'
    },
    {
      id: 7,
      title:'Episode 7:',
      src: R2_DOMAIN + 'RadioEp7.mp3',
      epTitle: 'For All The Lovers',
      thumbnail: R2_DOMAIN + 'radio_ep7.png',
      alt:'An edited picture of Arthur holding a vinyl with a heart shaped labeling with heart shaped glasses and flame hair.'
    },
    {
      id: 8,
      title:'Episode 8:',
      src: R2_DOMAIN + 'RadioEp8.mp3',
      epTitle: 'Jazz Hands',
      thumbnail: R2_DOMAIN + 'radio_ep8.png',
      alt:'An edited picture of Jazz players playing instruments. They all have music notes for heads except one that has flame hair and sleek shades.'
    },
    {
      id: 9,
      title:'Episode 9:',
      src: R2_DOMAIN + 'RadioEp9.mp3',
      epTitle: "I'm Every Woman",
      thumbnail: R2_DOMAIN + 'radio_ep9.png',
      alt:"An outline of a woman with headpones and shades holding a vinyl that connects to her headphones. Behind her displays albums covers relating to the songs in the episode with a border that displays the words: I'm Every Woman"
    },
    {
      id: 10,
      title:'Episode 10:',
      src: R2_DOMAIN + 'RadioEp10.mp3',
      epTitle: "A Beach Ting",
      thumbnail: R2_DOMAIN + 'radio_ep10.png',
      alt:"The radio host holds a pineapple drink while having shades and a flame head. The setting is a beach with speakers in the water, sea animals and a mermaid. This is the cover of the 10th episode"
    },
  ];


// Radio Show Song List Per Episode
export const RADIO_EP_TRACKLIST = [
    {
        // For Episode 1
        id: 1,
        radioTrackList: [
        { id: 'ep_1_song_1', songTitle: 'Boogie Oogie Oogie', artistCredit: 'A Taste of Honey', timestamp: 27 },
        { id: 'ep_1_song_2', songTitle: 'Freefall', artistCredit: 'KAYTRANADA (ft. Durand Bernarr)', timestamp: 366 },
        { id: 'ep_1_song_3', songTitle: 'The Highs & The Lows', artistCredit: 'Chance the Rapper (ft. Joey Bada$$)', timestamp: 554 },
        { id: 'ep_1_song_4', songTitle: 'KAYTRANADA_WAITIN_115 BPM', artistCredit: 'Kelela & KAYTRANADA', timestamp: 825 },
        { id: 'ep_1_song_5', songTitle: 'The Boss', artistCredit: 'Diana Ross', timestamp: 1161 },
        { id: 'ep_1_song_6', songTitle: 'Somtimes', artistCredit: 'DMX', timestamp: 1414 }
        ]
    }, 
    {
        // For Episode 2
        id: 2,
        radioTrackList: [
        { id: 'ep_2_song_1', songTitle: 'A Little Bit of Love', artistCredit: 'Brenda Russell', timestamp: 30 },
        { id: 'ep_2_song_2', songTitle: 'Born to Love', artistCredit: 'Peabo Bryson & Roberta Flack', timestamp: 319 },
        { id: 'ep_2_song_3', songTitle: 'I Love Me Some Him', artistCredit: 'Toni Braxton', timestamp: 601 },
        { id: 'ep_2_song_4', songTitle: 'Luv U Better', artistCredit: 'LL Cool J', timestamp: 922 },
        { id: 'ep_2_song_5', songTitle: 'Ribbon In the Sky', artistCredit: 'Stevie Wonder', timestamp: 1177 },
        { id: 'ep_2_song_6', songTitle: 'Share Your Love', artistCredit: 'Angela Bofill', timestamp: 1559 }
        ]
    },
    {
        // For Episode 3
        id: 3,
        radioTrackList: [
        { id: 'ep_3_song_1', songTitle: 'Full Moon', artistCredit: 'Brandy', timestamp: 27 },
        { id: 'ep_3_song_2', songTitle: 'Love Will Save the Day', artistCredit: 'Whitney Houston', timestamp: 273.5 },
        { id: 'ep_3_song_3', songTitle: 'Just Like', artistCredit: 'Marvin Gaye', timestamp: 606.5 },
        { id: 'ep_3_song_4', songTitle: 'One Step Ahead', artistCredit: 'Aretha Franklin', timestamp: 856 },
        { id: 'ep_3_song_5', songTitle: 'Nothing Can Stop Me', artistCredit: 'Cissy Houston', timestamp: 1022 },
        { id: 'ep_3_song_6', songTitle: 'Never Knew Love Like This Before', artistCredit: 'Stephanie Mills', timestamp: 1338 }
        ]
    },
    {
        // For Episode 4
        id: 4,
        radioTrackList: [
        { id: 'ep_4_song_1', songTitle: 'You Gotta Be', artistCredit: 'Des\'ree', timestamp: 30 },
        { id: 'ep_4_song_2', songTitle: 'Cranes in the Sky', artistCredit: 'Solange', timestamp: 285.5 },
        { id: 'ep_4_song_3', songTitle: 'Alright', artistCredit: 'Kendrick Lamar', timestamp: 568 },
        { id: 'ep_4_song_4', songTitle: 'Golden', artistCredit: 'Jill Scott', timestamp: 775 },
        { id: 'ep_4_song_5', songTitle: 'It Gets Better (With Time)', artistCredit: 'The Internet', timestamp: 1001 },
        { id: 'ep_4_song_6', songTitle: 'Someday We\'ll All Be Free', artistCredit: 'Donny Hathaway', timestamp: 1288 }
        ]
    },
    {
        // For Episode 5
        id: 5,
        radioTrackList: [
        { id: 'ep_5_song_1', songTitle: 'Nakamarra', artistCredit: 'Hiatus Kaiyote (ft Q-Tip)', timestamp: 29 },
        { id: 'ep_5_song_2', songTitle: 'The List', artistCredit: 'Moonchild', timestamp: 314 },
        { id: 'ep_5_song_3', songTitle: 'Leavin\'', artistCredit: 'Jesse McCartney', timestamp: 634.3 },
        { id: 'ep_5_song_4', songTitle: 'Take It From Here', artistCredit: 'Justin Timberlake', timestamp: 862 },
        { id: 'ep_5_song_5', songTitle: 'Wake Up Alone', artistCredit: 'Amy Winehouse', timestamp: 1251.3 },
        { id: 'ep_5_song_6', songTitle: 'Open Your Eyes', artistCredit: 'Bobby Caldwell', timestamp: 1511.3 }
        ]
    },
    {
        // For Episode 6
        id: 6,
        radioTrackList: [
        { id: 'ep_6_song_1', songTitle: 'When You Were Young', artistCredit: 'The Killers', timestamp: 25 },
        { id: 'ep_6_song_2', songTitle: 'Thnks fr th Mmrs', artistCredit: 'Fall Out Boy', timestamp: 258 },
        { id: 'ep_6_song_3', songTitle: 'An Honest Mistake', artistCredit: 'The Bravery', timestamp: 472 },
        { id: 'ep_6_song_4', songTitle: 'Sun Red Sky Blue', artistCredit: 'Kenna', timestamp: 706 },
        { id: 'ep_6_song_5', songTitle: 'Laser Life', artistCredit: 'The Blood Brothers', timestamp: 965 },
        { id: 'ep_6_song_6', songTitle: 'Wolf Like Me', artistCredit: 'TV On The Radio', timestamp: 1156 }
        ]
    },
    {
        // Episode 7
        id: 7,
        radioTrackList: [
            { id: 'ep_7_song_1', songTitle: 'If You Love Me', artistCredit: 'Brownstone'},
            { id: 'ep_7_song_2', songTitle: 'All That I Can Say', artistCredit: 'Mary J Blige'},
            { id: 'ep_7_song_3', songTitle: 'Closer (Ode to You)', artistCredit: 'Ravyn Lenae'}, 
            { id: 'ep_7_song_4', songTitle: 'Be Your Girl (Kaytranada Mix)', artistCredit: 'Teedra Moses (ft Kaytranada)'},
            { id: 'ep_7_song_5', songTitle: 'I Knew That Love', artistCredit: 'Eighties Ladies'},
            { id: 'ep_7_song_6', songTitle: 'Love Can Be', artistCredit: 'Vince Staples'},
            { id: 'ep_7_song_7', songTitle: 'Cameo Lover', artistCredit: 'Kimbra'},
            { id: 'ep_7_song_8', songTitle: 'Rock With You', artistCredit: 'Michael Jackson'},
            { id: 'ep_7_song_9', songTitle: "Why Don't We Fall in Love", artistCredit: 'Amerie'}, 
            { id: 'ep_7_song_10', songTitle: 'Nite and Day', artistCredit: 'Al B. Sure!'},
            { id: 'ep_7_song_11', songTitle: 'All I Do', artistCredit: 'Stevie Wonder'},
            { id: 'ep_7_song_12', songTitle: 'You Don’t Know My Name', artistCredit: 'Alicia Keys'},
            { id: 'ep_7_song_13', songTitle: 'Make It Last Forever', artistCredit: 'Keith Sweat'},
            { id: 'ep_7_song_14', songTitle: 'A Song Of Love', artistCredit: 'Lonnie Liston Smith & the Cosmic Echoes'},
            { id: 'ep_7_song_15', songTitle: 'Love, Love, Love', artistCredit: 'Donny Hathaway'},
            { id: 'ep_7_song_16', songTitle: 'Tender Kisses', artistCredit: 'Tracie Spencer'},
            { id: 'ep_7_song_17', songTitle: 'Whenever, Whatever, Wherever', artistCredit: 'Maxwell'},
        ]
    },
    {
        // Episode 8
        id: 8,
        radioTrackList: [
            { id: 'ep_8_song_1', songTitle: 'Seven Steps to Heaven', artistCredit: 'Miles Davis', timestamp: 23 },
            { id: 'ep_8_song_2', songTitle: 'Wave', artistCredit: 'Ahmad Jamal Trio', timestamp: 413 },
            { id: 'ep_8_song_3', songTitle: 'Nardis', artistCredit: 'Bill Evans Trio', timestamp: 692 },
            { id: 'ep_8_song_4', songTitle: 'Nothing Serious', artistCredit: 'Roy Hargrove', timestamp: 1058 },
            { id: 'ep_8_song_5', songTitle: 'Rush', artistCredit: 'Seatbelts', timestamp: 1306 },
            { id: 'ep_8_song_6', songTitle: 'My Favorite Things', artistCredit: 'John Coltrane', timestamp: 1556 }
        ]
    },
    {
      // Episode 9
      id: 9,
      radioTrackList: [
          { id: 'ep_9_song_1', songTitle: 'Contact', artistCredit: 'Kelela'},
          { id: 'ep_9_song_2', songTitle: 'On My Mind (Jorja Smith X Preditah)', artistCredit: 'Jorja Smith, Preditah'},
          { id: 'ep_9_song_3', songTitle: 'Someone To Call My Lover', artistCredit: 'Janet Jackson'},
          { id: 'ep_9_song_4', songTitle: 'Persuasive (with SZA)', artistCredit: 'Doechii, SZA'},
          { id: 'ep_9_song_5', songTitle: 'COZY', artistCredit: 'Beyoncé'},
          { id: 'ep_9_song_6', songTitle: 'Venom', artistCredit: 'Ravyn Lenae'},
          { id: 'ep_9_song_7', songTitle: 'Boyz', artistCredit: 'M.I.A'},
          { id: 'ep_9_song_8', songTitle: 'Miss Camaraderie', artistCredit: 'Azealia Banks'},
          { id: 'ep_9_song_9', songTitle: 'I Must Apologise', artistCredit: 'PinkPantheress'},
          { id: 'ep_9_song_10', songTitle: 'Gabby (ft. Janelle Monáe)', artistCredit: 'The Internet, Janelle Monáe'},
          { id: 'ep_9_song_11', songTitle: 'Pressure', artistCredit: 'Ari Lennox'},
          { id: 'ep_9_song_12', songTitle: 'Pour It Up', artistCredit: 'Rihanna'},
          { id: 'ep_9_song_13', songTitle: 'Know You Now', artistCredit: 'Amy Winehouse'},
          { id: 'ep_9_song_14', songTitle: "Didn't Cha Know", artistCredit: 'Erykah Badu'},
          { id: 'ep_9_song_15', songTitle: 'Almeda', artistCredit: 'Solange'},
          { id: 'ep_9_song_16', songTitle: 'Never Lose Me', artistCredit: 'Flo Milli'},
          { id: 'ep_9_song_17', songTitle: 'Jerk Ribs', artistCredit: 'Kelis'},
          { id: 'ep_9_song_18', songTitle: 't r a n s p a r e n t s o u l (ft. Travis Barker) ', artistCredit: 'WILLOW, Travis Barker'},
          { id: 'ep_9_song_19', songTitle: 'Quicksand', artistCredit: 'SZA'},
          { id: 'ep_9_song_20', songTitle: "I'm Every Woman", artistCredit: 'Whitney Houston'}
      ]
  },
  {
    // Episode 10
    id: 10,
    radioTrackList: [
        { id: 'ep_10_song_intro', songTitle: 'Body Language - Intro', artistCredit: 'Kali Uchis', timestamp: 0},
        { id: 'ep_10_song_1', songTitle: 'Count Contessa', artistCredit: 'Azealia Banks, Lone', timestamp: 26},
        { id: 'ep_10_song_2', songTitle: 'Do 2 Me', artistCredit: 'KAYTRANADA ft.Anderson .Paak & SiR', timestamp: 334},
        { id: 'ep_10_song_3', songTitle: 'U Say', artistCredit: 'Goldlink ft. Tyler,The Creator & Jay Princr', timestamp: 587},
        { id: 'ep_10_song_4', songTitle: 'Closer to Me -edit', artistCredit: 'Kokoroko', timestamp: 805},
        { id: 'ep_10_song_5', songTitle: 'Pop Thieves (Make It Feel Good)', artistCredit: 'Childish Gambino ft Jaden Smith', timestamp: 1036},
        { id: 'ep_10_song_outro', songTitle: 'Dontcha', artistCredit: 'The Internet', timestamp: 1253},
        { id: 'ep_10_song_6', songTitle: 'All Night', artistCredit: 'Chance The Rapper ft Knox Fortune', timestamp: 1297}
    ]
  },
];

// The list of Social Vinyl
export const VINYL_LIST = [
    {
        id: 1,
        name: 'Tik Tok', 
        path: tokVinylCase,
        altPath: tokVinyl,
        descipt: 'Tik Tok Vinyl connecting to social media',
        webref: 'https://www.tiktok.com/@edollarsigns'
    }
    ,{
        id:2,
        name: 'Instagram', 
        path: instaVinylCase,
        altPath: instaVinyl,
        descipt: 'Instagram Vinyl connecting to social media',
        webref: 'https://www.instagram.com/ededd_or_eddy'
    }
]

// The banner text for the HomePage
export const bannerTexts = [
  'The Tenth Episode of EddPerience Radio is out NOW!!!',
  'Turning My Thoughts Into Reality',
  "A Creative Mind Is Useless Under Capitalism When It Doesn't Make Money",
  'Did You Drink Water Yet?',
  'Do Something For Yourself Today',
  'Music Making - In Progress',
  'Tech Bro Dracula - In Progress',
  'Have You Signed Up for the Newsletter?',
  "Don't Be Selfish With Your Art. SHARE IT!!!",
  "Believe In The Me That Believes In You"
];

