import avatarImage from '../assets/avatar.svg'
import { socialMedia } from '../data'

export default function Header() {
    const socialMediaElements = 
    socialMedia.map((social, index) => 
        <a href={social.link} key={index} target='_blank'>
            <img src={social.icon} alt={social.name} className='social-icon'/>
        </a>
    )
    
    return (
        <header className='header'>
            <div>
                <h1 className='name'>Maurice Valerio</h1>
                <h2 className='title'>Junior Front End Developer</h2>

                <div className='social-container'>
                    {socialMediaElements}
                </div>
            </div>

            <img src={avatarImage} alt='Avatar Image' className='avatar'/>
        </header>
    )
}