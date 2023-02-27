import { slide as Menu } from 'react-burger-menu'
import { useState, useEffect } from 'react'
import './Header.css'

export default function Header() {
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
        width < 768 ?
        <Menu 
        width={width}
        isOpen={isOpen}
        onOpen={toggleMenu}
        onClose={toggleMenu}
        right
        pageWrapId={ "page-wrap" } 
        outerContainerId={ "outer-container" }
        >
            <a href='#hero' className='nav-link' onClick={toggleMenu}>Home</a>
            <a href='#about-me' className='nav-link' onClick={toggleMenu}>About Me</a>
            <a href='#skills' className='nav-link' onClick={toggleMenu}>Skills</a>
            <a href='#projects' className='nav-link' onClick={toggleMenu}>Projects</a>
            <a href='#contact-me' className='nav-link' onClick={toggleMenu}>Contact</a>
        </Menu>
        :
        <>
            {/* CSS IN INDEX.CSS */}
            <nav className='component-layout'>
            <a href='#hero' className='nav-link' onClick={toggleMenu}>Home</a>
            <a href='#about-me' className='nav-link' onClick={toggleMenu}>About Me</a>
            <a href='#skills' className='nav-link' onClick={toggleMenu}>Skills</a>
            <a href='#projects' className='nav-link' onClick={toggleMenu}>Projects</a>
            <a href='#contact-me' className='nav-link' onClick={toggleMenu}>Contact</a>
            </nav>
        </>
        // <Menu 
        // width={width > 768 ? '35%' : '100%'}
        // isOpen={isOpen}
        // onOpen={toggleMenu}
        // onClose={toggleMenu}
        // right
        // pageWrapId={ "page-wrap" } 
        // outerContainerId={ "outer-container" }
        // >
        //     <a href='#hero' className='nav-link' onClick={toggleMenu}>Home</a>
        //     <a href='#about-me' className='nav-link' onClick={toggleMenu}>About Me</a>
        //     <a href='#skills' className='nav-link' onClick={toggleMenu}>Skills</a>
        //     <a href='#projects' className='nav-link' onClick={toggleMenu}>Projects</a>
        //     <a href='#contact-me' className='nav-link' onClick={toggleMenu}>Contact</a>
        //     <div style={{display: 'flex', gap: '1.5em'}}>
        //         <a href={socialMedia.github} target='_blank' className='rotate-icon'>
        //             <FontAwesomeIcon icon={faGithub} size={iconStyles.size} color={iconStyles.color}/>
        //         </a>
        //         <a href={socialMedia.linkedin} target='_blank' className='rotate-icon'>
        //             <FontAwesomeIcon icon={faLinkedin} size={iconStyles.size} color={iconStyles.color}/>
        //         </a>
        //         <a href={socialMedia.facebook} target='_blank' className='rotate-icon'>
        //             <FontAwesomeIcon icon={faSquareFacebook} size={iconStyles.size} color={iconStyles.color}/>
        //         </a>
        //         <a href={socialMedia.instagram} target='_blank' className='rotate-icon'>
        //             <FontAwesomeIcon icon={faSquareInstagram} size={iconStyles.size} color={iconStyles.color}/>
        //         </a>
        //     </div>
        // </Menu>
    )
}
    
