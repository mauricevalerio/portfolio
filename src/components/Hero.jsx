import './Hero.css'
import visionaryTechnology from '../assets/visionarytechnology.svg'

export default function Hero() {
    return (
        <section id='hero' className='padding'>
            <div className='title'>
                <h1 className='primary-color'>Front End</h1>
                <h1 className='primary-color'> Web Developer</h1>
            </div>
            
            <div className='hero-image'>
                <img src={visionaryTechnology} alt="Hero Doodles" /> 
            </div>
        </section>
    )
}