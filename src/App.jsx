import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import AddAnimation from './components/renderProps/AddAnimation'

export default function App() {
  const arrayComponent = [<Hero />, <AboutMe />, <Skills />, <Projects />, <ContactMe />]
  return (
    <div>
        <Header />
        <AddAnimation 
        arrayComponent={arrayComponent}
        />
    </div>
  )
}
