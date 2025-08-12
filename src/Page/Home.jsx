import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";

const Home = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <div
      className={`${
        mode === "dark" ? "bg-[#0f172a]" : "bg-[#e0f2fe]"
      } py-20 min-h-screen flex items-center`}
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Side: Social + Text */}
        <div className="flex flex-col md:flex-row gap-10 w-full md:w-auto">
          
          {/* Social Icons */}
          <div className="flex md:flex-col justify-center md:justify-start gap-5 md:gap-6">
            <a
              href="https://facebook.com/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-indigo-100 transition"
            >
              <FaFacebook className="w-6 h-6 md:w-5 md:h-5" />
            </a>
            <a
              href="https://github.com/"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-indigo-100 transition"
            >
              <FaGithub className="w-6 h-6 md:w-5 md:h-5" />
            </a>
            <a
              href="https://linkedin.com/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-indigo-100 transition"
            >
              <FaLinkedin className="w-6 h-6 md:w-5 md:h-5" />
            </a>
            <a
              href="https://twitter.com/"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-indigo-100 transition"
            >
              <FaTwitter className="w-6 h-6 md:w-5 md:h-5" />
            </a>
          </div>

          {/* Text Content */}
          <div className="max-w-full md:max-w-xl">
            <h1
              className={`text-4xl sm:text-5xl font-bold mb-2 ${
                mode === "dark" ? "text-[#0ea5e9]" : "text-[#1e3a8a]"
              }`}
            >
              Hi, I am{" "}
              <span
                className={`${
                  mode === "dark" ? "text-[#14b8a6]" : "text-[#0d9488]"
                }`}
              >
                MD Yasin
              </span>
            </h1>

            <h3
              className={`text-xl sm:text-2xl mb-4 font-medium ${
                mode === "dark" ? "text-[#0ea5e9]" : "text-[#2563eb]"
              }`}
            >
              MERN Stack Developer
            </h3>

            <p
              className={`mb-6 max-w-full sm:max-w-lg text-base sm:text-lg ${
                mode === "dark" ? "text-gray-400" : "text-gray-700"
              }`}
            >
              I craft dynamic and user-friendly web applications with the MERN
              stack, delivering efficient and scalable solutions that help
              businesses thrive online.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                className={`py-2 px-5 rounded-lg font-semibold shadow-md transition-transform duration-200 hover:scale-105 ${
                  mode === "dark"
                    ? "bg-[#3b82f6] text-[#e0e7ff]"
                    : "bg-[#0369A1] text-white"
                }`}
              >
                Hire Me
              </button>

              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button
                  className={`py-2 px-5 rounded-lg font-semibold border transition-colors duration-200 hover:bg-opacity-80 ${
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
        </div>

        {/* Right Side: Image */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
          <div className="w-full h-full rounded-full bg-[#5451D7]"></div>
          <img
            src="src/assets/Untitled_design-removebg-preview.png"
            alt="MD Yasin profile"
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
