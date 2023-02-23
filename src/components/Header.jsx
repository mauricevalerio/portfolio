import { slide as Menu } from 'react-burger-menu'
import { useState, useEffect } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faSquareInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { socialMedia } from '../Data'

export default function Header() {
    const iconStyles = {
        size: '3x',
        color: '#323232'
    }
    const [isOpen, setIsOpen] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    
    function toggleMenu() {
        setIsOpen(prevState => !prevState)
    }

    useEffect(() => {
        function watchWidth() {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', watchWidth)

        return () => (  window.removeEventListener('resize', watchWidth) )
    },[])

    return (
        <Menu 
        width={width > 768 ? '30%' : '100%'}
        isOpen={isOpen}
        onOpen={toggleMenu}
        onClose={toggleMenu}
        right
        pageWrapId={ "page-wrap" } 
        outerContainerId={ "outer-container" }
        >
            <a href='#hero' className='nav-link' onClick={toggleMenu}>Home</a>
            <a href='#about-me' className='nav-link' onClick={toggleMenu}>About Me</a>
            <a href='#projects' className='nav-link' onClick={toggleMenu}>Projects</a>
            <a href='#contact-me' className='nav-link' onClick={toggleMenu}>Contact</a>
            <div style={{display: 'flex', gap: '1.5em'}}>
                <a href={socialMedia.github} target='_blank' className='rotate-icon'>
                    <FontAwesomeIcon icon={faGithub} size={iconStyles.size} color={iconStyles.color}/>
                </a>
                <a href={socialMedia.linkedin} target='_blank' className='rotate-icon'>
                    <FontAwesomeIcon icon={faLinkedin} size={iconStyles.size} color={iconStyles.color}/>
                </a>
                <a href={socialMedia.facebook} target='_blank' className='rotate-icon'>
                    <FontAwesomeIcon icon={faSquareFacebook} size={iconStyles.size} color={iconStyles.color}/>
                </a>
                <a href={socialMedia.instagram} target='_blank' className='rotate-icon'>
                    <FontAwesomeIcon icon={faSquareInstagram} size={iconStyles.size} color={iconStyles.color}/>
                </a>
            </div>
        </Menu>
    )
}
    
