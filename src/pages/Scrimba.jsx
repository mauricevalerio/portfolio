import BackButton from '../components/BackButton'
import { scrimbaSolo } from '../data'

export default function Scrimba() {
    const scrimbaSoloElements = scrimbaSolo.map((item, index) => (
        <div key={index} className='list-item'>
            <img src={item.icon} alt={`${item.name} logo`} />
            <a href={item.link} target='_blank'>{item.name}</a>
        </div>
    ))

    return (
        <section className='scrimba'>
            <BackButton />
            <h2>Solo Projects</h2>
            <div className='project-list'>
                {scrimbaSoloElements}
            </div>
        </section>
    )
}