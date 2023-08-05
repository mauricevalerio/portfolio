import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className='page-animation'>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    )
}