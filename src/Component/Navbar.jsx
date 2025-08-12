import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router";
import { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { mode, toggleMode } = useContext(ThemeContext);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  // Mobile menu item - ক্লিক করলে মেনু বন্ধ হবে
  const MenuItems = () => (
    <>
      {isHome ? (
        <>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={closeMenu}
          >
            Home
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={closeMenu}
          >
            About
          </ScrollLink>

          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={closeMenu}
          >
            Skills
          </ScrollLink>

          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={closeMenu}
          >
            Projects
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={closeMenu}
          >
            Contact
          </ScrollLink>
        </>
      ) : (
        <>
          <RouterLink
            to="/"
            className="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={closeMenu}
          >
            Home
          </RouterLink>
          <RouterLink
            to="/"
            className="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={closeMenu}
          >
            About
          </RouterLink>
          <RouterLink
            to="/"
            className="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={closeMenu}
          >
            Skills
          </RouterLink>
          <RouterLink
            to="/"
            className="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={closeMenu}
          >
            Projects
          </RouterLink>
          <RouterLink
            to="/"
            className="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-700"
            onClick={closeMenu}
          >
            Contact
          </RouterLink>
        </>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-30 shadow-md">
      <nav
        className={`py-3 px-5 transition-colors duration-300 ${
          mode === "dark"
            ? "bg-[#0f172a] text-[#ffffff]"
            : "bg-[#1e293b] text-[#e0e7ff]"
        }`}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="font-bold text-2xl cursor-pointer select-none">MD Yasin</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm font-bold">
            {isHome ? (
              <>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer hover:underline"
                >
                  Home
                </ScrollLink>

                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer hover:underline"
                >
                  About
                </ScrollLink>

                <ScrollLink
                  to="skills"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer hover:underline"
                >
                  Skills
                </ScrollLink>

                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer hover:underline"
                >
                  Projects
                </ScrollLink>

                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer hover:underline"
                >
                  Contact
                </ScrollLink>
              </>
            ) : (
              <>
                <RouterLink to="/" className="hover:underline">
                  Home
                </RouterLink>
                <RouterLink to="/" className="hover:underline">
                  About
                </RouterLink>
                <RouterLink to="/" className="hover:underline">
                  Skills
                </RouterLink>
                <RouterLink to="/" className="hover:underline">
                  Projects
                </RouterLink>
                <RouterLink to="/" className="hover:underline">
                  Contact
                </RouterLink>
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
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

            <button
              onClick={toggleMenu}
              className="p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div
            className={`md:hidden mt-2 rounded-md shadow-lg bg-white dark:bg-[#1e293b] text-black dark:text-white max-w-5xl mx-auto`}
          >
            <MenuItems />

            <div className="px-4 py-2 border-t border-gray-300 dark:border-gray-600 flex justify-center">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button
                  className={`py-1 px-3 text-sm rounded-lg border transition-colors duration-200 hover:bg-opacity-80 w-full ${
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
        )}
      </nav>
    </div>
  );
};

export default Navbar;
