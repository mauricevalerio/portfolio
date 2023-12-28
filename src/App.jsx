import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Projects from './components/Projects'

export default function App() {
  return (
    <>
      <main className='page-animation'>
        <Header />
        <About />
        <Skills />
        <Projects />
      </main>

      <Footer />
    </>
  )
}
