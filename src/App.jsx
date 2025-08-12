import { useContext } from 'react';
import { Element } from 'react-scroll'; 
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Page/home'
import { ThemeContext } from './Context/ThemeContext';
import About from './Page/About';
import Skills from './Page/Skill';
import Project from './Page/Project';
import ContactSection from './Page/Contact';
import Footer from './Page/Footer';

function App() {
  const { mode } = useContext(ThemeContext);

  return (
    <div className={`${
      mode === "dark" ? "bg-[#0f172a]" : "bg-[#f7f8fc]"
    }`}>
      <Navbar />
      
      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="projects">
        <Project />
      </Element>

      <Element name="contact">
        <ContactSection />
      </Element>

      <Footer />
    </div>
  )
}

export default App;
