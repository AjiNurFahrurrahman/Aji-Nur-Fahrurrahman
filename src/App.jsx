import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="wrap">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Footer>
        <Contact />
      </Footer>
    </div>
  )
}
