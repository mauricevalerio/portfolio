import { skillIcons } from '../Data'
import avatarSkill from '../assets/avatar-skill.svg'

export default function Skills() {
    const skillListElements = skillIcons.map((skill, index) => {
        return <div key={index} className='skill-item'>
            <p className='skill-name margin-zero'>{skill.name}</p>
            <img src={skill.icon} alt={skill.name} className='skill-icon'/>
        </div>
    })
    return (
        <section id='skills' className='component-layout primary-color'>
            <div className='component-child skills-inner'>
                <h2>Technical Skills</h2>
                <img src={avatarSkill} alt='Avatar Skill' />
            </div>
            <div className='component-child skill-list'>
                {skillListElements}
            </div>
        </section>
    )
}