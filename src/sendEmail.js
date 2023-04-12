import emailjs from '@emailjs/browser'

export default function sendEmail(setIsLoading, setIsFormSubmitted, setIsSendingFailed, formData) {
    // emailjs.send('service_9oculcp', 'template_fmd1hsw', formData, 'SiBnDjVTgqD9VQ93b')
    emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formData, import.meta.env.VITE_PUBLIC_KEY)
        .then((response) => {
            if (response.status === 200) {
                setIsLoading(false)
                setIsFormSubmitted(true)

                setTimeout(() => {
                    setIsFormSubmitted(false)
                }, 2000)
            } else if (response.status === 0) {
                setIsSendingFailed(true)
                setIsLoading(false)
                setIsFormSubmitted(false)

                setTimeout(() => {
                    setIsSendingFailed(false)
                }, 2000)
            }
        }).catch(err => {
            if (err.status === 0) {
                setIsSendingFailed(true)
                setIsLoading(false)
                setIsFormSubmitted(false)

                setTimeout(() => {
                    setIsSendingFailed(false)
                }, 2000)
            }
            console.log(err)
        })
}