/* SKILLS DATA */
import html from './assets/language-icons/html5.svg'
import css from './assets/language-icons/css3.svg'
import bootstrap from './assets/language-icons/bootstrap.svg'
import javascript from './assets/language-icons/javascript.svg'
import react from './assets/language-icons/react.svg'
import node from './assets/language-icons/node.svg'
import express from './assets/language-icons/express.svg'
import mongodb from './assets/language-icons/mongodb.svg'
import sql from './assets/language-icons/sql.svg'
import github from './assets/language-icons/github.svg'
import tailwindcss from './assets/language-icons/tailwindcss.svg'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import quizzical from './assets/project-icons/quizzical.svg'
import tenzies from './assets/project-icons/tenzies.svg'
import movieWatchlist from './assets/project-icons/movie-watchlist.svg'

export const skillIcons = [
    {
        name: 'HTML5',
        icon: html
    },
    {
        name: 'CSS3',
        icon: css
    },
    {
        name: 'Tailwind CSS',
        icon: tailwindcss
    },
    {
        name: 'Bootstrap',
        icon: bootstrap
    },
    {
        name: 'JavaScript',
        icon: javascript
    },
    {
        name: 'ReactJS',
        icon: react
    },
    {
        name: 'NodeJS',
        icon: node
    },
    {
        name: 'ExpressJS',
        icon: express
    },
    {
        name: 'SQL',
        icon: sql
    },
    {
        name: 'MongoDB',
        icon: mongodb
    },
    {
        name: 'GitHub',
        icon: github
    },
]

/* PROJECTS DATA */
export const projects = [
    {
        name: 'Quizzical',
        link: 'https://dancing-sopapillas-b63521.netlify.app/',
        iconName: quizzical
    },
    {
        name: 'Tenzies',
        link: 'https://frolicking-stardust-12172f.netlify.app/',
        iconName: tenzies
    },
    {
        name: 'Movie Watchlist',
        link: 'https://mauvie.netlify.app/',
        iconName: movieWatchlist
    }
]

/* SOCIAL MEDIA DATA */
export const socialMedia = [
    {
        fontAwesomeIcon: faGithub,
        link: 'https://github.com/mauricevalerio',
    },
    {
        fontAwesomeIcon: faLinkedin,
        link: 'https://www.linkedin.com/in/maurice-albert-valerio/',
    }
]

/* JSX ABOUT ME AND CONTACT ME CONTENT ELEMENTS */
export const AboutMeJsx = (
    <div>
        <p>Provides efficient solutions and turns ideas into reality using my specialized skills in <span className='underline-color'>HTML5, CSS3, JavaScript, ReactJS, and SQL</span>. A fan of DRY code principle not because of creating something efficient but making the code base easier to maintain.</p>
        <p>Full Stack Web Developer in training and currently practicing on ExpressJS, NodeJS, and MongoDB. I'm currently working as a IT Specialist in CA, USA.</p>
        <p>Casual console gamer, fan of kettlebells and coffee.</p>
    </div>
)

export const ContactMeJsx = (
    <p>I'm <span className='underline-color'>actively looking for a entry level developer job</span>! If you think I'm a good candidate for your company, please don't hesitate to reach me! We can also discuss any freelance projects.</p> 
)

export const projectJsx = (
    <div>
        <p>Projects are focused heavily on HTML, CSS, Tailwind CSS, JavaScript, and React. Currently refactoring JavaScript code into React code.</p>
    </div>
)

export const footerJsx = (
    <div>
        <p className='margin-zero'>Built with <a href='https://vitejs.dev/' target='_blank' className='link strong'>React+Vite</a>
        , <a href='https://www.npmjs.com/package/react-burger-menu' target='_blank' className='link strong'>React Burger Menu</a>
        , <a href='https://www.npmjs.com/package/react-animation-on-scroll' target='_blank' className='link strong'>React Animation Scroll</a>
        , and <a href='https://www.emailjs.com/' target='_blank' className='link strong'>EmailJS</a>
        </p>
        <p className='margin-zero'>Logo and graphic design by <a href='https://www.instagram.com/artsyetph/' target='_blank' className='link strong'>artsyetph </a>
        and <a href='https://fontawesome.com/' target='_blank' className='link strong'>Font Awesome</a>
        </p>
    </div>
)