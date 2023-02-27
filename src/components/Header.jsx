import { slide as Menu } from 'react-burger-menu'
import { useState, useEffect } from 'react'
import './Header.css'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [navbar, setNavbar] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    
    function changeNavbar() {
        if(window.scrollY > 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    const navElements = (
        <>
            <a href='#hero' className='nav-link' onClick={toggleMenu}>Home</a>
            <a href='#about-me' className='nav-link' onClick={toggleMenu}>About Me</a>
            <a href='#skills' className='nav-link' onClick={toggleMenu}>Skills</a>
            <a href='#projects' className='nav-link' onClick={toggleMenu}>Projects</a>
            <a href='#contact-me' className='nav-link' onClick={toggleMenu}>Contact</a>
        </>
    )

    function toggleMenu() {
        setIsOpen(prevState => !prevState)
    }

    useEffect(() => {
        function watchWidth() {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', watchWidth)
        window.addEventListener('scroll', changeNavbar)

        return () => (  window.removeEventListener('resize', watchWidth) )
    },[])

    return (
        width < 768 ?
            <Menu 
            width={'100%'}
            isOpen={isOpen}
            onOpen={toggleMenu}
            onClose={toggleMenu}
            right
            >
                {navElements}
            </Menu>
        :   
            <nav className={`component-layout ${navbar && 'sticky'}`}>
                {navElements}
            </nav>
    )
}
    
