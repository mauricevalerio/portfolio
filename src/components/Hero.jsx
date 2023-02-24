import visionaryTechnology from '../assets/visionarytechnology.svg'

export default function Hero() {
    return (
        <section id='hero' className='component-layout primary-color padding'>
            <div className='component-child title'>
                <h1>&#60;Maurice Valerio&#62;</h1>
                <h1>Front End</h1>
                <h1>Web Developer</h1>
            </div>

            <img src={visionaryTechnology} alt="Hero Doodles" className='component-child hero-image'/> 
        </section>
    )
}