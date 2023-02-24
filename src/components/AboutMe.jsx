import { useState } from 'react'
import avatarImage from '../assets/avatar-picture.svg'
import { AboutMeJsx } from '../Data'

function AboutMe() {
    const [readMore, setReadMore] = useState(true)
    
    function toggleReadMore() {
        setReadMore(!readMore)
    }

    return (
        <section id='about-me' className='component-layout primary-color padding'>
            <div className='component-child'>
                <h2>About me</h2>
                <div>
                    {readMore ? 
                    <p>{AboutMeJsx.props.children[0].props.children}</p> 
                    : AboutMeJsx
                    }
                    <span
                        className='read-more-less'
                        onClick={toggleReadMore}>
                        {readMore ? 'Read more' : 'Read less'}
                    </span>
                </div>
 
            </div>
            <img src={avatarImage} alt='Avatar Image' className='component-child avatar-image'/>
        </section>
    )
}

export default AboutMe