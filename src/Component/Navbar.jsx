import { NavLink } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { mode, toggleMode } = useContext(ThemeContext);
  return (
    <div>
      <nav
        className={`py-3 px-5   ${
          mode === "dark"
            ? "bg-[#0f172a] text-[#ffffff]"
            : "bg-[#1e293b] text-[#e0e7ff]"
        }`}
      >
       <div className="flex  items-center gap-100 max-w-5xl mx-auto">
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
            <NavLink>Services</NavLink>
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
       </div>
      </nav>
    </div>
  );
};

export default Navbar;
