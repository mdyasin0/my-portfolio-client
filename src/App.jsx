
import { useContext } from 'react';
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Page/home'
import { ThemeContext } from './Context/ThemeContext';
import About from './Page/About';
import Skills from './Page/Skill';
import Project from './Page/Project';




function App() {
  const { mode} = useContext(ThemeContext);

  return (
    < >
     
     <div     className={` h-screen   ${
          mode === "dark"
            ? "  bg-[#0f172a]"
            : "  bg-[#f7f8fc]"
        }`}>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      
      

     </div>
    </>
  )
}

export default App
