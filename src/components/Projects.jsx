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
        <section id="projects" className="padding">
            <h2>
                <span className="primary-color">My Projects</span>
            </h2>
            {projectItemElements}
        </section>
    )
}

export default Projects