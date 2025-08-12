import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { mode, toggleMode } = useContext(ThemeContext);
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <div className="sticky top-0 z-20">
      <nav
        className={`py-3 px-5 ${
          mode === "dark"
            ? "bg-[#0f172a] text-[#ffffff]"
            : "bg-[#1e293b] text-[#e0e7ff]"
        }`}
      >
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <div>
            <h1 className="font-bold text-2xl">MD Yasin</h1>
          </div>

          <div className="flex items-center gap-5 text-sm font-bold">
            {isHome ? (
              <>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer"
                >
                  Home
                </ScrollLink>

                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer"
                >
                  About
                </ScrollLink>

                <ScrollLink
                  to="skills"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer"
                >
                  Skills
                </ScrollLink>

                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer"
                >
                  Projects
                </ScrollLink>

                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </>
            ) : (
              <>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/">About</RouterLink>
                <RouterLink to="/">Skills</RouterLink>
                <RouterLink to="/">Projects</RouterLink>
                <RouterLink to="/">Contact</RouterLink>
              </>
            )}

            <button
              onClick={toggleMode}
              className={`p-2 rounded-full transition duration-300 ${
                mode === "light"
                  ? "bg-gray-200 text-yellow-500"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
              aria-label="Toggle Theme"
            >
              {mode === "light" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>

          <div>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button
                className={`py-1 px-3 text-sm rounded-lg border transition-colors duration-200 hover:bg-opacity-80 ${
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
