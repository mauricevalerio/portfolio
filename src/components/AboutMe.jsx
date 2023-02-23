import { useState } from 'react'
import avatarImage from '../assets/avatar-picture.svg'
import { aboutMe } from '../Data'
import './AboutMe.css'

function AboutMe() {
    const [readMore, setReadMore] = useState(true)

    function toggleReadMore() {
        setReadMore(!readMore)
    }

    return (
        <section id='about-me' className='padding'>
            <div>
                <h2 className='primary-color'>
                    <span>About me</span>
                </h2>
                <div className='about-me-text'>
                    {readMore ? 
                    <p>{aboutMe.intro}</p> 
                    : <div>
                        <p>{aboutMe.intro}</p>
                        <p>{aboutMe.interestInWeb}</p>
                        <p>{aboutMe.hobbies}</p>
                    </div>
                    }
                </div>
                <span 
                    className='read-more-less'
                    onClick={toggleReadMore}>
                        {readMore ? 'Read more' : 'Read less'}
                </span>
            </div>
            <img src={avatarImage} alt='Avatar Image' className='avatar-image'/>
        </section>
    )
}

export default AboutMe