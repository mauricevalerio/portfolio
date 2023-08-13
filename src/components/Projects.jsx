import { projectList } from '../data'

export default function Projects() {

    const projectElements = projectList.map((item, index) => (
        <div key={index} className='project-item-container'>
            <img src={item.img} alt={`${item.name} Project`} className='project-item-image'/>
            
            <div className='project-item-info'>
                <h3>{item.name}</h3>
                <p className='project-item-description'>{item.description}</p>

                <div className='tech-stack-container'>
                    {item.technologies.map((tech, index) => <img src={tech} className='tech-stack-item' key={index}/> )}
                </div>

                <div className='project-link-container'>
                    <a  href={item.link} target='_blank' className='project-item-link'>Live Site</a>
                    <a href={item.repo} target='_blank' className='project-item-link'>Code</a>
                </div>
            </div>
        </div>
    ))
    
    return (
        <>
            <h2 className='project-header'>Projects</h2>
            <div className='projects-container'>
                {projectElements}
            </div>
        </>
    )
}