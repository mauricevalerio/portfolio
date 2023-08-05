import BackButton from '../components/BackButton'
import { frontendmentorProjects } from '../data'

export default function Frontendmentor() {
    const frontendmentorElements = frontendmentorProjects.map((item, index) => (
        <div key={index} className='list-item'>
            <img src={item.icon} alt={`${item.name} logo`} />
            <a href={item.link} target='_blank'>{item.name}</a>
        </div>
    ))

    return (
        <section className='frontendmentor'>
            <BackButton />
            <h2>Frontendmentor Challenges</h2>
            <div className='project-list'>
                {frontendmentorElements}
            </div>
        </section>
    )
}