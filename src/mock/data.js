import { nanoid } from 'nanoid';


export const siteMetadata =  {
  title: `Alexander Rossi`,
  description: `Alexander is a Software Developer with over 3 years of experiences in a wide range of disciplines. Constantly in back-end development, learning and experiencing new things.`,
  author: `@alexander__rossi`,
  keywords: ['Alexander Rossi', 'personal', 'portfolio', 'experience', 'freelance', 'student', 'engineer', 'software', 'developer'],
  contact: 'burnwood1911@gmail.com',
  image: 'https://alphaolomi.com/img/thumbnail.png',
  site_name: 'Alexander Rossi // Software Developer',
  website:'https://gallant-aryabhata-ec38e7.netlify.app/',
  lang:'en'
};


// HEAD DATA
export const headData = {
  title: 'Alexander Rossi', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Alexander Rossi is a software developer with over 3 years of experiences in a wide range of disciplines. Constantly in back-end development, learning and experiencing new things.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Alexander Rossi',
  subtitle: 'I\'m the Missing Developer.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'alex.jpg',
  paragraphOne: 'Hi there, My name is Alexander Rossi . A software developer based in Tanzania. Passionate about technology and open source software that have positive impact to the society. Also, constantly developing new skills and learning from other developers in the software development sphere. I’m interest in Full stack development and Cyber security.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'image1.jpg',
    title: 'CinemaApp',
    info: 'A Beautiful Cinema App For Booking Tickets with exemplary features and multiplatform on both IOS and ANDROID operating systems.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
   {
     id: nanoid(),
     img: 'image2.jpg',
     title: 'BlogApp',
     info: 'A Modern day blog app with cross cutting features for all journalism lovers.',
     info2: '',
     url: '',
     repo: '', // if no repo, the button will not show up
   },
   {
     id: nanoid(),
     img: 'image3.jpg',
     title: 'FoodApp',
     info: 'An elegant food ordering app for small and starting food chains and restaurants.',
     info2: '',
     url: '',
     repo: '', // if no repo, the button will not show up
   },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'burnwood1911@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/burnw00d',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/burnwood',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/alex-rossi-108a63224',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/burnwood1911',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

export default {
  headData,
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
  githubButtons,
};
