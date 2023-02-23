import './Projects.css'
import ProjectItem from './ProjectItem'
import { projects } from '../Data'

function Projects() {
    const projectItemElements = projects.map((projectItem, index) => {
        return <ProjectItem 
            key={index}
            name={projectItem.name}
            link={projectItem.link}
        />
    })

    return (
        <section id='projects' className='padding'>
            <h2 className='projects-header primary-color'>My Projects</h2>
            <div className='project-container'>
                {projectItemElements}
            </div>
        </section>
    )
}

export default Projects