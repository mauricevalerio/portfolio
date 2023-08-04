import { skillIcons } from '../data'

export default function Skills() {
    const skillListElements = 
    skillIcons.map((skill, index) => (
        <div key={index} className='skill-item'>
            <img src={skill.icon} alt={skill.name} className='skill-icon'/>
            <span>{skill.name}</span>
        </div>
    ))
    return (
        <section className='skill-container'>
            {skillListElements}
        </section>
    )
}