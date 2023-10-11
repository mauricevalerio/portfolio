// SOCIAL MEDIA DATA
import github from './assets/social-icons/github.svg'
import mail from './assets/social-icons/mail.svg'
import linkedin from './assets/social-icons/linkedin.svg'
import frontendmentor from './assets/social-icons/frontendmentor.svg'
// SKILLS DATA
import html from './assets/language-icons/html5.svg'
import css from './assets/language-icons/css3.svg'
import bootstrap from './assets/language-icons/bootstrap.svg'
import javascript from './assets/language-icons/javascript.svg'
import react from './assets/language-icons/react.svg'
import node from './assets/language-icons/node.svg'
import express from './assets/language-icons/express.svg'
import mongodb from './assets/language-icons/mongodb.svg'
import sql from './assets/language-icons/sql.svg'
import bulma from './assets/language-icons/bulma.svg'
import tailwindcss from './assets/language-icons/tailwindcss.svg'
import typescript from './assets/language-icons/typescript.svg'
import git from './assets/language-icons/git.svg'
import figma from './assets/language-icons/figma.svg'
import sass from './assets/language-icons/sass.svg'
import firebase from './assets/language-icons/firebase.svg'
import reactrouter from './assets/language-icons/react-router.svg'
import redux from './assets/language-icons/redux.svg'
// SCRIMBA PROJECTS DATA

export const projectList = [
    // {
    //     name: 'Password Generator',
    //     link: 'https://passw0rdg3n3rat0r.netlify.app/'
    // },
    // {
    //     name: 'Food Order',
    //     link: 'https://f00d-orders.netlify.app/'
    // },
    {
        name: 'Kanban Task Management',
        description: 'Track your project progress or your own personal to-do list in this app',
        img: './project-images/kanban-task-management.png',
        technologies: [redux, react, typescript, bootstrap, tailwindcss, html, css],
        link: 'https://kanbantaskmgmt.netlify.app/',
        repo: 'https://github.com/mauricevalerio/frontendmentor-challenges/tree/main/kanban-task-management'
    },
    {
        name: 'Movie Watchlist',
        description: 'View trending movies and TVs and add them to your watchlist.',
        img: './project-images/mauvie.png',
        technologies: [reactrouter, react, tailwindcss, html, css, javascript],
        link: 'https://mauvie.netlify.app/',
        repo: 'https://github.com/mauricevalerio/scrimba-solo-projects/tree/main/m9-movie-tv-watchlist'
    },
    {
        name: 'Quizzical',
        description: 'Test every bit of your brain cells in this trivia quiz game. Select the number of questions, category, and difficulty to start!',
        img: './project-images/quizzical.png',
        technologies: [react, html, css, javascript],
        link: 'https://qu1zz1cal.netlify.app/',
        repo: 'https://github.com/mauricevalerio/scrimba-solo-projects/tree/main/m11-quizzical'
    },
    {
        name: 'Tenzies',
        description: 'Software version of the board game tenzies. Roll and match all dices as fast as possible and see yourself up on the leaderboards!',
        img: './project-images/tenzies.png',
        technologies: [react, html, css, javascript],
        link: 'https://tenz1es.netlify.app/',
        repo: 'https://github.com/mauricevalerio/scrimba-guided-projects/tree/main/m11-tenzies'
    },
    {
        name: 'Rock, Paper, Scissors',
        description: 'Can you beat a computer on a rock, paper, scissors game? Try out this game to know! Also has an option to set a game set score.',
        img: './project-images/rock-paper-scissors.png',
        technologies: [typescript, react, bootstrap, sass, html, css],
        link: 'https://r0ck-pap3r-scissors.netlify.app/',
        repo: 'https://github.com/mauricevalerio/frontendmentor-challenges/tree/main/rock-paper-scissors'
    },
    {
        name: 'Country List',
        description: 'Discover each country and its bordering countries by searching by name or filtering by regions. Switch also the theme website between dark and light modes.',
        img: './project-images/rest-countries.png',
        technologies: [typescript, react, reactrouter, sass, html, css],
        link: 'https://a-whole-new-world.netlify.app/',
        repo: 'https://github.com/mauricevalerio/frontendmentor-challenges/tree/main/rest-countries-api-with-color-theme-switcher'
    },
    {
        name: 'IP Address Tracker',
        description: 'Track and locate an IP address or domain around the world on a map.',
        img: './project-images/ip-address-tracker.png',
        technologies: [typescript, react, bulma, html, css],
        link: 'https://trackingip.netlify.app/',
        repo: 'https://github.com/mauricevalerio/frontendmentor-challenges/tree/main/ip-address-tracker'
    },
    {
        name: 'Static Job Listing',
        description: 'Filter jobs using tags in this static job listing site.',
        img: './project-images/static-job-finder.png',
        technologies: [typescript, react, sass, html, css],
        link: 'https://static-job-finder.netlify.app/',
        repo: 'https://github.com/mauricevalerio/frontendmentor-challenges/tree/main/static-job-listings'
    },
    {
        name: 'Interactive Comments',
        description: 'Reply, edit, delete, and add comments in this static interactive comments section page.',
        img: './project-images/interactive-comments.png',
        technologies: [typescript, react, bootstrap, html, css],
        link: 'https://interactive-social-media-comments.netlify.app/',
        repo: 'https://github.com/mauricevalerio/frontendmentor-challenges/tree/main/interactive-comments-section-main'
    },
    {
        name: 'Easybank Landing Page',
        description: 'Easybank landing and infopage. Next generation banking.',
        img: './project-images/easybank-landing-page.png',
        technologies: [typescript, react, html, sass],
        link: 'https://izibank.netlify.app/',
        repo: 'https://github.com/mauricevalerio/frontendmentor-landing-pages/tree/main/easybank-landing-page'
    },

]

// SOCIAL MEDIA ARRAY
export const socialMedia = [
    {
        name: 'Mail Icon',
        icon: mail,
        link: 'mailto:mauricealbertvalerio@gmail.com'
    },
    {
        name: 'LinkedIn Icon',
        icon: linkedin,
        link: 'https://www.linkedin.com/in/maurice-albert-valerio/',
    },
    {
        name: 'Frontendmentor Icon',
        icon: frontendmentor,
        link: 'https://www.frontendmentor.io/profile/mauricevalerio'
    },
    {
        name: 'GitHub Icon',
        icon: github,
        link: 'https://github.com/mauricevalerio',
    },
]

// SKILLS ARRAY
export const skillIcons = [
    {
        name: 'HTML',
        icon: html
    },
    {
        name: 'CSS',
        icon: css
    },
    {
        name: 'JavaScript',
        icon: javascript
    },
    {
        name: 'TypeScript',
        icon: typescript
    },
    {
        name: 'React',
        icon: react
    },
    {
        name: 'React Router',
        icon: reactrouter
    },
    {
        name: 'Git',
        icon: git
    },
    {
        name: 'Figma',
        icon: figma
    },
    {
        name: 'SASS/SCSS',
        icon: sass
    },
    {
        name: 'Tailwind',
        icon: tailwindcss
    },
    {
        name: 'Bulma',
        icon: bulma
    },
    {
        name: 'Bootstrap',
        icon: bootstrap
    },
    {
        name: 'NodeJS',
        icon: node
    },
    {
        name: 'Express',
        icon: express
    },
    {
        name: 'Firebase',
        icon: firebase
    },
    {
        name: 'SQL',
        icon: sql
    },
    {
        name: 'MongoDB',
        icon: mongodb
    }
]

