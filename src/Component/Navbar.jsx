import { NavLink } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <div className="sticky  top-0 z-20">
      <nav
        className={`py-3 px-5   ${
          mode === "dark"
            ? "bg-[#0f172a] text-[#ffffff]"
            : "bg-[#1e293b] text-[#e0e7ff]"
        }`}
      >
        <div className="flex  items-center justify-between max-w-5xl mx-auto">
          <div>
            <h1 className="font-bold text-2xl ">MD Yasin</h1>
          </div>

          <div className=" flex items-center  gap-5 text-sm font-bold">
            <div>
              <NavLink>Home</NavLink>
            </div>
            <div>
              <NavLink>About</NavLink>
            </div>
            <div>
              <NavLink>Skills</NavLink>
            </div>
            <div>
              <NavLink>Projects</NavLink>
            </div>

            <div>
              <NavLink>Contact</NavLink>
            </div>

            <div className="flex items-center">
              <button
                onClick={toggleMode}
                className={`p-2 rounded-full transition duration-300 
    ${
      mode === "light"
        ? "bg-gray-200 text-yellow-500"
        : "bg-gray-800 text-white hover:bg-gray-700"
    }`}
                aria-label="Toggle Theme"
              >
                {mode === "light" ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
            </div>
           
          </div>
           <div>
<a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button
                className={`py-1 px-3 text-sm rounded-lg  border transition-colors duration-200 hover:bg-opacity-80 ${
                  mode === "dark"
                    ? "bg-[#1e293b] text-white border-[#3b82f6]"
                    : "bg-white text-[#0C4A6E] border-[#0ea5e9]"
                }`}
              >
              Download Resume
              </button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
