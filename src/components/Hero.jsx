import heroImage from '../assets/hero.svg'

export default function Hero() {
    return (
        <section id='hero' className='component-layout primary-color'>
            <div className='component-child-larger title'>
                <h1 className='name'>&#60;Maurice Valerio&#62;</h1>
                <h1 className='job-title'>Front End Web Developer</h1>
            </div>

            <img src={heroImage} alt="Hero Image" className='component-child hero-image'/> 
        </section>
    )
}