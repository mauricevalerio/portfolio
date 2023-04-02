import { AnimationOnScroll } from 'react-animation-on-scroll'
import 'animate.css/animate.min.css'

export default function AddAnimation(props) {
    return (
        props.arrayComponent.map((component, index) => {
            return <AnimationOnScroll key={index}
            animateIn='animate__fadeInUp'
            animationScrollDuration = {1}
            animateOnce={true}>
                {component}
            </AnimationOnScroll>
        })
    )
}