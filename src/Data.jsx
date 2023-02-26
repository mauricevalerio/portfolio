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
        link: 'https://dancing-sopapillas-b63521.netlify.app/'
    },
    {
        name: 'Tenzies',
        link: 'https://frolicking-stardust-12172f.netlify.app/'
    },
    {
        name: 'Travel Journal',
        link: 'https://splendid-peony-346f38.netlify.app/'
    },
    {
        name: 'Movie Watchlist',
        link: 'https://fascinating-torrone-293b7c.netlify.app/'
    },
    {
        name: 'Color Scheme Generator',
        link: 'https://lustrous-cheesecake-9de9a2.netlify.app/'
    },
    {
        name: 'RPG Card Game',
        link: 'https://benevolent-lokum-7f63bf.netlify.app/'
    },
    {
        name: 'Tindog',
        link: 'https://elaborate-swan-15c4f9.netlify.app/'
    },
    {
        name: 'Twimba',
        link: 'https://resilient-crepe-6cadd2.netlify.app/'
    },
    {
        name: 'Oldagram',
        link: 'https://incredible-taffy-a57e9c.netlify.app/'
    },
    {
        name: 'Food Order',
        link: 'https://loquacious-croquembouche-8426e6.netlify.app/'
    },
    {
        name: 'Basketball Scoreboard',
        link: 'https://fabulous-smakager-935376.netlify.app/'
    },
]

/* SOCIAL MEDIA DATA */
export const socialMedia = {
    github: 'https://github.com/mauricevalerio',
    linkedin: 'https://www.linkedin.com/in/maurice-albert-valerio/',
    facebook: 'https://www.facebook.com/mauricevalerio29/',
    instagram: 'https://www.instagram.com/mauricevalerioo/'
}

/* JSX ABOUT ME AND CONTACT ME CONTENT ELEMENTS */
export const AboutMeJsx = (
    <div>
        <p>Hello, I'm Maurice Valerio a <span className='underline-color'>Front End Web Developer</span> and soon to be Full Stack Web Developer. I'm currently working as a IT Specialist in CA, USA.</p>
        <p>Developing web applications is a way for me to express and communicate myself with others around the world. I always implement <span className='underline-color'>DRY code principle</span> as much as possible simply because it makes web applications faster and efficient due to lesser code.</p>
        <p>When I'm not coding, I play games in my console and do daily kettlebell trainings.</p>
    </div>
)

export const ContactMeJsx = (
    <p>I'm <span className='underline-color'>actively looking for a entry level developer job</span>! If you think I'm a good candidate for your company, please don't hesitate to reach me! We can also discuss any freelance projects.</p> 
)

export const projectJsx = (
    <div>
        <p>Currently, all of the projects listed are either solo or guided projects from <a href='https://scrimba.com/' target='_blank' className='scrimba-link'>Scrimba</a>. I always add features when its a guided project to help me practice working on code bases.</p>
        <p>I'm also in the process of converting all projects into React as practice. </p>
    </div>
)