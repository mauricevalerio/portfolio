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
import { faSquareFacebook, faSquareInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import quizzical from './assets/project-icons/quizzical.svg'
import tenzies from './assets/project-icons/tenzies.svg'
import travelJournal from './assets/project-icons/travel-journal.svg'
import movieWatchlist from './assets/project-icons/movie-watchlist.svg'
import colorScheme from './assets/project-icons/color-scheme.svg'
import rpgCardGame from './assets/project-icons/rpg-card-game.svg'
import tindog from './assets/project-icons/tindog.svg'
import twimba from './assets/project-icons/twimba.svg'
import oldagram from './assets/project-icons/oldagram.svg'
import food from './assets/project-icons/food.svg'
import basketball from './assets/project-icons/basketball.svg'

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
        name: 'Travel Journal',
        link: 'https://splendid-peony-346f38.netlify.app/',
        iconName: travelJournal
    },
    {
        name: 'Movie Watchlist',
        link: 'https://fascinating-torrone-293b7c.netlify.app/',
        iconName: movieWatchlist
    },
    {
        name: 'Color Scheme Generator',
        link: 'https://lustrous-cheesecake-9de9a2.netlify.app/',
        iconName: colorScheme
    },
    {
        name: 'RPG Card Game',
        link: 'https://benevolent-lokum-7f63bf.netlify.app/',
        iconName: rpgCardGame
    },
    {
        name: 'Tindog',
        link: 'https://elaborate-swan-15c4f9.netlify.app/',
        iconName: tindog
    },
    {
        name: 'Twimba',
        link: 'https://resilient-crepe-6cadd2.netlify.app/',
        iconName: twimba
    },
    {
        name: 'Oldagram',
        link: 'https://incredible-taffy-a57e9c.netlify.app/',
        iconName: oldagram
    },
    {
        name: 'Food Order',
        link: 'https://loquacious-croquembouche-8426e6.netlify.app/',
        iconName: food
    },
    {
        name: 'Basketball Scoreboard',
        link: 'https://fabulous-smakager-935376.netlify.app/',
        iconName: basketball
    },
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
    },
    {
        fontAwesomeIcon: faSquareFacebook,
        link: 'https://www.facebook.com/mauricevalerio29/',
    },
    {
        fontAwesomeIcon: faSquareInstagram,
        link: 'https://www.instagram.com/mauricevalerioo/',
    },
]

/* JSX ABOUT ME AND CONTACT ME CONTENT ELEMENTS */
export const AboutMeJsx = (
    <div>
        <p>Hello, I'm Maurice Valerio a <span className='underline-color'>Front End Web Developer</span> and soon to be Full Stack Web Developer. I'm currently working as a IT Specialist in CA, USA.</p>
        <p>I specialize in <span className='underline-color'>HTML5, CSS3, JavaScript, and SQL</span> and also have an <span className='underline-color'>intermediate knowledge in ReactJS</span>. I always implement DRY code principle as much as possible simply because it makes web applications faster and efficient due to lesser code.</p>
        <p>When I'm not coding, I play games in my console and do daily kettlebell trainings.</p>
    </div>
)

export const ContactMeJsx = (
    <p>I'm <span className='underline-color'>actively looking for a entry level developer job</span>! If you think I'm a good candidate for your company, please don't hesitate to reach me! We can also discuss any freelance projects.</p> 
)

export const projectJsx = (
    <div>
        <p>Currently, all of the projects listed are either solo or guided projects from <a href='https://scrimba.com/' target='_blank' className='link strong'>Scrimba</a>. I always add features when its a guided project to help me practice working on code bases.</p>
        <p>I'm also in the process of converting all projects into React as practice. </p>
    </div>
)

export const footerJsx = (
    <div>
        <p className='margin-zero'>Built with <a href='https://vitejs.dev/' target='_blank' className='link strong'>React+Vite</a>
        , <a href='https://www.npmjs.com/package/react-burger-menu' target='_blank' className='link strong'>React Burger Menu</a>
        , and <a href='https://www.npmjs.com/package/react-animation-on-scroll' target='_blank' className='link strong'>React Animation Scroll</a>
        </p>
        <p className='margin-zero'>Logo and graphic design by <a href='https://www.instagram.com/artsyetph/' target='_blank' className='link strong'>artsyetph</a></p>
    </div>
)