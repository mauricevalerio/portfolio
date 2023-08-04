import { projects } from '../data'
import { Link } from 'react-router-dom'

export default function Projects() {
    const projectItemElements = projects.map((project, index) => (
        <div key={index} className='project-item'>
            <img src={project.icon} alt={project.name} className='project-icon'/>
            <Link to={`${project.link}`}>
                {project.name}
            </Link>
        </div>
    ))

    return (
        <section>
            <h2>Projects</h2>
            <div className='project-container'>
                {projectItemElements}
            </div>
        </section>
    )
}