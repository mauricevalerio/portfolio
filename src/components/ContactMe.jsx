import { useState } from "react"
import './ContactMe.css'
import programmerImage from '../assets/programmer.svg'

export default function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    function handleInputChange(e) {
        const {name, value} = e.target
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        setFormData({
            name: '',
            email: '',
            message: ''
        })
    }
    
    return (
        <section id='contact-me' className='padding'>
            
            <div className='contact-me-inner'>
            <h2 className='contact-me-header primary-color'>Contact me</h2>
            <img src={programmerImage} alt='About Me Doodle' className='contact-me-image'/>
            </div>
            
            <form onSubmit={handleSubmit} autoComplete='off'>
                <div className='input-group'>
                    <label htmlFor='name' className='label-text'>Name</label>
                    <input 
                    type='text'
                    placeholder='Maurice'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required/>
                </div>

                <div className='input-group'>
                    <label htmlFor='email' className='label-text'>Email Address</label>
                    <input 
                    type='email'
                    placeholder='emailaddress@domain.com'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required/>
                </div>

                <div className='input-group'>
                    <label htmlFor='message' className='label-text'>Message</label>
                    <textarea 
                    name='message'
                    placeholder='I want to hire you!'
                    value={formData.message}
                    onChange={handleInputChange}
                    id='message'
                    required></textarea>
                </div>

                <button>Send Message</button>
            </form>
        </section>
    )
}