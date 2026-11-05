import NavBar from './components/NavBar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Showcase from './components/Showcase'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Projects from './components/Projects';

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <AboutMe/>
      <Showcase/>
      <Projects/>
    </main>
  )
}

export default App

