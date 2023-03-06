import { useState } from 'react'
import { ContactMeJsx, socialMedia } from '../Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import sendEmail from '../sendEmail'

export default function ContactMe() {
    const iconStyles = {
        size: '3x',
        color: '#494136'
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [isSendingFailed, setIsSendingFailed] = useState(false)
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    function handleInputChange(e) {
        const {name, value} = e.target
        setFormData(prevFormData => ({ ...prevFormData, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        sendEmail(setIsLoading, setIsFormSubmitted, setIsSendingFailed, formData)
        setFormData({
            name: '',
            email: '',
            message: ''
        })
    }

    const socialMediaElements = socialMedia.map((socialMediaItem, index) => {
        return <a href={socialMediaItem.link} key={index} target='_blank' className='rotate-icon'>
            <FontAwesomeIcon icon={socialMediaItem.fontAwesomeIcon} size={iconStyles.size} color={iconStyles.color}/>
        </a>
    })
    
    return (
        <section id='contact-me' className='component-layout'>
            
            <div className='component-child'>
                <h2 className='primary-color'>Contact me</h2>
                {ContactMeJsx}
                <div className='social-media'>
                    {socialMediaElements}
                </div>
            </div>
            
            <form onSubmit={handleSubmit} autoComplete='off' className='component-child'>
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
                    placeholder="Let's Connect!"
                    value={formData.message}
                    onChange={handleInputChange}
                    id='message'
                    required>
                    </textarea>
                </div>

                <div className='loading'>
                    <button disabled={isLoading}>Send Message</button>
                    {isLoading && <span className='basic'></span>}
                    {isFormSubmitted && <span className='message-sent success'>Message Sent</span>}
                    {isSendingFailed && <span className='message-sent failed'>Message Sent Failed! Please make sure you're connected to the internet</span>}
                </div>
                
            </form>
        </section>
    )
}