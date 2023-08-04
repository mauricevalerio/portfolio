import BackButton from '../components/BackButton'
import GitHub from '../assets/social-icons/github.svg'
import { scrimbaSolo } from '../data'

export default function Scrimba() {
    const scrimbaSoloElements = scrimbaSolo.map((item, index) => (
        <div key={index} className='scrimba-item'>
            <img src={item.icon} alt={`${item.name} logo`} />
            <a href={item.link} target='_blank'>{item.name}</a>
        </div>

    ))

    return (
        <section className='scrimba'>
            <BackButton />
            <h2>Solo Projects</h2>
            <div className='scrimba-container'>
                {scrimbaSoloElements}
            </div>
        </section>
    )
}