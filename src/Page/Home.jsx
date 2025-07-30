import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <div className={`${mode === "dark" ? "bg-[#0f172a]" : "bg-[#e0f2fe]"} py-20`}>
      <div className="max-w-5xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* === Text Content === */}
        <div>
          <h1 className={`text-4xl font-bold mb-2 ${mode === "dark" ? "text-[#0ea5e9]" : "text-[#1e3a8a]"}`}>
            Hi, I am{" "}
            <span className={`${mode === "dark" ? "text-[#14b8a6]" : "text-[#0d9488]"}`}>
              MD Yasin
            </span>
          </h1>

          <h3 className={`text-xl mb-4 font-medium ${mode === "dark" ? "text-[#0ea5e9]" : "text-[#2563eb]"}`}>
            MERN Stack Developer | Digital Marketer
          </h3>

          <p className={`mb-6 ${mode === "dark" ? "text-gray-400" : "text-gray-700"}`}>
            I build responsive web apps using MERN stack and help brands grow through effective digital marketing strategies.
          </p>

          {/* === Buttons === */}
          <div className="flex gap-4 mb-6">
            <button
              className={`py-2 px-5 rounded-lg font-semibold shadow-md transition-transform duration-200 hover:scale-105 ${
                mode === "dark"
                  ? "bg-[#3b82f6] text-[#e0e7ff]"
                  : "bg-[#0ea5e9] text-white"
              }`}
            >
              Hire Me
            </button>
            <button
              className={`py-2 px-5 rounded-lg font-semibold border transition-colors duration-200 hover:bg-opacity-80 ${
                mode === "dark"
                  ? "bg-[#1e293b] text-white border-[#3b82f6]"
                  : "bg-white text-[#0ea5e9] border-[#0ea5e9]"
              }`}
            >
              Download Resume
            </button>
          </div>

          
        </div>

        {/* === Image Section === */}
        <div className="relative w-80 h-70">
          <div className="w-full h-full rounded-full bg-[#5451D7]"></div>
          <img
            src="src/assets/Untitled_design-removebg-preview.png"
            alt="MD Yasin profile"
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-72 h-72 object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
