import AvatarSkill from '../assets/avatar-skill.svg'
import GitHub from '../assets/social-icons/github.svg'
import { scrimbaSolo, scrimbaGuided, frontendmentorProjects } from '../data'
import { useState } from 'react'

export default function Projects() {
    const [projectList, setProjectList] = useState('scrimba-solo')

    const scrimbaElements = 
    (projectList === 'scrimba-solo' ? scrimbaSolo :
    projectList === 'scrimba-guided' ? scrimbaGuided
    : frontendmentorProjects).map((item, index) => (
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
                    <option value='scrimba-solo'>Scrimba Solo Projects</option>
                    <option value='scrimba-guided'>Scrimba Guided Projects</option>
                    <option value='frontendmentor'>Frontendmentor Challenges</option>
                </select>

                {
                    <a 
                    href={
                        `https://github.com/mauricevalerio/${projectList === 'scrimba-solo' ? 'scrimba-solo-projects' 
                        : projectList === 'scrimba-guided' ? 'scrimba-guided-projects'
                        : 'frontendmentor-challenges'
                        }`}
                    target='_blank'
                    ><img src={GitHub} alt='GitHub Logo' className='repo-link'/></a>
                }
            </div>

            <div className='projects-container'>
                {scrimbaElements}
            </div>
        </section>
    )
}