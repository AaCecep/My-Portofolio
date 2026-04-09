import Particle from "./components/Particle"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import About from "./components/About" 
import Experience from "./components/Experience"
import Work  from "./components/Work"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Particle />
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Experience/>
      <Work/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  )
}

export default App