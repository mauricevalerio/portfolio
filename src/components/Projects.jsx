import AvatarSkill from '../assets/avatar-skill.svg'
import { scrimbaProjects, frontendmentorProjects } from '../data'
import { useState } from 'react'

export default function Projects() {
    const [projectList, setProjectList] = useState('scrimba-projects')

    const projectElements = 
    (projectList === 'scrimba-projects' ? scrimbaProjects : frontendmentorProjects).map((item, index) => (
        <div key={index} className='project-item'>
            <img src={item.icon} alt={`${item.name} logo`} className='project-icon'/>
            <a href={item.link} target='_blank'>{item.name}</a>
        </div>
    ))

    const handleChange = (e) => setProjectList(e.target.value)
    
    return (
        <section>
            <img src={AvatarSkill} alt='Avatar using laptop' className='avatar-laptop'/>

            <div className='dropdown-container'>
                <select name='projectList'
                    value={projectList}
                    onChange={handleChange}
                >
                    <option value='scrimba-projects'>Scrimba Projects</option>
                    <option value='frontendmentor'>Frontendmentor Challenges</option>
                </select>
            </div>

            <div className='projects-container'>
                {projectElements}
            </div>
        </section>
    )
}