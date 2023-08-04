import { Link } from 'react-router-dom'
import AvatarSkill from '../assets/avatar-skill.svg'

export default function BackButton() {
    return (
        <div>
            <h3><Link to="/">&#8592; Back</Link></h3>
            <img src={AvatarSkill} alt="Avatar using laptop" className='avatar-laptop'/>
        </div>
    )
}