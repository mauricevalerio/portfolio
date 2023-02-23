import './ProjectItem.css'

function ProjectItem(props) {
    const { name, link } = props
    return (
        <div className='project-item-container'>
            <h3><a href={link} target='_blank' className='project-title'>{name}</a></h3>
            <img src="" alt="" />
        </div>
    )
}

export default ProjectItem