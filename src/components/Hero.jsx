import './Hero.css'
import visionaryTechnology from '../assets/visionarytechnology.svg'

export default function Hero() {
    return (
        <section id='hero' className='padding'>
            <div className='title'>
                <h1 className='basic-animation name primary-color'>&#60;Maurice Valerio&#62;</h1>
                <h1 className='basic-animation first-title primary-color'>&#60;Front End</h1>
                <h1 className='basic-animation second-title primary-color'> Web Developer/&#62;</h1>
            </div>
            
            <div className='hero-image'>
                <img src={visionaryTechnology} alt="Hero Doodles" /> 
            </div>
        </section>
    )
}