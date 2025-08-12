
import { useContext } from 'react';
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Page/home'
import { ThemeContext } from './Context/ThemeContext';
import About from './Page/About';
import Skills from './Page/Skill';
import Project from './Page/Project';
import ServicesSection from './Page/Service';
import ContactSection from './Page/Contact';
import Footer from './Page/Footer';




function App() {
  const { mode} = useContext(ThemeContext);

  return (
    < >
     
     <div     className={`${
          mode === "dark"
            ? "  bg-[#0f172a]"
            : "  bg-[#f7f8fc]"
        }`}>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <ServicesSection></ServicesSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
      
      

     </div>
    </>
  )
}

export default App
