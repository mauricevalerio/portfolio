import { projects, projectJsx } from '../Data'
import placeholder from '../assets/placeholder.svg'

export default function Projects() {
    const projectItemElements = projects.map((projectItem, index) => {
        return <div key={index} className='project-item-container'>
            <a href={projectItem.link} target='_blank' className='project-link'>
                <img src={placeholder} alt='' className='project-icon'/>
                <p className='project-title'>{projectItem.name}</p>
            </a>
        </div>
    })

    return (
        <section id='projects' className='component-layout primary-color'>
            <div className='component-child'>
                <h2>My Projects</h2>
                {projectJsx}
            </div>
            
            <div className='component-child'>
                <div className='phone phone-border'>
                    <div className='phone-mic'></div>
                    <div className='phone-screen phone-border'>{projectItemElements}</div>
                    <div className='phone-button'></div>
                </div>
            </div>
            
        </section>
    )
}